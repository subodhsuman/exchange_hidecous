<template>
    <div>
        <MainHeader />
        <router-view />
        <MainFooter />
    </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue"
export default {
    components: {
        MainHeader,
        MainFooter
    }
}
</script>

<style>









#app {
    background-color: var(--hideous-primary);
}

@font-face {
    font-family: ' extra-bold';
    src: url(../src/assets/font-family/Montserrat-ExtraBold.ttf);
    font-weight: 800;
}

@font-face {
    font-family: 'bold';
    src: url(../src/assets/font-family/Montserrat-Bold.ttf);
    font-weight: 700;
}

@font-face {
    font-family: 'semi-bold';
    src: url(../src/assets/font-family/Montserrat-SemiBold.ttf);
    font-weight: 600;
}

@font-face {
    font-family: medium;
    src: url(../src/assets/font-family/Montserrat-Medium.ttf);
    font-weight: 500;
}

@font-face {
    font-family: 'regular';
    src: url(../src/assets/font-family/Montserrat-Regular.ttf);
    font-weight: 400;
}

:root {
    /*    Landing page   */
    --hideous-primary: #090103;
    --hideous-dark: #090103;
    --hideous-secondary: #0e1118;
    --hideous-setting: #0e1118;
    --hideous-pink: #da3182;
    --pink-hideous: #da3182;
    --hideous-dark-pink: #5c0b26;
    --hideous-white: #fff;
    --hideous-black: #000;
    --transparent: transparent;
    --hideous-grey: #8d8e90;
    --peacoat: #373d4e;
    --red: #E50E0E;
    --green: #44bd22;
    --hover-red: #d70100;
    --hideous-green: #1ba017;
    --dark-grey: #252530;
    --border: #3f4556;
    --hideous-bg: #131722;
    --port-tr: #373b46;
    --modal-bg: #222631;
    --modal-input: #151924;
    --modal-header: #282c37;
    --m-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    --hideous-auth-grey: #2b2b2b;
    --p2p-bg: #0E1118;
    --p-white: #fff;
    --log-grey: #3f4556bf;
    --p2p-red-bg: #ff390033;
    --p2p-green-bg: #47ab4033;

    /* --p2p-red-bg: #361016;
    --p2p-green-bg: #0e2b1b; */
    --p2p-progress: #8d8e90;
    --p2p-border: #3d3e41;
    --p2p-heading: #090B10;
    --p2p-input-bg: #060910;
    --p2p-acr: #22252c;
    /*==============setting==============*/
    --hideous-text-gray: #bcbcbc !important;
    --hideous-setting-head: #282c37;
    --hideous-setting-content: #222631;
    --hideous-modal-input: #151924;
    --hideous-setting-border: #2d313c;
    --hideous-fee-bg: #484c57;
    --hideous-badge: #e6bfd2;
    --white: #fff;
    --p2p-box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    --in-group: #13161d;
    --icon-grey: #bcbcbc;
    --setting-white: #fff;
    --user-white: #fff;
    --portfolio-search: #1a1e29;
    --check-white: #fff;
    --hideous-sun: #ccccccad;
    --hideous-moon: #fff;
    --ref-border: #000;
    --black: #000;

    /*==============Font-Size==============*/

    --fs-10: 10px;
    --fs-13: 13px;
    --fs-12: 12px;
    --fs-14: 14px;
    --fs-16: 16px;
    /*==============Font-Weight==============*/
    --fw-800: 'extra-bold';
    --fw-700: bold;
    --fw-600: 'semi-bold';
    --poster-bg: url('../src/assets/images/layer.png');
    --get-in-bg: url('../src/assets/images/layer3.png')
}

