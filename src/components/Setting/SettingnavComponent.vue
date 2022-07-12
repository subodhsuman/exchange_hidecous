<template>
<div>
    <div class="background_list">
        <div class="list-group pt-2">
            <ul class="ps-0 list_group_list">
                <li class="list-group-item mb-2" v-for=" (settinglist , index) in SettingData" :key="index">
                    <router-link :to="settinglist.link"> <svg xmlns="http://www.w3.org/2000/svg" class="me-2" width="28" height="18" viewBox="0 0 448 512" fill="var(--icon-grey)">
                            <path :d="settinglist.path" />
                        </svg>
                        {{settinglist.tabname}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import SettingTabjson from '@/assets/json/SettingTab.json'
export default {
    name: 'SettingnavComponent',

    data() {
        return {
            SettingData: SettingTabjson.SettingTabData
        }
    },
    methods: {
        addClass(index) {

            var element = document.getElementById("myDIV_" + index);
            element.classList.add("active");
        }
    }
}
</script>

<style scoped>
.background_list {
    min-height: 100vh;
    background-color: var(--hideous-dark);
}

.list_group_list {
    list-style: none;
}

.list-group-item {
    background-color: unset;
    font-size: 14px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-weight: 500;

}

.list-group-item a {
    text-decoration: unset;
    color: var(--hideous-text-gray);
    width: 100%;
}
a.router-link-active.router-link-exact-active {
    color: var(--white);
    position: relative;
    z-index: 99;
    text-decoration: unset;
}

a.router-link-active.router-link-exact-active::before {
    position: absolute;
    content: '';
    top: -10px;
    left: -49px;
    height: 47px;
    width: 345px;
    background-repeat: no-repeat;
    z-index: -1;
    background-image: url(@/assets/images/path.png);
}

/* .list-group-item:hover a {
    color: var(--setting-white);
} */

.list-group-item:hover svg {
    fill:var(--setting-white);
}

a.router-link-active.router-link-exact-active svg {
    filter:  brightness(0) invert(1);
}

.list-group-item:first-child {
    border-top-left-radius: unset;
    border-top-right-radius: unset;
}
.list-group-item {
    border: 0px solid;
}
.light_image {
        filter: grayscale(1) invert(1);
}

@media all and (min-width: 1400px) and (max-width: 1899px) {
    a.router-link-active.router-link-exact-active::before {
        left: -130px;
    }

 
}

@media all and (min-width: 1200px) and (max-width: 1399px) {
    a.router-link-active.router-link-exact-active::before {
        left: -67px;
    }
}

@media all and (min-width: 992px) and (max-width: 1199px) {}
</style>
