<template>
<div>
    <header class="exchange-header">
        <nav :class="{change_color: scrollPosition > 40}" class="navbar navbar-expand-xl">
            <div class="container-fluid">
                <router-link class="navbar-brand exchange-logo px-2" to="/"><img src="../assets/logo.png" class="img-fluid"></router-link>
                <button @click="hidden = !hidden" class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><img :src="hidden ? hide : show"></span>
                </button>
                <!-- ******************************* ADS COIN EXCHANGE HEADER  *******************************  -->
                <div class="collapse navbar-collapse d-lg-flex d-block text-center justify-content-between mt-xl-0 mt-2" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item px-xl-2 px-0 " @click="closeToggle">
                            <router-link disabled class="nav-link" aria-current="page" to="/exchange">Exchange</router-link>

                        </li>
                        <li class="nav-item px-xl-2 px-0 " @click="closeToggle">
                            <router-link disabled class="nav-link" aria-current="page" to="/spot">P2p</router-link>

                        </li>
                        <li class="nav-item px-xl-2 px-0 " @click="closeToggle">
                            <router-link disabled class="nav-link" to="/portfolio">Portfolio</router-link>
                        </li>
                        <li class="nav-item px-xl-2 px-0 " @click="closeToggle">
                            <router-link disabled class="nav-link" to="/buy-sell">Setting</router-link>
                        </li>
                        <!-- <li class="nav-item px-xl-2 px-0 " @click="closeToggle">
                            <router-link disabled class="nav-link"  to="/download">Download</router-link>
                        </li> -->

                    </ul>
                    <div class="left_nav">
                        <ul class="d-xl-flex d-block list-unstyled">
                            <li class="px-xl-2 px-0">
                                <div class="d-flex day_night">
                                    <button type="button" class="btn "> <img src="../assets/images/sun.png" alt="icon"></button>
                                    <span> <img src="../assets/images/s-line.png" alt="icon"> </span>
                                    <button type="button" class="btn "> <img src="../assets/images/moon.png" alt="icon"></button>
                                </div>
                            </li>
                            <li class="d-xl-flex d-block px-xl-2 px-0 me-0 me-xl-3" >
                                <router-link disabled class="download_here button download_btn shadow-none" type="button" @click="toggle1 = !toggle1,toggle=false;" to="/"> Download
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" style="fill: rgba( 255, 255, 255, 1)" viewBox="0 0 384 512">
                                            <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" /></svg>
                                    </span>
                                </router-link>
                                <div class="download_box px-3 py-2" v-if="toggle1">
                                    <img src="../assets/images/code-qr.png" alt="icon" class="img-fluid">
                                    <div class="d-flex justify-content-around">
                                        <img src="../assets/images/for-i.png" alt="icon" class="img-fluid">
                                        <!-- <img src="../assets/images/line.png" alt="icon" class="img-fluid"> -->
                                        <span class="px-2"> | </span>

                                        <img src="../assets/images/for-android.png" alt="icon" class="img-fluid">
                                    </div>
                                </div>
                            </li>
                            <li class=" px-xl-2 px-0 d-xl-flex d-block" >
                                <div class="get_started button " style="cursor: pointer;">

                                    <button type="button" class="cus_btn shadow-none" @click="toggle = !toggle,toggle1=false">GET STARTED</button>
                                </div>
                                <div class="log_box px-3 py-4" v-if="toggle">
                                    <router-link class="shadow-none" type="button" to="/portfolio" @click="toggle=false"> Sign in</router-link>
                                    <span class="px-2"> | </span>
                                    <router-link class="shadow-none" type="button" to="/" @click="toggle=false"> Sign up </router-link>
                                </div>
                            </li>
                        </ul>

                    </div>

                </div>

            </div>
        </nav>
    </header>

</div>
</template>

