<template>
<div>
    <section class="setting_page_hideous p-0">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-md-2 col-lg-4 col-xl-3 col-xxl-2  px-0">
                    <SettingnavComponent class="d-none d-lg-block" />
                </div>
                <router-link to="/setting/mobilesetting" class="btn btn_back  shadow-none text-start ps-5  d-lg-none d-xl-none d-xxl-none" role="button"><img src="@/assets/images/icons/list-arrow.svg"></router-link>
                <div class="col-md-10 col-lg-8 col-xl-9  col-xxl-10">
                    <slot></slot>
                </div>
            </div>
        </div>

    </section>
</div>
</template>

<script>
import SettingnavComponent from '@/components/Setting/SettingnavComponent.vue'
export default {
    name: 'SettingLayout',
    components: {
        SettingnavComponent
    }
}
</script>

<style scoped>
.setting_page_hideous {
    background-color: var(--hideous-setting);
    min-height: 100vh;
}

/* .setting_page_hideous {
    background-color: var(--hideous-secondary);
    min-height: 100vh;
}

.setting_page_hideous .background_list {
    min-height: 100vh;
    background-color: var(--hideous-black);
}

.setting_page_hideous .list-group-item {
    background-color: unset;
    color: var(--hideous-text-gray);
    font-size: 14px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-weight: 500;
}

a.router-link-active.router-link-exact-active.list-group-item {
    color: var(--hideous-white);
    position: relative;
    z-index: 99;
}

a.router-link-active.router-link-exact-active.list-group-item::before {
    position: absolute;
    content: '';
    top: -1px;
    left: -49px;
    height: 47px;
    width: 345px;
    background-repeat: no-repeat;
    z-index: -1;
    background-image: url(../assets/images/path.png);
}
.list-group-item:hover{
   color: var(--hideous-white);
}
.list-group-item:hover img{
    filter: brightness(0) invert(1);
}

a.router-link-active.router-link-exact-active.list-group-item img {
    filter: brightness(0) invert(1);
}

.list-group-item:first-child {
    border-top-left-radius: unset;
    border-top-right-radius: unset;
} */

@media all and (min-width: 768px) and (max-width: 991px) {
    .btn_back {
        position: relative;
        top: 29px;
        left: -25px;
    }

    .background_list {
        display: none;
    }
}

@media all and (min-width: 320px) and (max-width: 767px) {
    .btn_back {
        position: relative;
        top: 29px;
        left: -25px;
    }

    .background_list {
        display: none;
    }
}
</style>
