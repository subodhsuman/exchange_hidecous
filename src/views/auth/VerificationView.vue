<template>
    <div>
        <section class="auth d-flex align-items-center position-relative">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <!-- AUTH IMAGE -->
                    <div class="col-xl-6 col-lg-6">
                        <div class="image_section d-none d-lg-block">
                            <h2>Enter <span class="pink-text">OTP</span></h2>
                            <div class="main-img">
                                <img src="@/assets/images/auth/main-img.png" class="img-fluid" alt="main-img">
                            </div>
                        </div>
                    </div>
                    <!-- AUTH FORM -->
                    <div class="col-xl-6 col-lg-6 col-md-9">
                        <div class="form_box px-4 py-5 px-xxl-5">
                            <div class="row justify-content-center">
                                <form @submit.prevent="submit">
                                    <div class="col-md-12">
                                        <h6 class="otp_heading mb-4">Enter Otp</h6>
                                    </div>
                                    <div class="col-md-12 text-center">
                                        <p class="otp_text">Enter 6 digit code which we have sent to your mail-id</p>
                                    </div>
                                    <div class="col-md-12">
                                        <!-- OTP -->
                                        <div class="otp d-flex justify-content-center mb-3">

                                            <OtpInput ref="otpInput" input-classes="otp-input" separator="-"
                                                :num-inputs="6" :should-auto-focus="true" :is-input-num="true"
                                                @on-change="(value) => state.otp = value"
                                                @on-complete="(value) => state.otp = value" class="m-auto" />


                                        </div>
                                        <div class="input-errors" v-for="error of v$.otp.$errors" :key="error.$uid">
                                            <div class="text-danger">{{ error.$message }}</div>
                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <!-- BUTTON -->
                                        <div class="d-grid mb-2">
                                            <button type="submit" v-if="!loader"
                                                class="btn auth_btn text-white shadow-none">Next</button>
                                            <button type="button" class="btn auth_btn text-white shadow-none" disabled
                                                v-else>
                                                <div class="d-flex justify-content-center">
                                                    <div class="spinner-border" role="status"
                                                        style="width: 1rem; height: 1rem;">
                                                        <span class="visually-hidden">Loading...</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-md-12 text-center resend">
                                        <p class="mb-0 ">
                                            <span v-if="timer">{{timer}}</span>
                                            <a href="" v-else @click="reSend()" class="text-decoration-none">Resend Otp</a>

                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import OtpInput from 'vue3-otp-input';
import { ref, computed, reactive } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength,  helpers } from '@vuelidate/validators'
import ApiClass from '@/api/api'
export default {
    name: 'VerificationView',
    components: {
        OtpInput
    },
    setup() {
        const loader = ref(false)
        const state = reactive({
            otp: '',           
        })
        let timer = ref(null)
        let otpData = ''
        const rules = computed(() => {
            return {
                otp: {
                    required: helpers.withMessage('OTP feild is required', required),
                    minLength: helpers.withMessage("OTP must be of 6 digits. ", minLength(6))
                }
            }
        })

        let startTimer = (val) =>
        {
            val = new Date(val).getTime();
            if (timer.value) { clearInterval(); }
            setInterval(() =>
            {                
                var timeGap = (val - new Date().getTime());
                var min = Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60));
                var sec = Math.floor((timeGap % (1000 * 60)) / 1000);
                timer.value = "Resend OTP in ( " + min + "m" + ":" + sec + "s )";
                if (timeGap < 0) {
                    clearInterval();
                    timer.value = '' }

            },1000)
        }  

        const v$ = useVuelidate(rules, state)

        return { v$, loader, state, startTimer, timer, otpData }
    },
    mounted() { 
        this.otpData = JSON.parse(this.$store.getters.getOtpData);
      
        if (!this.otpData) { return this.$router.push('/login') }
        this.startTimer(this.otpData.expired_at)
    },
    methods: {
        async submit() {

            const result = await this.v$.$validate()
            if (!result) {
                return
            }
           
            this.loader = true;
            let res = await ApiClass.postRequest('validateotp', false, { email: this.otpData.email, otp: this.state.otp });
            if (res?.data) {
                this.loader = false;

                if (res.data?.status_code == 0) {
                    return this.failed(res.data.message);
                }
                this.reSet();
                console.log(res.data.data);
                localStorage.setItem('token', res.data.data.token)
                localStorage.setItem('user', JSON.stringify(res.data.data.user))
                this.$store.commit('setLogin', true)
                this.success(res.data.message);
                await new Promise((resolve) => setTimeout(resolve, 1000));
                this.$router.push("/exchange"); 
               
            }
        },
        reSet() {
            this.state.otp = "";
            this.v$.$reset();
        },
      async reSend()
        {
            this.reSet();
            let res = await ApiClass.postRequest('resendotp', false, { email: this.otpData.email, otp: this.otpData.otp_type });
            if (res?.data) {              

                if (res.data?.status_code == 0) {
                    return this.failed(res.data.message);
                }

                this.otpData = res.data.data;
                this.$store.commit('otpData', JSON.stringify(this.otpData));
                this.startTimer(this.otpData.expired_at)
                this.success(res.data.message);          

            }   
        }
    }


}
</script>

<style scoped>
.otp_text {
    color: var(--hideous-text-gray);
    font-size: 14px;
}

 input {
    width: 60px;
    height: 60px;
    outline: 0;
    background-color: var(--hideous-white);
    border-radius: 10px;
}


.otp_heading {
    color: var(--hideous-text-gray);

}

@media (min-width:320px) and (max-width:767px) {
    .otp input {
        width: 31px;
        height: 34px;
    }
}
</style>
