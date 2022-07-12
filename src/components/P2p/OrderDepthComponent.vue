<template>
<div>
    <div class="exchange-box">

        <div class="">
            <ul class="nav nav-pills nav-fill mb-2" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-depth-tab" data-bs-toggle="pill" data-bs-target="#pills-depth" type="button" role="tab" aria-controls="pills-depth" aria-selected="true">Market Depth</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-volume-tab" data-bs-toggle="pill" data-bs-target="#pills-volume" type="button" role="tab" aria-controls="pills-volume" aria-selected="false">Order Volume </button>
                </li>
            </ul>
        </div>

        <div class="tab-content " id="pills-tabContent">
            <div class="tab-pane  fade show active" id="pills-depth" role="tabpanel" aria-labelledby="pills-depth-tab">
                <!-- ************* market buy tab ***************-->
                <!-- order-depth-buy  -->
                <div class="order-depth  d-flex crypto_scroll">
                    <div class="buy flex-grow-1 text-center ">
                        <div class="header d-flex justify-content-around crypto_box ">
                            <div class="volume  p-1" style="flex-basis:50%">Vol</div>
                            <div class="buy  p-1" style="flex-basis:50%">Buy Price</div>
                        </div>

                        <div class="borders border-top-0" v-if="loading">
                            <div class="content d-flex justify-content-around py-2 px-3 cus_back" v-for="(buy , index) in BuyData" :key="index">
                                <div class="volume " style="color:var(--green)"> <img src="../../assets/images/icons/arrow_up.svg" alt="icon"> {{buy.vol}}</div>
                                <div class="buy" style="color:var(--green)"> {{buy.price}}</div>
                            </div>
                        </div>
                       <!-- Loader order-depth-buy  -->
                         <div class="borders border-top-0" v-else>
                            <div class="content d-flex justify-content-around py-2 px-3 cus_back" v-for="i in 8" :key="i">
                                <div class="volume py-1" style="flex-basis: 34%"> <Skeletor /> </div>
                                <div class="buy py-1" style="flex-basis: 34%"> <Skeletor /> </div>
                            </div>
                        </div>

                    </div>
                    <!-- order-depth-sell  -->
                    <div class="sell flex-grow-1 text-center">

                        <div class="header d-flex justify-content-around crypto_box ">
                            <div class="volume p-1" style="flex-basis:50%">Sell Price</div>
                            <div class="sell p-1" style="flex-basis:50%">Vol</div>
                        </div>
                        <div class="border_cus border-top-0 " v-if="loading">
                            <div class="content d-flex justify-content-around py-2 px-3 cus_back_sell" v-for="(sell , index) in SellData" :key="index">
                                <div class="buy" style="color:var(--red)"> <img src="../../assets/images/icons/r_arrow_down.svg" alt="icon"> {{sell.price}} </div>
                                <div class="volume" style="color:var(--red)">{{sell.vol}}</div>

                            </div>
                        </div>
                         <!--loader order-depth-sell  -->
                           <div class="border_cus border-top-0" v-else>
                            <div class="content d-flex justify-content-around py-2 px-3 cus_back_sell"  v-for="i in 8" :key="i">
                                <div class="buy py-1" style="flex-basis: 34%"> <Skeletor /> </div>
                                <div class="volume py-1" style="flex-basis: 34%"> <Skeletor /> </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <!-- ************* order Volume sell tab ***************-->
            <div class="tab-pane fade" id="pills-volume" role="tabpanel" aria-labelledby="pills-volume-tab">

                <!-- order-volume-buy  -->
                <div class="order-depth border-top-0 d-flex crypto_scroll">
                    <div class="buy flex-grow-1 text-center ">
                        <div class="header d-flex justify-content-around ">
                            <div class="volume  p-1" style="flex-basis:50%"> Vol</div>
                            <div class="buy  p-1" style="flex-basis:50%"> Buy price </div>
                        </div>
                        <div class="borders border-top-0" v-if="loading">
                            <div class="content d-flex justify-content-around py-2 px-3 cus_back" v-for="(buy , index) in BuyData" :key="index">

                                <div class="volume " style="color:var(--green)"> <img src="../../assets/images/icons/arrow_up.svg" alt="icon"> {{buy.vol}}</div>
                                <div class="buy" style="color:var(--green)">{{buy.price}}</div>
                            </div>
                        </div>
                        <!-- Loader order-volume-buy  -->
                         <div class="borders border-top-0" v-else>
                            <div class="content d-flex justify-content-around py-2 px-3 cus_back" v-for="i in 8" :key="i">
                                <div class="volume py-1" style="flex-basis: 34%"> <Skeletor /> </div>
                                <div class="buy py-1" style="flex-basis: 34%"> <Skeletor /> </div>
                            </div>
                        </div>

                    </div>
                    <!-- order-volume-sell  -->
                    <div class="sell flex-grow-1 text-center">

                        <div class="header d-flex justify-content-around">
                            <div class="volume p-1" style="flex-basis:50%"> Sell price</div>
                            <div class="sell p-1" style="flex-basis:50%"> Vol</div>
                        </div>
                        <div class="border_cus border-top-0" v-if="loading">
                            <div class="content d-flex justify-content-around py-2 px-3 cus_back_sell" v-for="(sell , index) in SellData" :key="index">
                                <div class="buy" style="color:var(--red)"> <img src="../../assets/images/icons/r_arrow_down.svg" alt=""> {{sell.price}} </div>
                                <div class="volume" style="color:var(--red)">{{sell.vol}}</div>

                            </div>
                        </div>
                         <!--loader order-volume-sell  -->
                           <div class="border_cus border-top-0" v-else>
                            <div class="content d-flex justify-content-around py-2 px-3 cus_back_sell"  v-for="i in 8" :key="i">
                                <div class="buy py-1" style="flex-basis: 34%"> <Skeletor /> </div>
                                <div class="volume py-1" style="flex-basis: 34%"> <Skeletor /> </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </div>
