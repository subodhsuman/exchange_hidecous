<template>
<div>
    <header class="exchange-header">
        <nav :class="{change_color: scrollPosition > 40}" class="navbar navbar-expand-xl">
            <div class="container-fluid">
                <router-link class="navbar-brand exchange-logo px-2" to="/"><img src="../assets/logo.png" class="img-fluid"></router-link>
                <button @click="hidden = !hidden" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><img :src="hidden ? hide : show"></span>
                </button>
                <!-- ******************************* HIDEOUS EXCHANGE HEADER  *******************************  -->
                <div class="collapse navbar-collapse justify-content-between mt-xl-0 mt-2" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item px-xl-2 px-0 " @click="closeToggle">
                            <router-link class="nav-link" aria-current="page" to="/exchange">Exchange</router-link>

                        </li>
                        <li class="nav-item px-xl-2 px-0" @click=" closeToggle">
                            <router-link class="nav-link" to="/p2p">P2p</router-link>
                        </li>
                        <li class="nav-item px-xl-2 px-0 " @click="closeToggle">
                            <router-link class="nav-link" aria-current="page" to="/portfolio">Portfolio</router-link>

                        </li>

                        <li class="nav-item px-xl-2 px-0 " @click="closeToggle">
                            <router-link class="nav-link" to="/setting/profile">Settings</router-link>
                        </li>

                    </ul>

                    <div class="left_nav">
                        <ul class="d-xl-flex d-block navbar-nav">

                            <!-- DAY NIGHT THEME BUTTONS -->
                            <li class="nav-item p-xl-2 p-0 mb-2 mb-xl-0">
                                <div class="d-flex day_night">
                                    <button type="button" class="btn p-0 px-0 px-xl-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: var(--hideous-sun);transform: ;msFilter:;" @click="themeChange()">
                                            <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
                                        </svg>
                                    </button>
                                    <span class="py-1"> <img src="../assets/images/s-line.png" alt="icon"> </span>
                                    <button type="button" class="btn p-0 px-0 px-xl-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: var(--hideous-moon);transform: ;msFilter:;" @click="themeChange()">
                                            <path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                            <!-- DOWNLOAD HERE BUTTON -->
                            <li class="nav-item p-xl-2 p-0  d-xl-flex d-block me-0 me-xl-3">
                                <button type="button" class="download_here download_btn mb-2 mb-xl-0" @click="toggle1 = !toggle1,toggle=false;"> Download
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" style="fill: rgba( 255, 255, 255, 1)" viewBox="0 0 384 512">
                                            <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" /></svg>
                                    </span>
                                </button>
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

                            <!-- GET STARTED -->
                            <li class="nav-item p-xl-2 p-0 d-xl-flex d-block">
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
            hide: require('@/assets/images/toggle.png'),
            show: require('@/assets/images/t-close.png'),
            toggle: false,
            toggle1: false,
            toggleVal: true,
        }

    },
    closeToggle() {
        this.hidden = true
        const menuToggle = document.getElementById("navbarNav");
        menuToggle.classList.remove("show");
    },
    methods: {
        lighttheme() {
            // this.toggleVal ? this.darkChart() : this.lightChart();
            var light = document.getElementById("hide_exchange");
            light.classList.toggle("light");

        },
        themeChange() {
            var light = document.getElementById("app");
            light.classList.toggle("light");

            var img = document.getElementById("p2p_image");
            img.classList.toggle("light_image");
        },
        updateScroll() {
            this.scrollPosition = window.scrollY

        },
        mounted() {
            window.addEventListener('scroll', this.updateScroll);
        }

    }
}
</script>

<style scoped>
/* .change_color {
 background-color: var(--just-bit-secondary); 
} */

.btn-check:focus+.btn,
.btn:focus {
    box-shadow: none;
}

.exchange-header {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: var(--hideous-dark);
}

a.nav-link,
button {
    font-size: 14px;
    color: var(--hideous-white);
    font-weight: 500;
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
    font-size: 14px;
    border-radius: 5px;
    background-color: var(--hideous-pink);
    border: 1px solid var(--hideous-pink);
    transition: all 0.2s ease-in-out;
    color: var(--white) !important;

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
    background: var(--white);
    box-shadow: 0px 0px 5px #605c5c;
}

.log_box a {
    color: var(--log-grey);
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
    background: var(--white);
    box-shadow: 0px 0px 5px #605c5c;
}

.navbar-toggler-icon {
    width: unset;
    height: unset;
}

/************************************Toggle Switch*************************************/

.toggle-switch-3 {
    position: relative;
    width: 40px;
    height: 15px;
    cursor: pointer;
}

.toggle-switch-3 input {
    position: relative;
    z-index: 1;
    appearance: none;
}

.toggle-switch-3 span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    transition: 0.5;
    background-color: #e3e3e3;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.31), inset -1px 2px 4px rgba(0, 0, 0, 0.4);
}

.toggle-switch-3 input:checked~span {
    background: #5a5a5a;
    box-shadow: 0px 0px 4px rgb(0 0 0 / 31%), inset -1px 2px 4px rgb(0 0 0 / 40%);
    box-shadow: 0px 0px 4px rgb(0 0 0 / 31%), inset -1px 2px 4px rgb(0 0 0 / 40%);
}

.toggle-switch-3 span i {
    position: absolute;
    width: calc(15px - -3px);
    aspect-ratio: 1;
    background: #d3d3d3;
    border-radius: 50%;
    left: -4px;
    top: -1px;
}

.toggle-switch-3 input:checked~span i {
    left: calc((40px - 15px) + 2px);
    background: #5a5a5a;
    box-shadow: 0px 0px 4px rgb(0 0 0 / 9%);
}

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

    .download_box {
        top: 72px;
        right: 9px;
    }

    .log_box {
        position: absolute;
        top: 70px;
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

    /* Get STARTED BOX */
    .log_box {
        top: 90px;
    }

    .download_box {
        right: 9px;
        top: 84px;
    }
}
</style>
