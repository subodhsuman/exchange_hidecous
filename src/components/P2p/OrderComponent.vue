<template>
<div>
    <div class="exchange-box mb-xl-0 mb-3">

        <!--********************* Order component  Tabs *********************-->
        <div class="d-flex justify-content-center">
            <ul class="nav nav-pills  nav-fill" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-open-tab" data-bs-toggle="pill" data-bs-target="#pills-open" type="button" role="tab" aria-controls="pills-open" aria-selected="true">Open Orders</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-complete-tab" data-bs-toggle="pill" data-bs-target="#pills-complete" type="button" role="tab" aria-controls="pills-complete" aria-selected="false">Complete Orders</button>
                </li>
            </ul>
        </div>
        <!--*********************  Tab component *********************-->
        <div class="tab-content order_complete_box" id="pills-tabContent">
            <div class="tab-pane fade show active " id="pills-open" role="tabpanel" aria-labelledby="pills-open-tab">
                <div class="buyer_log">
                    <!-- heading -->
                    <div class="xid_box p-2 py-1 d-flex text-center">
                        <div style="flex-basis: 20%;">Currency</div>
                        <div style="flex-basis: 20%;">Price</div>
                        <div style="flex-basis: 20%;">Qty. </div>
                        <div style="flex-basis: 20%;">Total</div>
                        <div style="flex-basis: 20%;">XID</div>
                        <div style="flex-basis: 20%;">Actions</div>
                    </div>
                    <!-- content -->
                    <div class="border_cus border-top-0" v-if="loading">
                        <div class="xid_content p-2 d-flex text-center" v-for="(xid , index) in XidData" :key="index" :style="xid.price > 0 ? 'background-color: var(--p2p-green-bg);' : 'background-color:var(--p2p-red-bg);'">
                            <div style="flex-basis: 20%;"> {{xid.currency}}</div>
                            <div style="flex-basis: 20%;">{{xid.price}} </div>
                            <div style="flex-basis: 20%;"> {{xid.qty}} </div>
                            <div style="flex-basis: 20%;"> {{xid.total}} </div>
                            <div style="flex-basis: 20%;"> {{xid.xid}} </div>
                            <div style="flex-basis: 20%;">
                                <ul class="list-unstyled d-flex  mb-0   justify-content-center">
                                    <li class="px-2"  type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <img src="../../assets/images/edit.png" alt="image">
                                       
                                    </li>
                                      <li class="px-2"  type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                            <img src="../../assets/images/delete.png" alt="image">
                                       
                                    </li>
                                  
                                </ul>
                            </div>
                        </div>
                    </div>
                     <!-- content  LOADER -->
                    <div class="border_cus border-top-0" v-else>
                        <div class="xid_content p-2 d-flex text-center"  v-for="i in 10" :key="i">
                            <div style="flex-basis: 20%;"> <Skeletor /> </div>
                            <div style="flex-basis: 20%;"><Skeletor /> </div>
                            <div style="flex-basis: 20%;"> <Skeletor /> </div>
                            <div style="flex-basis: 20%;"> <Skeletor /> </div>
                            <div style="flex-basis: 20%;"> <Skeletor /> </div>
                            <div style="flex-basis: 20%;">
                                <ul class="list-unstyled d-flex  mb-0   justify-content-center">
                                    <li class="px-2"  type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <Skeletor height="15px" width="30px" />
                                       
                                    </li>
                                      <li class="px-2"  type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                           <Skeletor height="15px" width="30px" />
                                       
                                    </li>
                                  
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="tab-pane fade" id="pills-complete" role="tabpanel" aria-labelledby="pills-complete-tab">

                <div class="buyer_log">
                    <!-- heading -->
                    <div class="xid_box p-2 py-1 d-flex text-center">
                        <div style="flex-basis: 20%;">Currency</div>
                        <div style="flex-basis: 20%;">Price</div>
                        <div style="flex-basis: 20%;">Qty. </div>
                        <div style="flex-basis: 20%;">Total</div>
                        <div style="flex-basis: 20%;">XID</div>
                        <div style="flex-basis: 20%;">Actions</div>
                    </div>
                    <!-- content -->

                    <div class="border_cus border-top-0" v-if="loading">
                        <div class="xid_content p-2 d-flex text-center" v-for="(xid , index) in XidData" :key="index" :style="xid.price > 0 ? 'background-color: var(--p2p-green-bg);' : 'background-color:var(--p2p-red-bg);'">
                            <div style="flex-basis: 20%;"> {{xid.currency}}</div>
                            <div style="flex-basis: 20%;">{{xid.price}} </div>
                            <div style="flex-basis: 20%;"> {{xid.qty}} </div>
                            <div style="flex-basis: 20%;"> {{xid.total}} </div>
                            <div style="flex-basis: 20%;"> {{xid.xid}} </div>
                            <div style="flex-basis: 20%;">
                                <ul class="list-unstyled d-flex  mb-0   justify-content-center">
                                    <li class="px-2">
                                        <img src="../../assets/images/edit.png" alt="image">
                                    </li>
                                    <li class="px-2">
                                        <img src="../../assets/images/delete.png" alt="image">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- content  LOADER -->
                    <div class="border_cus border-top-0" v-else>
                        <div class="xid_content p-2 d-flex text-center"  v-for="i in 10" :key="i">
                            <div style="flex-basis: 20%;"> <Skeletor /> </div>
                            <div style="flex-basis: 20%;"><Skeletor /> </div>
                            <div style="flex-basis: 20%;"> <Skeletor /> </div>
                            <div style="flex-basis: 20%;"> <Skeletor /> </div>
                            <div style="flex-basis: 20%;"> <Skeletor /> </div>
                            <div style="flex-basis: 20%;">
                                <ul class="list-unstyled d-flex  mb-0   justify-content-center">
                                    <li class="px-2"  type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <Skeletor height="15px" width="30px" />
                                       
                                    </li>
                                      <li class="px-2"  type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                           <Skeletor height="15px" width="30px" />
                                       
                                    </li>
                                  
                                </ul>
                            </div>
                        </div>
                    </div>
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
                    <p> Are you sure to  modify your order ?</p>
                   </div>
                </div>
                <div class="modal-footer justify-content-center border-0">
                    <button type="button" class="pink_btn px-5 py-2" data-bs-dismiss="modal">Modify</button>
                    <button type="button" class="cancel_btn px-5 py-2" data-bs-dismiss="modal" >Cancel</button>
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
                    <button type="button" class="cancel_btn px-5 py-2" data-bs-dismiss="modal" >No</button>
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
            XidData: [{
                    currency: 'BNB/ETH',
                    price: '-406.1',
                    qty: '219209.0',
                    total: '8293.3421',
                    xid: '354',
                },
                {
                    currency: 'BNB/ETH',
                    price: '-406.1',
                    qty: '219209.0',
                    total: '8293.3421',
                    xid: '354',
                },
                {
                    currency: 'BNB/ETH',
                    price: '406.1',
                    qty: '219209.0',
                    total: '8293.3421',
                    xid: '354',
                },
                {
                    currency: 'BNB/ETH',
                    price: '-406.1',
                    qty: '219209.0',
                    total: '8293.3421',
                    xid: '354',
                },
                {
                    currency: 'BNB/ETH',
                    price: '406.1',
                    qty: '219209.0',
                    total: '8293.3421',
                    xid: '354',
                },
                {
                    currency: 'BNB/ETH',
                    price: '406.1',
                    qty: '219209.0',
                    total: '8293.3421',
                    xid: '354',
                },
                {
                    currency: 'BNB/ETH',
                    price: '406.1',
                    qty: '219209.0',
                    total: '8293.3421',
                    xid: '354',
                },
                {
                    currency: 'BNB/ETH',
                    price: '406.1',
                    qty: '219209.0',
                    total: '8293.3421',
                    xid: '354',
                },
                {
                    currency: 'BNB/ETH',
                    price: '406.1',
                    qty: '219209.0',
                    total: '8293.3421',
                    xid: '354',
                },
                {
                    currency: 'BNB/ETH',
                    price: '-406.1',
                    qty: '219209.0',
                    total: '8293.3421',
                    xid: '354',
                }
            ]
        }
    },

}
</script>

