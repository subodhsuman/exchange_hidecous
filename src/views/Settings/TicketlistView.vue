<template>
<div>
    <SettingLayout>
        <section class="setting_page">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-10 col-xl-9">
                        <div class="ticket_list">
                            <div class="setting_head p-3">
                                <h6 class="mb-0">
                                    <router-link to="/setting/support"><img src="@/assets/images/icons/list-arrow.svg" alt="icons" class="img-fluid"></router-link> TICKET LIST
                                </h6>
                            </div>
                            <div class="setting_content p-4">
                                <div class="list_table">
                                    <table class="table text-center text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">S.NO</th>
                                                <th scope="col">Ticket Type</th>
                                                <th scope="col">Title</th>
                                                <th scope="col">Name</th>
                                                <th scope="col"> Email</th>
                                                <th scope="col">Ticket Generated</th>
                                                <th scope="col"> Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="show">

                                            <tr v-for="(res,index) in ticketlist" :key="index">
                                                <td>{{index+1}} </td>
                                                <td>{{res.category.name}}</td>
                                                <td>{{res.title}}</td>
                                                <td>{{res.author_name}}</td>
                                                <td>{{res.author_email}}</td>
                                                <td>{{ new Date(res.created_at).toLocaleTimeString("en-IN",optionsDate)}}</td>
                                                <td>{{res.status}}</td>
                                                <td>{{res.action}}</td>
                                                <td>
                                                    <!-- <router-link to="/setting/ticketlistmodal"><img :src="action" class="img-fluid"></router-link> -->
                                                    <!-- <router-link :to="{ name:'TicketmodalView', params: {details :Object.values(res)}}" ><img src="@/assets/images/icons/hide.svg" class="img-fluid"  @click="changeData(res.category.id)"></router-link> -->
                                                    <router-link to="/setting/ticketlistmodal"><img src="@/assets/images/icons/hide.svg" class="img-fluid" @click="changeData(res)"></router-link>

                                                </td>
                                            </tr>
                                        </tbody>
                                        <!-- <router-link :to="{ component:'/setting/ticketlistmodal', params: {nameuth:res.author_name,statusUser:res.status} }">Navigate to Page2</router-link> -->
                                        <tbody v-else>
                                            <tr>
                                                <td colspan="10">
                                                    <div class="content text-center">
                                                        <h5 class="mb-0">No Data Found</h5>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="pagination_box d-flex justify-content-end" style="color:white">
                                        <pagination v-model="current_page" :records="recordData" :per-page="per_page_item" :options="options" @paginate="activityLogs" />
                                    </div>
                                </div>
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
import ApiClass from "@/api/api"
export default {
    name: 'TicketlistView',
    components: {
        SettingLayout
    },
    data() {
        return {
            // action:require(`@/assets/images/icons/${action}`),
            ticketlist: [],
            current_page: 1,
            recordData: null,
            per_page_item: 10,
            options: {
                edgeNavigation: false,
                chunksNavigation: false,
                chunk: 3,
                texts: false,
                format: false,
            },

            show: true,
            optionsDate: {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            }

        }
    },
    mounted() {
        this.activityLogs();
    },
    methods: {
        // activityLogs() {
        //     console.log('here');
        // },
        async activityLogs() {
            let response = await ApiClass.getRequest("ticket/get?page=" + this.current_page + "&per_page=" + this.per_page_item, true)
           
            if (response?.data.status_code == 1) {
                this.ticketlist = response.data.data
            } else {
                return this.failed(response.data.message)
            }
            // console.log("get Ticketlist value",response)
            //    console.log("get token list array value",res)
        },
        changeData(details) {
            // return id    
            let x = Object.values(details)
            console.log("dlslslslsls", x)
            this.$store.commit("TiketList", x);
        }

    },

}
</script>

<style scoped>
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
    color: var(--hideous-text-gray);
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

@media all and (min-width: 1200px) and (max-width: 1399px) {
    .list_table {
        overflow-x: scroll;
    }
}

@media all and (min-width: 992px) and (max-width: 1199px) {
    .list_table {
        overflow-x: scroll;
    }
}

@media all and (min-width: 768px) and (max-width: 991px) {
    .list_table {
        overflow-x: scroll;
    }
}

@media all and (min-width: 320px) and (max-width: 767px) {
    .list_table {
        overflow-x: scroll;
    }
}
</style>