.light {
    --hideous-sun: #ffcc00;
    --hideous-moon: #ccccccad;
    --hideous-primary: #fff;
    --hideous-secondary: #fff;
    /* --hideous-primary: rgba(254, 233, 247, 0.8); */
    --hideous-white: #000;
    --hideous-black: #fff;
    --hideous-grey: #3b3c3e;
    --p2p-bg: #F9F9F9;
    /* --p2p-bg: rgba(254, 233, 247, 0.8); */
    --p2p-border: #ffffff24;
    --p2p-box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    --p2p-heading: transparent;
    --p2p-input-bg: #bb96f31f;
    --in-group: #d23a82;
    --p2p-acr: #bb96f31f;
    --modal-bg: #fff;
    --p-white: #d23a82;
    --dark-grey: #F1F1F1;
    --border: #3f455633;
    --peacoat: #E4E4E4;
    --hideous-bg: #fff;
    --port-tr: #E5E5E5;
    --portfolio-search: #e4e4e4;
    --modal-header: #d23a82;
    --modal-input: #e5e5e5;
    --pink-hideous: #fff;
    --setting-white: #666161;

    /*==============setting============= =*/
    --hideous-setting-head: #F3F3F3;
    --hideous-setting-content: #F3F3F3;
    --hideous-modal-input: #FFF;
    --hideous-text-gray: #000;
    --icon-grey: #000;
    --check-white: #dee2e6d1;
    --hideous-fee-bg: #484c5726;
    --user-white: #0000008a;
    --hideous-setting: #F9F9F9;
    --ref-border: #00000014;
    --log-grey: #000;
    --p2p-progress: #3b3c3e29;
    --hideous-dark: #e5e5e58a;
    /*==============Font-Weight============= =*/
    --fw-600: bold;
    --fw-500: bold;
    --poster-bg: url('../src/assets/images/layer-light.png');
    --get-in-bg: url('../src/assets/images/layer1-light.png');

    /*==============Auth Page============= =*/
    --hideous-auth-grey: #F3F3F3;
}

.text-danger{
    font-size: 14px;
}

section {
    padding: 70px 0;
}

/*****************skeltor loader css */
.vue-skeletor {
    position: relative;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.12);
}

.vue-skeletor:not(.vue-skeletor--shimmerless):after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background-image: linear-gradient(90deg,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.3),
            rgba(37, 22, 22, 0));
    animation: shimmer 1.5s infinite;
    content: "";
}

.vue-skeletor--rect,
.vue-skeletor--circle {
    display: block;
}

.vue-skeletor--circle {
    border-radius: 50%;
}

.vue-skeletor--pill,
.vue-skeletor--text {
    border-radius: 9999px;
}

.vue-skeletor--text {
    line-height: 1;
    display: inline-block;
    width: 100%;
    height: inherit;
    vertical-align: middle;
    top: -1px;
}

@keyframes shimmer {
    100% {
        transform: translateX(100%);
    }
}

/*************** ScrollBar Css ***************/
.crypto-list ::-webkit-scrollbar,
.exchange_box ::-webkit-scrollbar {
    background: transparent;
    width: 3px;
    height: 0;
    border-radius: 10px;
}

.crypto-list ::-webkit-scrollbar-thumb,
.exchange_box ::-webkit-scrollbar-thumb {
    background-color: var(--hideous-grey);
    border: solid rgba(0, 0, 0, 0) 2px;
    transition: all 0.4s ease;
}

/************************************Pagination*************************************/

.pagination {
    justify-content: end !important;
}

.page-link {
    z-index: 3 !important;
    color: var(--hideous-white) !important;
    background-color: transparent !important;
    border-color: var(--hideous-pink) !important;
    box-shadow: none !important;
}

.page-item.active .page-link {
    z-index: 3 !important;
    color: var(--white) !important;
    background-color: var(--hideous-pink) !important;
    border-color: var(--hideous-pink) !important;
    box-shadow: none !important;
}

.pagination_box ul li {
    border: none !important;
    margin-bottom: 20px !important;
    border-radius: var(--tc-border-radius) !important;
    margin-bottom: 0 !important;
    color: var(--hideous-white);
}