<style scoped>
/***************** Pair before css *****************/
.tab_content {
    position: relative;
}

.border_cus {
    border: 1px solid var(--p2p-border);
}

.tab_content::before {
    width: 40px;
    height: 2px;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 17px;
    border: 0;
    margin: 0 auto;
    background-color: var(--inv-grey);
    z-index: -1;
}

/***************** Amount before css *****************/
.content_tab {
    position: relative;
}

.content_tab::before {
    width: 48px;
    height: 2px;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 17px;
    border: 0;
    margin: 0 auto;
    background-color: var(--inv-grey);
    z-index: -1;
}

ul {
    width: 100%;
}

.nav-fill .nav-item .nav-link,
.nav-justified .nav-item .nav-link {
    width: 100%;
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
   
    border:1px solid var(--hideous-white);
    padding: 0.375rem 0.75rem;
    font-size: 14px;
    border-radius: 0.25rem;
}
/* .buyer_log {
    height: 342px;

} */

.btn-check:focus+.btn-primary,
.btn-primary:focus,
.btn-check:focus+.btn-primary,
.btn-primary:focus {
    box-shadow: none;
}

.exchange-box .nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
       color: var(--white);
    background-color: var(--hideous-pink);
    /* border-bottom: 1px solid var(--hideous-pink); */
    border-radius: 0;
}

.exchange-box .nav-link {
    color: var(--hideous-grey);
    font-size: 14px;
}

.exchange-box {
    background-color: var(--p2p-bg);
      box-shadow: var(--p2p-box-shadow);
backdrop-filter: blur( 8.5px );
}

.order_complete_box p {
    color: var(--hideous-white);
}

.xid_box {
    color: var(--hideous-grey);
    font-size: 14px;
}

.xid_content {
    color: var(--hideous-grey);
    font-size: 12px;
}

/* MODAL CSS */
.modal-content {
  Background: var(--modal-bg);
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
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

</style>
