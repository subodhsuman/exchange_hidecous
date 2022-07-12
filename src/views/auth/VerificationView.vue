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
                                <div class="col-md-12">
                                    <h6 class="otp_heading mb-4">Enter Otp</h6>
                                </div>
                                <div class="col-md-12 text-center">
                                    <p class="otp_text">Enter 6 digit code which we have sent to your mail-id</p>
                                </div>
                                <div class="col-md-12">
                                    <!-- OTP -->
                                    <div class="otp d-flex justify-content-between mb-3">
                                        <OtpInput ref="otpInput" input-classes="otp-input" separator="-" :num-inputs="6" :should-auto-focus="true" :is-input-num="true" @on-change="handleOnChange" @on-complete="handleOnComplete" class="m-auto"/>
                                        <form action="" class=" d-flex  justify-content-between ">
                                          <div v-if="false">
                                              <input class="otp" type="text" @input='digitValidate($event.target)' @keyup='tabChange(1)' maxlength=1>
                                            <input class="otp" type="text" @input='digitValidate($event.target)' @keyup='tabChange(2)' maxlength=1>
                                            <input class="otp" type="text" @input='digitValidate($event.target)' @keyup='tabChange(3)' maxlength=1>
                                            <input class="otp" type="text" @input='digitValidate($event.target)' @keyup='tabChange(4)' maxlength=1>
                                          </div>
                                        </form>
                                    </div>
                                </div>
                               
                                <div class="col-md-12">
                                    <!-- BUTTON -->
                                    <div class="d-grid mb-2">
                                        <button type="submit" class="btn auth_btn text-white shadow-none">Next</button>
                                    </div>
                                </div>
                                 <div class="col-md-12 text-center resend">
                                    <p class="mb-0 "><a href="" class="text-decoration-none">Resend Otp</a></p>
                                </div>
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
export default {
    name: 'VerificationView',
    components: {
        OtpInput
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
