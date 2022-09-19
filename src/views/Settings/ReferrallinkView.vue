<template>
<div>
    <SettingLayout>
        <section class="setting_page">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-10 col-xl-9">
                        <div class="referral_page">
                            <div class="setting_head p-3">
                                <h6 class="mb-0"> REFERRAL Link</h6>
                            </div>
                            <div class="setting_content p-4">

                                <div class="row">
                                    <div class="col-md-12 col-lg-12 col-xl-12">
                                        <div class="input-group mb-3">
                                            <input type="text" v-on:focus="$event.target.select()" v-model="referral_link" ref="cloneorder" class="form-control shadow-none border-0" placeholder="BNCKJF432DSDSF24DFSDFS" aria-label="Username" aria-describedby="basic-addon1">
                                            <span class="input-group-text shadow-none border-0" id="basic-addon1" @click="copyorder">
                                                <button type="button" v-if="!status" class="btn btn_copy shadow-none border-0"><span @click="status=true ,settime()">Copy Link</span></button>
                                                <button type="button" class="btn btn_copy shadow-none border-0" v-else>copied</button>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-12 col-xl-12">
                                        <div class="input-group mb-3">
                                            <input type="text" v-on:focus="$event.target.select()" v-model="referral_code" ref="cloneorder1" class="form-control shadow-none border-0" placeholder="XCDF415" aria-label="Username" aria-describedby="basic-addon1">
                                            <span class="input-group-text shadow-none border-0" id="basic-addon2" @click="copyorder1">
                                                <button type="button" v-if="!status1" class="btn btn_copy1 shadow-none "><span @click="status1=true ,settime()">Copy Code</span></button>
                                                <button type="button" class="btn btn_copy1 shadow-none " v-else>copied</button>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-12 col-xl-12">
                                        <div class="table_box">
                                            <table class="table text-center text-nowrap">
                                                <!-- <div class="d-flex justify-content-center" v-if="loading=!loading">
                                                    <div class="spinner-border" role="status">
                                                        <span class="visually-hidden">Loading...</span>
                                                    </div>
                                                </div> -->
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Username</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Direct Sponser ID</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Created AT</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-if="LinkData.length==0">
                                                        <td colspan="5">
                                                            <div v-if="data_load">
                                                                <div v-for="(index) in 5" :key="index" class="my-4">
                                                                    <Skeletor />
                                                                </div>
                                                            </div>
                                                            <span v-else class="text-center text-light">
                                                                <h5 class="mb-0"> No Data Found</h5>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr v-else v-for="(link, index) in LinkData" :key="index">
                                                        <td>{{link.username}}</td>
                                                        <td>{{link.email}}</td>
                                                        <td>{{link.direct}}</td>
                                                        <td><span class="badge rounded-pill m-auto">{{link.status}}</span></td>
                                                        <td>{{link.created}}</td>
                                                    </tr>
                                                     
                                                </tbody>
                                            </table>
                                            <div class="pagination_box d-flex justify-content-end" style="color:white">
                                                <pagination v-model="page" :records="recordData" :per-page="perPageData" :options="options" @paginate="referrals" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--************** form end ************************-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </SettingLayout>
</div>
</template>

<script>
import SettingLayout from '@/Layout/SettingLayout'
import ApiClass from '@/api/api.js'
export default {
    name: 'ReferrallinkView',
    components: {
        SettingLayout
    },
    data() {
        return {
            data_load:false,
            loading: true,
            show: false,
            status: false,
            status1: false,
            page: 1,
            recordData: 100,
            perPageData: 10,
            options: {
                edgeNavigation: false,
                chunksNavigation: false,
                chunk: 3,
                texts: false,
                format: false,
            },
            data: '',
            get_referraldata: [],
            LinkData: [],
            referral_code: ""

        }
    },
    mounted() {
        this.data_load=true;
        this.getReferrallink();
        this.data = localStorage.getItem('user')
        let datas = JSON.parse(this.data, 'dfshfshdfkh')
        // console.log(datas.referral_code);
        this.referral_code = datas.referral_code;
        this.referral_link = datas.referral_link;
        // console.log(this.page);
        this.referral_link = ApiClass.VUE_DOMAIN + "register?referral=" + this.referral_code;
        // console.log(this.referral_link);

    },

    methods: {

        async getReferrallink() {
            this.data_load = true;
            let response = await ApiClass.getRequest("user/getReferrals?page=" + this.page + "&per_page=" + this.perPageData, );
            this.LinkData = response.data.data.data;
            if (response?.data) {
                this.data_load = false;
        
            // console.log(this.LinkData);
            this.page = response.data.data.current_page;
            this.perPageData = response.data.data.per_page;
            this.recordData = response.data.data.total;
            }
        },
        settime() {
            setTimeout(() => {
                this.status = false
                this.status1 = false
            }, '5000')
        },

        copyorder() {
            this.$refs.cloneorder.focus();
            document.execCommand('copy');
            console.log("copied")
        },
        copyorder1() {
            this.$refs.cloneorder1.focus();
            document.execCommand('copy');
            console.log("copied")
        },
        referrals() {

            console.log('here');

        }

    }
}
</script>

<style scoped>
.btn_copy {
    color: var(--white) !important;
    border-radius: 5px !important;
    background-color: var(--hideous-pink) !important;
    font-size: 14px !important;
    padding: 6px 18px !important;
}

.btn_copy1 {
    color: var(--white) !important;
    border-radius: 5px !important;
    background-color: var(--hideous-pink) !important;
    font-size: 14px !important;
    padding: 5px 12px !important;
}

.input-group-text {
    background-color: var(--hideous-modal-input);
}

.table>:not(caption)>*>* {
    border-bottom-width: 0 !important;
}

table {
    border-spacing: 0px 9px;
    border-collapse: unset;
}

tbody,
tr {
    border-style: none;
}

.setting_content table thead th {
    border: 1px solid var(--hideous-setting-border) !important;
    font-size: 12px;
    font-weight: 600;
    color: var(--hideous-white);
}

.setting_content table tbody tr {
    background-color: var(--hideous-modal-input);
    color: var(--hideous-white);
    font-size: 14px;
}

.content {
    background-color: var(--hideous-modal-input);
    border-radius: 5px;
}

.content h5 {
    color: var(--hideous-text-gray);
    font-size: 14px;
    font-weight: 600;
}

.badge {
    height: 20px;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--hideous-badge);
    color: var(--hideous-pink);
}

@media all and (min-width: 1200px) and (max-width: 1399px) {
    .table_box {
        overflow-x: scroll;
    }
}

@media all and (min-width: 992px) and (max-width: 1199px) {
    .table_box {
        overflow-x: scroll;
    }
}

@media all and (min-width: 768px) and (max-width: 991px) {
    .table_box {
        overflow-x: scroll;
    }
}

@media all and (min-width: 320px) and (max-width: 767px) {
    .table_box {
        overflow-x: scroll;
    }

    .setting_content {
        padding: 10px !important;
    }
}
</style>
