<template>
<div>
    <div class="exchange_box">

        <div class="nabs">
            <ul class="nav nav-pills mb-0" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-open-order-tab" data-bs-toggle="pill" data-bs-target="#pills-open-order" type="button" role="tab" aria-controls="pills-open-order" aria-selected="true">Open Order</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-order-history-tab" data-bs-toggle="pill" data-bs-target="#pills-order-history" type="button" role="tab" aria-controls="pills-order-history" aria-selected="false">Order History</button>
                </li>
            </ul>
        </div>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-open-order" role="tabpanel" aria-labelledby="pills-open-order-tab">
                <div class="table-responsive tab_scroll">
                    <table class="table mb-0 text-center ">
                        <thead>
                            <tr class="px-5">
                                <th scope="col">Pair</th>
                                <th scope="col">Date</th>
                                <th scope="col">Type</th>
                                <th scope="col">Side</th>
                                <th scope="col">Order Price</th>
                                <th scope="col">Filled/All</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody v-if="loading">
                            <!--*****************************************************
                            RECORD TABLE
                            ***************************************************** -->

                            
                             <tr v-for="(data , index) in TableData " :key="index">

                                <td> {{data.pair}} </td>
                                <td> {{data.date}} </td>
                                <td> {{data.type}} </td>
                                <td> {{data.side}} </td>
                                <td> {{data.order}} </td>
                                <td> {{data.filled}} </td>
                                <td> {{data.status}}</td>
                                <td>
                                    <ul class="list-unstyled d-flex  mb-0   justify-content-center">
                                        <li class="px-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <img src="../../assets/images/edit.png" alt="image">

                                        </li>
                                        <li class="px-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                            <img src="../../assets/images/delete.png" alt="image">

                                        </li>

                                    </ul>
                                </td>
                            </tr> 
                            <!-- No Record Found
                            <tr class="text-center">
                                <td class="p-5" colspan="8">
                                    <img src="../../assets/images/no-record.png" alt="image"> <br>
                                   <h5> No Record Found</h5>
                                </td>
                            </tr> -->
                        </tbody>

                         <tbody v-else>
                             <tr v-for="i in 8" :key="i">

                                <td class="py-1" style="flex-basis: 34%"> <Skeletor /> </td>
                                <td class="py-1" style="flex-basis: 34%"> <Skeletor /> </td>
                                <td class="py-1" style="flex-basis: 34%"> <Skeletor /> </td>
                                <td class="py-1" style="flex-basis: 34%"> <Skeletor /> </td>
                                <td class="py-1" style="flex-basis: 34%"> <Skeletor />  </td>
                                <td class="py-1" style="flex-basis: 34%"> <Skeletor />  </td>
                                <td class="py-1" style="flex-basis: 34%"> <Skeletor /> </td>
                                <td class="py-1" style="flex-basis: 34%"> <Skeletor />
                                    <ul class="list-unstyled d-flex  mb-0   justify-content-center">
                                        <li class="px-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                           <Skeletor />

                                        </li>
                                        <li class="px-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                            <Skeletor />

                                        </li>

                                    </ul>
                                </td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- ORDER HISTORY -->
            <div class="tab-pane fade" id="pills-order-history" role="tabpanel" aria-labelledby="pills-order-history-tab">
 <div class="table-responsive tab_scroll">
                    <table class="table mb-0 text-center ">
                        <thead>
                            <tr class="px-5">
                                <th scope="col">Pair</th>
                                <th scope="col">Date</th>
                                <th scope="col">Type</th>
                                <th scope="col">Side</th>
                                <th scope="col">Order Price</th>
                                <th scope="col">Filled/All</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody v-if="loading">
                            <!--*****************************************************
                            RECORD TABLE
                            ***************************************************** -->

                            
                             <tr v-for="(data , index) in TableData " :key="index">

                                <td> {{data.pair}} </td>
                                <td> {{data.date}} </td>
                                <td> {{data.type}} </td>
                                <td> {{data.side}} </td>
                                <td> {{data.order}} </td>
                                <td> {{data.filled}} </td>
                                <td> {{data.status}}</td>
                                <td>
                                    <ul class="list-unstyled d-flex  mb-0   justify-content-center">
                                        <li class="px-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <img src="../../assets/images/edit.png" alt="image">

                                        </li>
                                        <li class="px-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                            <img src="../../assets/images/delete.png" alt="image">

                                        </li>

                                    </ul>
                                </td>
                            </tr> 
                            <!-- No Record Found
                            <tr class="text-center">
                                <td class="p-5" colspan="8">
                                    <img src="../../assets/images/no-record.png" alt="image"> <br>
                                   <h5> No Record Found</h5>
                                </td>
                            </tr> -->
                        </tbody>

                         <tbody v-else>
                             <tr v-for="i in 8" :key="i">

                                <td class="py-1" style="flex-basis: 34%"> <Skeletor /> </td>
                                <td class="py-1" style="flex-basis: 34%"> <Skeletor /> </td>
                                <td class="py-1" style="flex-basis: 34%"> <Skeletor /> </td>
                                <td class="py-1" style="flex-basis: 34%"> <Skeletor /> </td>
                                <td class="py-1" style="flex-basis: 34%"> <Skeletor />  </td>
                                <td class="py-1" style="flex-basis: 34%"> <Skeletor />  </td>
                                <td class="py-1" style="flex-basis: 34%"> <Skeletor /> </td>
                                <td class="py-1" style="flex-basis: 34%"> <Skeletor />
                                    <ul class="list-unstyled d-flex  mb-0   justify-content-center">
                                        <li class="px-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <Skeletor height="20px" width="30px" />

                                        </li>
                                        <li class="px-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                             <Skeletor height="20px" width="30px" />

                                        </li>

                                    </ul>
                                </td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- Edit Modal -->
    <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="text-center">
                        <img src="../../assets/images/confirm.png" alt="icon" class="mb-3">
                        <h3 class="mb-2">Please Confirm</h3>
                        <p> Are you sure to modify your order ?</p>
                    </div>
                </div>
                <div class="modal-footer justify-content-center border-0">
                    <button type="button" class="pink_btn px-5 py-2" data-bs-dismiss="modal">Modify</button>
                    <button type="button" class="cancel_btn px-5 py-2" data-bs-dismiss="modal">Cancel</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Delete Modal -->
    <div class="modal" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModal2Label" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="text-center">
                        <img src="../../assets/images/confirm.png" alt="icon" class="mb-3">
                        <h3 class="mb-2">Please Confirm</h3>
                        <p> Are you sure to Delete your order ?</p>
                    </div>
                </div>
                <div class="modal-footer justify-content-center border-0">
                    <button type="button" class="pink_btn px-5 py-2" data-bs-dismiss="modal">Yes</button>
                    <button type="button" class="cancel_btn px-5 py-2" data-bs-dismiss="modal">No</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'OrderComponent',
    data() {
        return {
            loading:true,
            TableData: [{
                    pair: 'BTC/USDT',
                    date: '12.12.12',
                    type: 'BUY',
                    side: '1',
                    order: '0',
                    filled: '1',
                    status: '1'
                },
                {
                    pair: 'BTC/USDT',
                    date: '12.12.12',
                    type: 'BUY',
                    side: '1',
                    order: '0',
                    filled: '1',
                    status: '1'
                },
                {
                    pair: 'BTC/USDT',
                    date: '12.12.12',
                    type: 'BUY',
                    side: '1',
                    order: '0',
                    filled: '1',
                    status: '1'
                },
                {
                    pair: 'BTC/USDT',
                    date: '12.12.12',
                    type: 'BUY',
                    side: '1',
                    order: '0',
                    filled: '1',
                    status: '1'
                },
                {
                    pair: 'BTC/USDT',
                    date: '12.12.12',
                    type: 'BUY',
                    side: '1',
                    order: '0',
                    filled: '1',
                    status: '1'
                },
                {
                    pair: 'BTC/USDT',
                    date: '12.12.12',
                    type: 'BUY',
                    side: '1',
                    order: '0',
                    filled: '1',
                    status: '1'
                },
                {
                    pair: 'BTC/USDT',
                    date: '12.12.12',
                    type: 'BUY',
                    side: '1',
                    order: '0',
                    filled: '1',
                    status: '1'
                },
                {
                    pair: 'BTC/USDT',
                    date: '12.12.12',
                    type: 'BUY',
                    side: '1',
                    order: '0',
                    filled: '1',
                    status: '1'
                }
            ]
        }
    },

}
</script>

