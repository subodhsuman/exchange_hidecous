<template>
    <div>
        <section class="verify_mail d-flex align-items-center">
            <div class="container">
                <div class="col-md-12 text-center">
                    <div class="verfiy_heading mb-5">
                        <h6>Please wait while Redirecting you to Exchange...</h6>
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
import ApiClass from '@/api/api'
export default {
    name: 'EmailVerifyView',
   async mounted()
    {
       let res = await ApiClass.postRequest('register/verify', false, { token: this.$route.query.token || "" })
       if (res?.data)
       {
           if (res.data.status_code == 0)
           {
               await new Promise((resolve) => setTimeout(resolve, 2000));
               this.failed(res.data.message);
               return this.$router.push('/register');
           }
           localStorage.setItem('token', res.data.data.token)
           localStorage.setItem('user', JSON.stringify(res.data.data.user))
           this.$store.commit('setLogin',true)
           await new Promise((resolve) => setTimeout(resolve, 1000));
           this.$router.push("/exchange"); 

       }
    }
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