</div>
</template>

<script>
export default {
    name: 'OrderDepthComponent',
    data() {
        return {
             loading:true,
            BuyData: [{
                    vol: '46.75',
                    price: '22.30'
                },
                {
                    vol: '46.75',
                    price: '24.30'
                },
                {
                    vol: '46.75',
                    price: '230'
                },
                {
                    vol: '22.75',
                    price: '82.30'
                },
                {
                    vol: '33.75',
                    price: '92.30'
                },
                {
                    vol: '45.75',
                    price: '30.66'
                },
                {
                    vol: '22.75',
                    price: '82.30'
                },
                {
                    vol: '33.75',
                    price: '92.30'
                },
                {
                    vol: '45.75',
                    price: '30.66'
                },
                {
                    vol: '22.75',
                    price: '82.30'
                }
            ],
            SellData: [{
                    vol: '46.75',
                    price: '22.30'
                },
                {
                    vol: '46.75',
                    price: '24.30'
                },
                {
                    vol: '46.75',
                    price: '230'
                },
                {
                    vol: '22.75',
                    price: '82.30'
                },
                {
                    vol: '33.75',
                    price: '92.30'
                },
                {
                    vol: '45.75',
                    price: '30.66'
                },
                {
                    vol: '22.75',
                    price: '82.30'
                },
                {
                    vol: '33.75',
                    price: '92.30'
                },
                {
                    vol: '45.75',
                    price: '30.66'
                },
                {
                    vol: '33.75',
                    price: '92.30'
                },
            ]
        }
    }
}
</script>

<style scoped>
.cus_back {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, var(--p2p-green-bg) 0%);
    cursor: pointer;
}

.cus_back_sell {
    background: linear-gradient(90deg, var(--p2p-red-bg) 100%, rgba(255, 255, 255, 0) 19%);
}

/* .crypto_scroll {
    overflow-y: scroll;
    height: 390px;
} */

.header {
    color: var(--hideous-grey);
    font-size: 13px;
}

.content {
    background-color: var(--p2p-bg);
    /* font-weight: 100; */
    font-size: 12px;
}

.exchange-box {
    background-color: var(--p2p-bg);
   box-shadow: var(--p2p-box-shadow);
backdrop-filter: blur( 8.5px );
}

.borders {
    border: 1px solid var(--p2p-border);
    border-right: 0px;
}

.border_cus {
    border: 1px solid var(--p2p-border);
    border-left: 0px;
}
ul {
    width: 100%;
}

.nav-fill .nav-item .nav-link, 
.nav-justified .nav-item .nav-link {
    width: 100%;
}
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
       color: var(--white);
    background-color: var(--hideous-pink);
    /* border-bottom: 1px solid var(--hideous-pink); */
    border-radius: 0;
}
.nav-link {
    color: var(--hideous-grey);
    font-size: 14px;
    font-weight: 600;
}
</style>