<style scoped>
.tab_scroll {
    overflow-y: scroll;
    height: 248px;
}
thead {
    position: stick;
    top: 0;
}

/* NAV PILLS CSS */
.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    color: var(--hideous-white);
    background-color: transparent;
        font-weight: 600;
}

.nav-pills .nav-link.active svg,
.nav-pills .show>.nav-link svg {
    fill: rgba(255, 255, 255, 1);
}

.nav-link {
    color: var(--hideous-grey);
    font-size: 14px;
        font-weight: 500;
}

.nav-link:hover {
    color: var(--hideous-white);
}
/* Table css */

thead tr th {
    color: var(--hideous-white);
    font-weight: 400;
    font-size: 14px;
}

tbody tr td {
    color: var(--hideous-grey);
    font-size: 12px;
        font-weight: 600;
}
tbody tr {
    border-bottom: 1px solid;
}
table {
    border-collapse: separate;
    border-spacing: 0;
    white-space: nowrap;
    table-layout: auto !important;
}
table thead tr th {
    position: sticky;
    top: 0;
    background: var(--peacoat);
}

.nabs ul {
    border-top: 1px solid var(--border);
}

.table>:not(caption)>*>* {
    border-bottom-width: 0px;
}

/* MODAL CSS */
.modal-content {
   Background: var(--modal-bg);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
}

.modal-content h3 {
    font-size: 23px;
    font-weight: 600;
    letter-spacing: 1px;
    color: var(--hideous-white);
}

.modal-content P {
    font-size: 18px;
    color: var(--hideous-white);
}

.pink_btn {
    color: var(--white);
    cursor: pointer;
    background-color: var(--hideous-pink);
    border: 1px solid var(--hideous-pink);
    padding: 0.375rem 0.75rem;
    font-size: 14px;
    border-radius: 0.25rem;
}

.cancel_btn {
    color: var(--hideous-white);
    cursor: pointer;
    background-color: transparent;

    border: 1px solid var(--hideous-white);
    padding: 0.375rem 0.75rem;
    font-size: 14px;
    border-radius: 0.25rem;
}
</style>
