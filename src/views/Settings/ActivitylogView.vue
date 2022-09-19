<template>
<div>
    <SettingLayout>
        <section class="setting_page">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-10 col-xl-9">
                        <div class="activity_box">
                            <div class="setting_head p-3">
                                <h6 class="mb-0">ACTIVITY LOG DETAIL</h6>
                            </div>
                            <div class="setting_content p-4">
                                <table class="table table-responsive text-nowrap">
                                     <div class="d-flex justify-content-center" v-if="loading=!loading">
                                        <div class="spinner-border" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                           </div>
                                               </div> 
                                    <thead>
                                        <tr class="text-center mb-3">
                                            <th scope="col">Date</th>
                                            <th scope="col">IP</th>
                                            <th scope="col">Activity</th>
                                        </tr>
                                       
                                    </thead>
                                     
                                    <tbody>
                                        <tr class="text-center mb-3" v-for="(log, index) in get_activitydata" :key="index">
                                            <td id="formatDate">{{ moment(log.created_at) }}</td> 
                                            <td>{{log.ip}}</td>
                                            <td class="list_box1">{{log.type}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="pagination_box d-flex justify-content-end" style="color:white">
                                    <pagination v-model="page" :records="recordData" :per-page="perPageData" :options="options" @paginate="getActivitylog" />
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
import ApiClass from '@/api/api.js'
import moment from "moment";
export default {
    name: 'ActivitylogView',
    components: {
        SettingLayout
    },
    data() {
        return {
        
            
            loading: true,
            page: 1,
            recordData: 0,
            perPageData: 10,
            options: {
                edgeNavigation: false,
                chunksNavigation: false,
                chunk: 3,
                texts: false,
                format: false,
            },
            get_activitydata:[],
        }
    },

  mounted() {
        this.getActivitylog();
        console.log(this.page);


 },
    methods: {
        moment(date) {
            return moment(date).format("MMMM Do YYYY, h:mm:ss a");
            // {{ moment(item.created_at) }}
        },
      async getActivitylog() {
         
        let response = await ApiClass.getRequest("log/get?page=" + this.page + "&per_page=" + this.perPageData);
             this.get_activitydata = response.data.data.data;
             console.log( this.get_activitydata);
             this.page = response.data.data.current_page;
             this.perPageData = response.data.data.per_page;
              this.recordData = response.data.data.total;
        }
    },
}


 


</script>

<style scoped>
.border_row {
    border: 1px solid var(--hideous-setting-border);
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
    cursor: pointer;
}

.setting_content .list_box1 {
    font-size: 14px;
    font-weight: 500;
    color: var(--hideous-pink);
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


@media all and (min-width: 768px) and (max-width: 991px) {}

@media all and (min-width: 320px) and (max-width: 767px) {
    .setting_content {
        overflow: scroll;
    }
}
</style>
