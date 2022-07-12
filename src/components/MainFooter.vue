<template>
<div>
    <footer class="footer_box ">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="upper_footer d-lg-flex d-block  justify-content-between align-items-center mb-5">
                        <div> <img src="../assets/logo.png" alt="logo" class="img-fluid"> </div>
                        <div>
                            <ul class="d-flex list-unstyled justify-content-evenly mb-0">
                                <li class="p-md-2 p-1 mb-0"> <img src="../assets/images/footer/google-play.png" alt="image" class="img-fluid"> </li>
                                <li class="p-md-2 p-1 mb-0"> <img src="../assets/images/footer/app-store.png" alt="image" class="img-fluid"> </li>
                                <li class="p-md-2 p-1 mb-0"> <img src="../assets/images/footer/windows.png" alt="image" class="img-fluid"> </li>
                                <li class="p-md-2 p-1 mb-0"> <img src="../assets/images/footer/mac.png" alt="image" class="img-fluid"> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-sm-4 col-md-4 col-lg-2 col-xl-2">
                    <div class="footer_box mb-4">
                        <h3 class="text-uppercase">About</h3>
                        <ul class="list-unstyled fw-light">
                            <li>
                                <router-link to=""> Token</router-link>
                            </li>
                            <li>
                                <router-link to="/api"> API</router-link>
                            </li>
                            <li>
                                <router-link to="/blog">Blog</router-link>
                            </li>
                            <li>
                                <router-link to="/careers">Careers</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-4 col-md-4 col-lg-2 col-xl-2">
                    <div class="footer_box mb-4 ">
                        <h3 class="text-uppercase">Services</h3>
                        <ul class="list-unstyled">
                            <li>
                                <router-link to="/download">Download</router-link>
                            </li>
                            <li>
                                <router-link to="/corporate-account">Corporate Account</router-link>
                            </li>
                            <li>
                                <router-link to="/referral-program">Referral Program</router-link>
                            </li>
                             <li>
                                <router-link to="/list-cash">List Your Cash</router-link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="col-sm-4 col-md-4 col-lg-2 col-xl-2">
                    <div class="footer_box mb-4 ">
                        <h3 class="text-uppercase"> Products </h3>
                        <ul class="list-unstyled">
                            <li>
                                <router-link to="/spot-trade">Spot Trade</router-link>
                            </li>
                            <li>
                                <router-link to="/staking-margin">Staking Margin</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-4 col-md-4 col-lg-2 col-xl-2">
                    <div class="footer_box mb-4 ">
                        <h3 class="text-uppercase">Support</h3>
                        <ul class="list-unstyled">
                            <li>
                                <router-link to="/help-center">Help Center</router-link>
                            </li>
                          
                            <li>
                                <router-link to="/media-assets">Media Assets</router-link>
                            </li>
                              <li>
                                <router-link to="/list-your-token">List Your Token</router-link>
                            </li>
                            <li>
                                <router-link to="/fees">Fees</router-link>
                            </li>
                            <li>
                                <router-link to="/assets">Assets</router-link>
                            </li>
                            <li>
                                <router-link to="/security">Security</router-link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-sm-4 col-md-4 col-lg-2 col-xl-2">
                    <div class="footer_box mb-4 ">
                        <h3 class="text-uppercase">Buy Crypto</h3>
                        <ul class="list-unstyled">
                            <li>
                                <router-link to="/bitcoin">Buy Bitcoin</router-link>
                            </li>
                            <li>
                                <router-link to="/ethereum">Buy Ethereum</router-link>
                            </li>
                            <li>
                                <router-link to="/tron">Buy Tron</router-link>
                            </li>
                            <li>
                                <router-link to="/litecoin">Buy Litecoin</router-link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    </footer>
        <div class="social-icons pt-3">
        <div class="container-fluid">

            <div class="row">
                <div class="col-md-12 col-lg-12 col-xl-12">
                    <div class="text-center copy-right">
                        <p > &copy; All Rights Reserved by <router-link to="/">HIDEOUS PVT LMT</router-link>.  </p>
                    </div>
                </div>
                <div class="col-md-12 col-lg-12 col-xl-12">
                    <div class="text-center">
                        <ul class="d-flex list-unstyled justify-content-center">
                            <li> <img src="../assets/images/instagram.png" alt="social-icon" class="me-3"> </li>
                            <li> <img src="../assets/images/fb.png" alt="social-icon" class="me-3"> </li>
                            <li> <img src="../assets/images/twi.png" alt="social-icon" class="me-3"> </li>
                            <li> <img src="../assets/images/in.png" alt="social-icon" class="me-3"> </li>
                            
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'MainFooter'
}
</script>
<style scoped>
footer{
    padding: 70px 0 0;
    background-color: var( --hideous-primary);
}
.footer_box h3{
    font-size: 16px;
     margin-bottom: 10px;
}
.footer_box a {
    color:var(--hideous-grey);
    text-decoration: none;
        font-weight: 400;
   
}
.footer_box li {
    margin-bottom: 12px;
    transition: all 0.2s ease-in-out;
}
.footer_box a:hover {
    color:var(--p-white);
    transition: all 0.2s ease-in-out;
}
.upper_footer li,
.social-icons {
    transition: all 0.2s ease-in-out;
}
.upper_footer li img:hover ,
.social-icons img:hover{
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
}

/* Copy right Link css */
.copy-right a {
    color: var(--hideous-white);
    text-decoration: none;
    font-size: 14px;
}
.copy-right a:hover {
    color: var(--hideous-pink);
    text-decoration: underline;
}

/* Upper footer --> hover on  images   */
.upper_footer ul li img:hover{
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
}
.upper_footer ul li img{
    transition: all 0.2s ease-in-out;
}
.footer_box h3 ,
.copy-right p{
    color: var(--hideous-white);
}





</style>
