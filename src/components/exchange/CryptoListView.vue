<template>
<div class="crypto-list p-2">
    <div class="d-flex justify-content-between align-items-center mb-2">
        <div>  
            <img src="../../assets/images/icons/star.svg" alt="star icon">
        </div>
        <div>
            <ul class="nav nav-pills mb-0" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-usdt-tab" data-bs-toggle="pill" data-bs-target="#pills-usdt" type="button" role="tab" aria-controls="pills-usdt" aria-selected="true">USDT</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-btc-tab" data-bs-toggle="pill" data-bs-target="#pills-btc" type="button" role="tab" aria-controls="pills-btc" aria-selected="false">BTC</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-bnb-tab" data-bs-toggle="pill" data-bs-target="#pills-bnb" type="button" role="tab" aria-controls="pills-bnb" aria-selected="false">BNB</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-eth-tab" data-bs-toggle="pill" data-bs-target="#pills-eth" type="button" role="tab" aria-controls="pills-eth" aria-selected="false">ETH</button>
                </li>
            </ul>
        </div>
    </div>
    <!--******** search box  ********-->
    <div class="search_box input-group mb-2">
        <span class="input-group-text" id="basic-addon1"> <img src="../../assets/images/icons/search.svg" alt="search"> </span>
        <input type="text" class="form-control" placeholder="Search Here..." aria-label="Username" aria-describedby="bcurrency_detaitextasic-addon1">
    </div>
    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-usdt" role="tabpanel" aria-labelledby="pills-usdt-tab">
             <!--******* TABLE ************-->
             <div class="currency_list_table">
                <!-- ******* heading ******** -->
                <div class="currency_list_heading d-flex text_grey">
                    <div class="ps-4" style="flex-basis: 34%"> Pair  </div>
                    <!-- <span> <img src="../../assets/images/icons/up-arrow.svg" alt="star icon"></span> -->
                    <div class="text-center" style="flex-basis: 33%">Last Price</div>
                    <div class="text-end" style="flex-basis: 33%">24H %</div>
                </div>
                <!-- content -->

                <div class="currency_list_scroll" v-if="loading">
                    <div class="currency_detail d-flex align-items-center pe-1" v-for="(data, index) in CurrencyData" :key="index">
                        <div class="py-1 " style="flex-basis: 10%; cursor:pointer;">  <img src="../../assets/images/icons/small-star.svg" alt="star icon"> </div>
                        <div class="crypto_coin  py-1" style="flex-basis: 30%"> {{data.name}} / INR </div>
                        <div class="py-1 text-center" style="flex-basis: 30%"> {{data.amount}} </div>
                        <div class="py-1 text-end" style="flex-basis: 30%"> <span :style="data.total > 0 ? 'color:var(--green);' : 'color:red;'">{{data.total}}% </span></div>
                    </div>
                </div>
                <!-- loader -->
                <div class="currency_list_scroll" v-else>
                    <div class="d-flex text-center  text-center  align-items-center" v-for="i in 10" :key="i">
                        <div class="py-1" style="flex-basis: 34%"> <Skeletor /> </div>
                        <div class="py-1" style="flex-basis: 33%"> <Skeletor /> </div>
                        <div class="py-1" style="flex-basis: 33%">  <Skeletor /> </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="tab-pane fade" id="pills-btc" role="tabpanel" aria-labelledby="pills-btc-tab">
            <div class="currency_list_table">
            </div>
        </div>
        <div class="tab-pane fade" id="pills-bnb" role="tabpanel" aria-labelledby="pills-bnb-tab">
            <div class="currency_list_table">
            </div>
        </div>
        <div class="tab-pane fade" id="pills-eth" role="tabpanel" aria-labelledby="pills-eth-tab">
            <div class="currency_list_table">
            </div>
        </div>
    </div>

</div>
</template>

<script>
import exchangedata from '@/assets/json/exchangedata'
export default {
    name: 'CryptoListView',
    data() {
        return {
                loading: true,
                CurrencyData:exchangedata.CurrencyData
        }
    },
}
</script>

<style scoped>
.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    color: var(--hideous-white);
    background-color: var(--peacoat);
}
.currency_list_table{
min-height: 360px;
}

.nav-link {
    padding: 4px 10px;
    color: var(--hideous-white);
    font-size: 12px;
}
/******** search box ************/

.search_box .form-control {
    padding: 0.375rem 0.75rem;
    font-size: 12px;
    color: var(--hideous-white);
    background-color: var(--peacoat);
    border: none;
    border-radius: 7px;
}
.search_box .input-group-text {
   background-color: var(--peacoat);
    border: none;
    border-radius: 7px;
}
.form-control:focus {
    box-shadow: none;
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
.currency_detail {
    font-size: 12px;
}
.currency_list_scroll {
    overflow-y: scroll;
    height: 335px;
}
.currency_detail{
     color: var(--hideous-white);
}


</style>
