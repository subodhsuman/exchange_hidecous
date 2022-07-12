<template>
<div>
    <div class="trade_history mb-xl-0 mb-3">
        <div class="trade_head p-2">
            <p class="mb-1"> Match History</p>
        </div>
        <!--******* trade history table ********-->
        <div class="crypto_scroll ">
            <div class="crypto_box d-flex justify-content-between align-items-center text-center py-1">
                <div style="flex-basis: 33%;">Price</div>
                <div style="flex-basis: 33%;">Vol</div>
                <div style="flex-basis: 34%;">Time</div>
            </div>
            <!--******  table content *******-->
            <div class="main_box border-top-0" v-if="loading">
                <div class="d-flex justify-content-between align-items-center text-center  p-2  down-history" v-for="(price , index) in TradeData" :key="index" :style="price.price > 0 ? 'background-color: var(--p2p-green-bg);' : 'background-color:var(--p2p-red-bg);'">
                    <!-- down match history* -->
                    <div class="down-price " :style="price.price > 0 ? 'color: var(--green);' : 'color:var(--red);'"> {{price.price}} </div>
                    <div> <img :src="price.image" alt="icon" class="img-fluid" :style="price.vol > 0 ? 'color: var(--green);' : 'color:var(--red);'"> {{price.vol}}</div>
                    <div> {{price.time}}</div>
                </div>
            </div>
             <div class="main_box border-top-0" v-else>
                <div class="d-flex justify-content-between align-items-center text-center  p-2  down-history" v-for="i in 8" :key="i">
                    <!-- down match history* -->
                    <div class="py-1" style="flex-basis: 34%"> <Skeletor /> </div>
                    <div class="py-1" style="flex-basis: 34%"> <Skeletor /> </div>
                    <div class="py-1" style="flex-basis: 34%"> <Skeletor /></div>
                </div>
            </div>

        </div>

    </div>
</div>
</template>

<script>
export default {
    name: "TradeHistoryComponent",

    data() {
        return {
            loading:true,
            TradeData: [{
                    image: require('@/assets/images/icons/right-down-arrow.svg'),
                    price: "-38303",
                    vol: "0.01",
                    time: "12:03:32"
                },
                {
                    image: require('@/assets/images/icons/arrow_up.svg'),
                    price: "38303",
                    vol: "1.01",
                    time: "12:03:32"
                },
                {
                    image: require('@/assets/images/icons/right-down-arrow.svg'),
                    price: "-38303",
                    vol: "-0.01",
                    time: "12:03:32"
                },
                {
                    image: require('@/assets/images/icons/right-down-arrow.svg'),
                    price: "-38303",
                    vol: "-0.01",
                    time: "12:03:32"
                },
                {
                    image: require('@/assets/images/icons/arrow_up.svg'),
                    price: "38303",
                    vol: "1.01",
                    time: "12:03:32"
                },
                {
                    image: require('@/assets/images/icons/right-down-arrow.svg'),
                    price: "-38303",
                    vol: "-0.01",
                    time: "12:03:32"
                },
                {
                    image: require('@/assets/images/icons/arrow_up.svg'),
                    price: "38303",
                    vol: "1.01",
                    time: "12:03:32"
                },
                {
                    image: require('@/assets/images/icons/arrow_up.svg'),
                    price: "38303",
                    vol: "1.01",
                    time: "12:03:32"
                },
                {
                    image: require('@/assets/images/icons/arrow_up.svg'),
                    price: "38303",
                    vol: "1.01",
                    time: "12:03:32"
                },
                {
                    image: require('@/assets/images/icons/arrow_up.svg'),
                    price: "38303",
                    vol: "1.01",
                    time: "12:03:32"
                },

            ]

        }
    }

}
</script>

<style scoped>
.trade_history {
    background-color: var(--p2p-bg);
    font-size: 14px;
 box-shadow: var(--p2p-box-shadow);
backdrop-filter: blur( 8.5px );
}

.trade_history p {
    color: var(--hideous-pink);
}

/* ******************************* history bg CSS ******************************* */
.grow-history img {
    transform: rotate(-45deg);
}

.down-history,
.grow-history {
    cursor: pointer;
    font-weight: 400;
    font-size: 12px;
    color: var(--hideous-grey);

}

.main_box {
    border: 1px solid var(--p2p-border);
}

/* .crypto_scroll {
    overflow-y: scroll;
    height: 402px; 
} */

.crypto_box {
    color: var(--hideous-grey);
    font-size: 14px;
}

.trade_head {
    border-bottom: 1px solid var(--border);
}
</style>
