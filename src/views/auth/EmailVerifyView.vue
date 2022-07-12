<template>
<div>
    <section class="verify_mail d-flex align-items-center">
        <div class="container">
            <div class="col-md-12 text-center">
                <div class="verfiy_heading mb-5">
                    <h6>We are Redirecting to Exchange Page</h6>
                </div>
                <!-- SPINNER -->
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'EmailVerifyView'
}
</script>

<style scoped>
.verfiy_heading h6 {
    color: var(--hideous-text-gray);
    font-size: 18px;
}
.verify_mail .spinner-border{
    border-color:var(--hideous-pink);
    border-right-color:transparent;
    width: 3rem;
    height: 3rem;
}
.verify_mail{
    background-color: var(--hideous-primary);
    min-height: 100vh;
}
</style>
