<template>
<div>
    <SettingLayout>
        <section class="setting_page">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-10 col-xl-9">
                        <div class="referral_page">
                            <div class="setting_head p-3">
                                <h6 class="mb-0">REFERRAL LINK</h6>
                            </div>
                            <div class="setting_content p-4">
                                <div class="row">
                                    <div class="col-md-12 col-lg-12 col-xl-12">
                                        <div class="input-group mb-3">
                                            <input type="text" v-on:focus="$event.target.select()" ref="cloneorder" class="form-control shadow-none border-0" placeholder="BNCKJF432DSDSF24DFSDFS" aria-label="Username" aria-describedby="basic-addon1">
                                            <span class="input-group-text shadow-none border-0" id="basic-addon1" @click="copyorder">
                                                <button type="button" class="btn btn_copy shadow-none border-0">Copy Link</button>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-12 col-xl-12">
                                        <div class="input-group mb-3">
                                            <input type="text" v-on:focus="$event.target.select()" ref="cloneorder1" class="form-control shadow-none border-0" placeholder="XCDF415" aria-label="Username" aria-describedby="basic-addon1">
                                            <span class="input-group-text shadow-none border-0" id="basic-addon2" @click="copyorder1">
                                                <button type="button" class="btn btn_copy1 shadow-none ">Copy Code</button>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-12 col-xl-12">
                                        <div class="table_box">
                                            <table class="table text-center text-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Username</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Direct Sponser ID</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Created AT</th>
                                                    </tr>
                                                </thead>
                                                <tbody v-if="show">
                                                    <tr v-for="(link, index) in LinkData" :key="index">
                                                        <td>{{link.username}}</td>
                                                        <td>{{link.email}}</td>
                                                        <td>{{link.direct}}</td>
                                                        <td><span class="badge rounded-pill m-auto">{{link.status}}</span></td>
                                                        <td>{{link.created}}</td>
                                                    </tr>
                                                </tbody>
                                                <tbody v-else>
                                                    <tr>
                                                        <td colspan="5">
                                                            <div class="content text-center">
                                                                <h5 class="mb-0">No Data Found</h5>
                                                            </div>
                                                        </td>
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
export default {
    name: 'ReferrallinkView',
    components: {
        SettingLayout
    },
    data() {
        return {
            show: true,
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
            LinkData: [{
                    username: 'seemaddd',
                    email: 'seema@mail.com',
                    direct: 'btc_inr',
                    status: 'unverified',
                    created: 'June22nd2022,10:20:30',
                },
                {
                    username: 'pathania',
                    email: 'seema@mail.com',
                    direct: 'btc_inr',
                    status: 'rejected',
                    created: 'June22nd2022,10:20:30',
                },
                {
                    username: 'seema',
                    email: 'seema@mail.com',
                    direct: 'btc_inr',
                    status: 'unverified',
                    created: 'June22nd2022,10:20:30',
                },
                {
                    username: 'artu',
                    email: 'seema@mail.com',
                    direct: 'btc_inr',
                    status: 'unverified',
                    created: 'June22nd2022,10:20:30',
                },
                {
                    username: 'jyoti',
                    email: 'seema@mail.com',
                    direct: 'btc_inr',
                    status: 'unverified',
                    created: 'June22nd2022,10:20:30',
                },
                {
                    username: 'seema',
                    email: 'seema@mail.com',
                    direct: 'btc_inr',
                    status: 'rejected',
                    created: 'June22nd2022,10:20:30',
                },
                 {
                    username: 'seema',
                    email: 'seema@mail.com',
                    direct: 'btc_inr',
                    status: 'rejected',
                    created: 'June22nd2022,10:20:30',
                },
                 {
                    username: 'seema',
                    email: 'seema@mail.com',
                    direct: 'btc_inr',
                    status: 'rejected',
                    created: 'June22nd2022,10:20:30',
                },
                 {
                    username: 'seema',
                    email: 'seema@mail.com',
                    direct: 'btc_inr',
                    status: 'rejected',
                    created: 'June22nd2022,10:20:30',
                }

            ]
        }
    },
    methods: {
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
