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
                        <form>
                            <!-- EMAIL -->
                            <div class="mb-4">
                                <label for="email" class="form-label">Email </label>
                                <input type="email" class="form-control shadow-none border-0" id="email" placeholder="Enter Email id">
                            </div>
                            <!-- BUTTON -->
                            <div class="d-grid mt-2">
                                <button type="submit" class="btn auth_btn text-white shadow-none">Get Otp</button>
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
export default {
    name: 'ForgotPasswordView'
}
</script>