.pagination_box p {
    font-size: 14px;
    color: var(--hideous-white);
}

.page-link,
.page-link:hover {
    color: var(--tc-primary-color) !important;
}

.page-item:first-child .page-link,
.page-item:last-child .page-link {
    box-shadow: none !important;
}

/* seema css */

.setting_head {
    color: var(--hideous-pink);
    background-color: var(--hideous-setting-head);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.setting_content {
    background-color: var(--hideous-setting-content);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.setting_content label {
    font-size: 14px;
    font-weight: 600;
    color: var(--hideous-white);
}

.setting_content .form-control {
    background-color: var(--hideous-modal-input);
    border-radius: 5px;
    color: var(--hideous-text-gray);
    font-size: 14px;
}

.setting_content .form-control:focus {
    background-color: var(--hideous-modal-input);
    color: var(--hideous-text-gray);
    box-shadow: none;
}

.setting_btn {
    color: var(--white) !important;
    padding: 6px 70px !important;
    border-radius: 5px !important;
    background-color: var(--hideous-pink) !important;
    font-size: 14px !important;
    font-weight: 600 !important;
}

.setting_btn:hover {
    border-radius: 5px !important;
    border: 1px solid var(--hideous-pink);
    background-color: var(--hideous-modal-input) !important;
    color: var(--hideous-white) !important;
}




/* .setting_page{
    padding: 40px 0 ;
} */


/* AUTH */
.auth {
    background-color: var(--hideous-primary);
    min-height: 80vh;
    padding: 30px 0;
}

.auth .image_section h2 span {
    color: var(--hideous-pink);

}

.auth .image_section h2 {
    color: var(--hideous-white);
    font-weight: 600;
    font-size: 35px;
    margin-bottom: 35px;
}

.auth .form_box {
    background-color: var(--hideous-auth-grey);
    border-radius: 30px;
    position: relative;
    z-index: 9
}

.auth .btn.auth_btn {
    background-color: var(--hideous-pink);
    padding: 12px;
    font-size: 16px;
    font-weight: 500;
    margin-top: 13px;
    border-radius: 10px;

}

.auth .form_box .form-label {
    color: var(--hideous-white)
}

.auth .form_box .form-control,
.auth .form_box .dropdown-toggle {
    padding: 12px;
    font-size: 14px;
    background-color: var(--hideous-white);
    color: var(--hideous-auth-grey);
}

.auth .form_box input::placeholder {
    color: var(--hideous-auth-grey);
}

.auth .forgot-pass,
.auth .options a {
    color: var(--hideous-pink);
    font-size: 14px;
}

.auth .forgot-pass:hover,
.auth .options a:hover,
.auth .resend a {
    color: var(--hideous-pink);
}

.auth .terms,
.auth .options p,
.resend p {
    color: var(--hideous-text-gray);
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.auth span.eye {
    top: -35px;
    right: 10px;
}

.main-img {
    position: relative;
}

.main-img img {
    position: relative;
}

.main-img:before {
    position: absolute;
    content: "";
    background-image: url('@/assets/images/auth/layer.png');
    width: 600px;
    height: 500px;
    bottom: -82px;
        left: -60px;
        -webkit-animation: action 1s infinite alternate;
            animation: action 1s infinite alternate;

}

@-webkit-keyframes action {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-25px);
    }
}

@keyframes action {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-25px);
    }
}

input.otp-input {
    max-width: 54px;
    height: 58px;
    border-radius: 10px;
    outline: 0;
    text-align: center;

}

@media (min-width:767px) and (max-width:991px) {
    .auth:before {
        display: none;
    }
}

@media (min-width:320px) and (max-width:767px) {
    .auth:before {
        display: none;
    }

    input.otp-input {
        width: 36px;
        height: 36px;
        margin-right: auto;
    }
}
</style>
