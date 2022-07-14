<template>
    <div>
        <section class="auth d-flex align-items-center position-relative">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <!-- AUTH IMAGE -->
                    <div class="col-xl-6 col-lg-6">
                        <div class="image_section d-none d-lg-block">
                            <h2>Forgot Your <span class="pink-text">Password</span></h2>
                            <div class="main-img">
                                <img src="@/assets/images/auth/main-img.png" class="img-fluid" alt="main-image">
                            </div>
                        </div>
                    </div>
                    <!-- AUTH FORM -->
                    <div class="col-xl-6 col-lg-6 col-md-9">
                        <div class="form_box px-3 py-5 px-md-5">
                            <form @submit.prevent="submit">
                                <!-- EMAIL -->
                                <div class="mb-4">
                                    <label for="email" class="form-label">Email </label>
                                    <input type="email" class="form-control shadow-none border-0" id="email"
                                        placeholder="Enter Email id" v-model="v$.email.$model">
                                    <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                                        <div class="text-danger">{{ error.$message }}</div>
                                    </div>
                                </div>
                                <!-- BUTTON -->
                                <div class="d-grid mt-2">
                                    <button type="submit" class="btn auth_btn text-white shadow-none" v-if="!loader">Get
                                        Otp</button>
                                    <button type="button" class="btn auth_btn text-white shadow-none" disabled v-else>
                                        <div class="d-flex justify-content-center">
                                            <div class="spinner-border" role="status"
                                                style="width: 1rem; height: 1rem;">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import ApiClass from '@/api/api'
export default {
    name: 'ForgotPasswordView',
    setup() {    
        const loader = ref(false)
        const state = reactive({
            email: '',
        })

        const rules = {
            email: { required: helpers.withMessage('Email feild is required', required), email: helpers.withMessage('Value must be an email', email) }
        }

        const v$ = useVuelidate(rules, state)

        return { state, v$, loader }
    },
    methods: {
        async submit() {

            const result = await this.v$.$validate()
            if (!result) {
                return
            }
            this.loader = true;
            let res = await ApiClass.postRequest('forgotpassword', false, { email: this.state.email });
            if (res?.data) {
                this.loader = false;

                if (res.data?.status_code == 0) {
                    return this.failed(res.data.message);
                }
                this.success(res.data.message);
                this.reSet();
                return this.$router.push("/exchange");
            }
        },
        reSet() {
            this.v$.$reset();
            this.state.email = "";
        }

    }
}
</script>