<script>
export default {
    name: 'ExHeader',
    data() {
        return {
            hidden: true,
            scrollPosition: null,
            // hide: require('@/assets/images/toggle.png'),
            // show: require('@/assets/images/t-close.png'),
            hide: require('@/assets/images/icons/toggle.svg'),
            show: require('@/assets/images/icons/cancel.svg'),
            toggle: false,
            toggle1: false
        }

    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        },
        closeToggle() {
            const menuToggle = document.getElementById("navbarNav");
            menuToggle.classList.remove("show");
        },

    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    }

}
</script>

<style scoped>
/* .change_color {
 background-color: var(--just-bit-secondary); 
} */
.navbar-toggler-icon {
    display: inline-block;
    width: unset;
    height: unset;
}

.btn-check:focus+.btn,
.btn:focus {
    box-shadow: none;
}

.exchange-header {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: var(--hideous-primary);
}

a.nav-link,
button {
    font-size: 14px;
    color: var(--hideous-white);
}

.exchange-header .router-link-active.nav-link,
.lbm-header .nav-link:hover {
    font-weight: 600;
    color: var(--hideous-pink);
}

nav ul li a:hover,
.router-link .nav-link.active {
    color: var(--hideous-pink);
}

.navbar-toggler:focus {
    box-shadow: none;
    outline: none;
}

.nav-item .btn-info:hover {
    background-color: var(--just-bit-transparent);
    border: 1px solid var(--hideous-pink);
}

.sign_btn .btn {
    font-weight: 500;
}

.cus_btn {
    display: inline-block;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    padding: 6px 18px;
    font-size: 14px;
    border-radius: 5px;
    background-color: var(--transparent);
    border: 1px solid var(--hideous-pink);
    transition: all 0.2s ease-in-out;
    color: var(--hideous-white) !important;
}

.cus_btn:hover {
    background-color: var(--hideous-pink);
    transition: all 0.2s ease-in-out;
}

.download_btn {
    display: inline-block;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    padding: 6px 20px;
    margin-bottom: 10px;
    font-size: 14px;
    border-radius: 5px;
    background-color: var(--hideous-pink);
    border: 1px solid var(--hideous-pink);
    transition: all 0.2s ease-in-out;
    color: var(--hideous-white) !important;

}

.get_started {
    position: relative;
}

.log_box {
    position: absolute;
    top: 63px;
    right: 9px;
    /* height: 80px;
    width: 180px; */
    z-index: 9;
    background: white;
}

.log_box a {
    color: var(--border);
    text-decoration: none;
    font-size: 15px;
}

.log_box a:hover {
    text-decoration: underline;
}

.log_box span {
    font-size: 20px;
}

.download_here {
    position: relative;
}

.download_box {
    position: absolute;
    top: 63px;
    z-index: 9;
    background: var(--hideous-white);
}

.day_night span {
    padding: 0.375rem 0.75rem;
}

/* 
Switch button css */
/* .form-switch .form-check-input {
   width: 63px;
    height: 31px;
    margin-left: -2.5em;
background-image: url(../assets/images/sun.png);    background-position: left center;
    border-radius: 2em;
    transition: background-position .15s ease-in-out;
}

.form-switch .form-check-input:checked {
    background-position: right center;
    background-image: url(../assets/images/moon.png) !important;
}
.form-check-input {
    background-color: transparent;

}
.form-check-input:focus {
    border-color: transparent !important;
    outline: 0;
    box-shadow: none;
}
.form-check-input:checked {
    background-color: transparent;
    border-color: transparent;
} */

/* .form-switch .form-check-input:focus {
background-image: url(../assets/images/moon.png) !important;} */
@media (max-width:1200px) {
    .exchange-header {
        background-color: var(--just-bit-secondary);
    }

    a.nav-link {
        font-size: 15px;
    }

    .nav-link {
        padding: 5px;
    }

    nav .button .btn {
        margin-bottom: 11px;
        margin-left: 3px;
    }

    .navbar-nav {
        padding-left: 5px;
    }

    .navbar {
        padding-top: 1rem !important;
        padding-bottom: 1rem !important;

    }
}

@media (min-width:320px) and (max-width:767px) {
    .navbar-brand img {
        max-width: 80px;
    }

    a.nav-link,
    button {
        font-size: 15px;
    }
}
</style>
