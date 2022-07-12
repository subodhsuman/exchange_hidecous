<template>
<div>
    <div>
        <div class="crypto_list d-flex justify-content-between align-items-center p-2">
            <h6 class="text-capitalize"> btc /usdt</h6>
            <!-- NAV HEADING -->
            <div>
                <ul class="nav nav-pills mb-0" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                            <img src="../../assets/images/tabs.png" alt="tab icon">
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                            <img src="../../assets/images/tabs.png" alt="tab icon">
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                            <img src="../../assets/images/tabs.png" alt="tab icon">
                        </button>
                    </li>
                </ul>
            </div>
        </div>
         <!-- NAV TAB CONTENT  -->
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <!--******* ORDER DEPTH  TABLE ************-->
                <div class="currency_list_table p-2 pe-0">
                    <!-- ******* table heading ******** -->
                    <div class="currency_list_heading d-flex justify-content-between text_grey mb-2">
                        <div>Buy Price</div>
                        <div class="text-center">Amount</div>
                        <div class="text-end pe-2">Total BTC</div>
                    </div>
                    <!-- table content -->

                    <div class="currency_list_scroll" v-if="loading">
                        <div class="currency_detail_depth d-flex align-items-center" v-for="(data, index) in TableData" :key="index">
                            <div class=" crypto_coin  py-1 text-danger" style="flex-basis: 34%"> {{data.price}} </div>
                            <div class="py-1 text-center" style="flex-basis: 33%"> {{data.amount}} </div>
                            <div class="py-1 pe-2 text-end" style="flex-basis: 33%">{{data.total}}</div>
                        </div>
                    </div>
                    <!-- loader -->
                    <div class="currency_list_scroll" v-else>
                        <div class="d-flex text-center  text-center  align-items-center" v-for="i in 10" :key="i">
                            <div class="p-1" style="flex-basis: 34%">
                                <Skeletor />
                            </div>
                            <div class="p-1" style="flex-basis: 33%">
                                <Skeletor />
                            </div>
                            <div class="p-1 " style="flex-basis: 33%">
                                <Skeletor />
                            </div>
                        </div>
                    </div>

                </div>
                <!--*******  CURRENT PRICE************-->
                <div class="text-center p-2 currency-status">
                    <span style="color:var(--green);"> 13.544.45 </span> <svg xmlns="http://www.w3.org/2000/svg" height="14px" width="14px" style="fill: rgba(68,189,34,1)" viewBox="0 0 384 512">
                        <path d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z" /></svg>
                    <span style="color:grey;"> 13.544.45 </span>
                </div>

    
                    <!--******* TABLE ************-->
                    <div class="currency_list_table p-2 pe-0">
                        <!-- content -->

                        <div class=" profit_currency_list" v-if="loading">
                            <div class="currency_detail_order d-flex align-items-center" v-for="(data, index) in OrderData" :key="index">
                                <div class="crypto_coin  py-1" style="flex-basis: 34%"> {{data.price}} </div>
                                <div class="py-1 text-center" style="flex-basis: 33%"> {{data.amount}} </div>
                                <div class="py-1 pe-2 text-end" style="flex-basis: 33%">{{data.total}}</div>
                            </div>
                        </div>
                        <!-- loader -->
                        <div class="profit_currency_list" v-else>
                            <div class="d-flex text-center  text-center  align-items-center" v-for="i in 10" :key="i">
                                <div class="p-1" style="flex-basis: 34%">
                                    <Skeletor />
                                </div>
                                <div class="p-1" style="flex-basis: 33%">
                                    <Skeletor />
                                </div>
                                <div class="p-1 " style="flex-basis: 33%">
                                    <Skeletor />
                                </div>
                            </div>
                        </div>

                    </div>
                
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'OrderDepthView',
    data() {
        return {
            loading: true,
            TableData: [{
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },

            ],
            OrderData: [{
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },
                {
                    price: '23.00',
                    amount: '12.1682',
                    total: '34.171534'
                },

            ]
        }
    },
}
</script>

<style scoped>
/* NAV PILLS CSS */
.crypto_list .nav {
    background-color: var(--dark-grey);
}

.crypto_list .nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    color: var(--hideous-white);
    background-color: transparent;
    border: 2px solid var(--border);
}

.crypto_list .nav-link {
    padding: 2px 12px;
    border: 2px solid transparent;
}

.crypto_list h6 {
    color: var(--hideous-white);
    font-size: 14px;
}

.text_grey {
    color: var(--hideous-grey);
}

.currency_list_heading {
    font-size: 14px;
}

/* BACKGROUND COLOR OF DEPTH  & ORDER */

.currency_detail_depth {
    font-size: 12px;
    background: linear-gradient(90deg,  var(--transparent) 32%, var(--p2p-red-bg) 32%);
    border-bottom: 1px solid var(--hideous-black);
    cursor: pointer;
}

.currency_detail_order {
    font-size: 12px;
    background: linear-gradient(90deg,  var(--transparent) 32%,  var(--p2p-green-bg) 32%);
    border-bottom: 1px solid var(--hideous-black);
    cursor: pointer;
}

.currency-status {
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}
.profit_currency_list .crypto_coin{
    color: var(--green);
}
.currency_detail_depth ,
.profit_currency_list{
    color: var(--hideous-white);

}
 .crypto_coin{
    font-weight: 600;
}
</style>
