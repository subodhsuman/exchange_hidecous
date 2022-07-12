<template>
<div>
    <div class="exchange-box ">
        <div class="d-flex justify-content-between align-items-center heading_box ">

            <div>
                <!--************* Main Tab *************-->
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-xid-buyer-tab" data-bs-toggle="pill" data-bs-target="#pills-xid-buyer" type="button" role="tab" aria-controls="pills-xid-buyer" aria-selected="true">Buyer</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-xid-seller-tab" data-bs-toggle="pill" data-bs-target="#pills-xid-seller" type="button" role="tab" aria-controls="pills-xid-seller" aria-selected="false">Seller</button>
                    </li>

                </ul>
            </div>
            <div class="xid_head">
                <p class="px-2">XID Order Book</p>
            </div>
        </div>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane crypto_scroll fade show active" id="pills-xid-buyer" role="tabpanel" aria-labelledby="pills-xid-buyer-tab">
                <!--************* table *************-->
                <div class="crypto_box d-flex justify-content-between align-items-center text-center mb-0">
                    <div  style="flex-basis: 33%;">Buy Price</div>
                    <div style="flex-basis: 33%;">Volume</div>
                    <div style="flex-basis: 34%;">XID</div>
                </div>

                <!--************* table content *************-->
                <div class="border_cus border-top-0" v-if="loading">
                <div class="d-flex justify-content-between align-items-center text-center py-2 px-3 down-history" v-for="(buyer , index) in BuyerData" :key="index">
                    <div class="text-center" style="flex-basis: 34%; color:var(--green)"> <img src="../../assets/images/icons/arrow_up.svg" alt="icon"> {{buyer.price}} </div>
                    <div class="" style="flex-basis: 33%; color:var(--green);"> {{buyer.vol}} </div>
                    <div class="" style="flex-basis: 33%;"> {{buyer.xid}} </div>
                </div>
                </div>
                 <!--buyer table content Loader -->
                <div class="border_cus border-top-0" v-else>
                <div class="d-flex justify-content-between align-items-center text-center py-2 px-3 down-history"  v-for="i in 8" :key="i">
                    <div class="text-center py-1" style="flex-basis: 34%"> <Skeletor /> </div>
                    <div class="py-1" style="flex-basis: 34%"> <Skeletor /> </div>
                    <div class="py-1" style="flex-basis: 34%"> <Skeletor /> </div>
                </div>
                </div>

            </div>

            <!-- 2nd tab -->
            <div class="tab-pane crypto_scroll fade" id="pills-xid-seller" role="tabpanel" aria-labelledby="pills-xid-seller-tab">
                <!--************* table *************-->
                <div class="crypto_box d-flex justify-content-between align-items-center text-center mb-0">
                    <div  style="flex-basis: 33%;">Buy Price</div>
                    <div style="flex-basis: 33%;">Volume</div>
                    <div  style="flex-basis: 34%;">XID</div>
                </div>

                <!--************* table content *************-->
                <div class="border_cus border-top-0" v-if="loading">
                <div class="d-flex justify-content-between align-items-center text-center py-2 px-3 down-history" v-for="(seller , index) in SellerData" :key="index">
                    <div class="text-center" style="flex-basis: 34%; color:var(--red);">  <img src="../../assets/images/icons/r_arrow_down.svg" alt="icon"> {{seller.price}} </div>
                    <div class="" style="flex-basis: 33%; color:var(--red);"> {{seller.vol}} </div>
                    <div class="" style="flex-basis: 33%;"> {{seller.xid}} </div>
                </div>
                </div>
                 <!--seller table content Loader -->
                <div class="border_cus border-top-0" v-else>
                <div class="d-flex justify-content-between align-items-center text-center py-2 px-3 down-history"  v-for="i in 8" :key="i">
                    <div class="text-center py-1" style="flex-basis: 34%"> <Skeletor /> </div>
                    <div class="py-1" style="flex-basis: 34%"> <Skeletor /> </div>
                    <div class="py-1" style="flex-basis: 34%"> <Skeletor /> </div>
                </div>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'XidOrderComponent',
    data() {
        return {
            loading:true,
            BuyerData: [{
                    price: "460.54",
                    vol: '47.00',
                    xid: '123'
                },
                {
                    price: "46.54",
                    vol: '47.00',
                    xid: '123'
                },
                {
                    price: "46.54",
                    vol: '37.00',
                    xid: '123'
                },
                {
                    price: "246.00",
                    vol: '23.00',
                    xid: '123'
                },
                {
                    price: "46.54",
                    vol: '50.00',
                    xid: '123'
                },
                {
                    price: "-46.54",
                    vol: '32.00',
                    xid: '123'
                },
                {
                    price: "46.54",
                    vol: '47.00',
                    xid: '123'
                },
                 {
                    price: "46.54",
                    vol: '50.00',
                    xid: '123'
                },
                {
                    price: "-46.54",
                    vol: '32.00',
                    xid: '123'
                },
                {
                    price: "46.54",
                    vol: '47.00',
                    xid: '123'
                },

            ],

            SellerData: [{
                    price: "460.54",
                    vol: '47.00',
                    xid: '123'
                },
                {
                    price: "46.54",
                    vol: '47.00',
                    xid: '123'
                },
                {
                    price: "46.54",
                    vol: '37.00',
                    xid: '123'
                },
                {
                    price: "246.00",
                    vol: '23.00',
                    xid: '123'
                },
                {
                    price: "46.54",
                    vol: '50.00',
                    xid: '123'
                },
                {
                    price: "-46.54",
                    vol: '32.00',
                    xid: '123'
                },
                {
                    price: "46.54",
                    vol: '47.00',
                    xid: '123'
                },
                 {
                    price: "46.54",
                    vol: '50.00',
                    xid: '123'
                },
                {
                    price: "-46.54",
                    vol: '32.00',
                    xid: '123'
                },
                {
                    price: "46.54",
                    vol: '47.00',
                    xid: '123'
                },

            ]

        }
    }
}
</script>

<style scoped>
.down-history {
    cursor: pointer;
    font-size: 12px;
    color: var(--hideous-grey);
}
.border_cus{
border: 1px solid var(--p2p-border);
} 

/* .crypto_scroll {
    overflow-y: scroll;
    height: 328px;
} */
.xid_head p ,
.crypto_box {
    color: var(--hideous-grey);
        font-size: 14px;
}
.exchange-box {
    background-color: var(--p2p-bg);
   box-shadow: var(--p2p-box-shadow);
backdrop-filter: blur( 8.5px );

}
.crypto_box ,
.heading_box{
      background-color: var(--p2p-heading);
}
.exchange-box .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
     color: var(--white);
    background-color: var(--hideous-pink);
    /* border-bottom: 1px solid var(--hideous-pink); */
    border-radius: 0;
}
.exchange-box .nav-link {
    color: var(--hideous-grey);
     font-size: 14px;
}

</style>
