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
                                            <tr v-for="(list, index) in ListData" :key="index">
                                                <td>{{list.sno}}</td>
                                                <td>{{list.type}}</td>
                                                <td>{{list.title}}</td>
                                                <td>{{list.name}}</td>
                                                <td>{{list.email}}</td>
                                                <td>{{list.generated}}</td>
                                                <td>{{list.status}}</td>
                                                <td>
                                                    <router-link to="/setting/ticketlistmodal"><img :src="require(`@/assets/images/icons/${list.action}`)" class="img-fluid"></router-link>
                                                </td>
                                            </tr>
                                        </tbody>
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
                                        <pagination v-model="page" :records="recordData" :per-page="perPageData" :options="options" @paginate="activityLogs" />
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
export default {
    name: 'TicketlistView',
    components: {
        SettingLayout
    },
    data() {
        return {
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
            show: true,
            ListData: [{
                    sno: '1',
                    type: 'NEWO',
                    title: 'Exchange',
                    name: 'seemapathnia',
                    email: 'seema@mail.com',
                    generated: '20June2022',
                    status: 'open',
                    action: 'hide.svg',
                },
                {
                    sno: '2',
                    type: 'NEWO',
                    title: 'Exchange',
                    name: 'seemapathnia',
                    email: 'seema@mail.com',
                    generated: '20June2022',
                    status: 'open',
                    action: 'hide.svg',
                },
                {
                    sno: '3',
                    type: 'NEWO',
                    title: 'Exchange',
                    name: 'seemapathnia',
                    email: 'seema@mail.com',
                    generated: '20June2022',
                    status: 'open',
                    action: 'hide.svg',
                },
                {
                    sno: '4',
                    type: 'NEWO',
                    title: 'Exchange',
                    name: 'seemapathnia',
                    email: 'seema@mail.com',
                    generated: '20June2022',
                    status: 'open',
                    action: 'hide.svg',
                },
                {
                    sno: '5',
                    type: 'NEWO',
                    title: 'Exchange',
                    name: 'seemapathnia',
                    email: 'seema@mail.com',
                    generated: '20June2022',
                    status: 'open',
                    action: 'hide.svg',
                },
                {
                    sno: '6',
                    type: 'NEWO',
                    title: 'Exchange',
                    name: 'seemapathnia',
                    email: 'seema@mail.com',
                    generated: '20June2022',
                    status: 'open',
                    action: 'hide.svg',
                }
            ]
        }
    },
       methods: {
        activityLogs() {
            console.log('here');
        }
    }
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
