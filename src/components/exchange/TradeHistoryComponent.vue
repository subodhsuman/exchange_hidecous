<template>
    <div class="mathistory">
      <div class="component_heading p-2 pb-0 border-top border-secondary">
            <h6 class="mb-1"> Market Treaders</h6>
        </div>

        <div class="trade_box mb-0 market_table">
            <!-- heading -->
            <div class="heading_box p-2 pb-0 d-flex">
                <div style="flex-basis: 34%;" class="text-">Price</div>
                <div style="flex-basis: 33%;" class="text-center">Amount</div>
                <div style="flex-basis: 33%;" class="text-end">Time</div>
            </div>
            <!-- Skeletor loader  -->
            <div class="overflow-table" v-if="loading">
                <div class="down-history d-flex border_bottom cus_hover" v-for="i in 13" :key="i.id">
                    <!-- Price  -->
                    <div style="flex-basis: 33%;" class="py-1 mx-auto">
                        <Skeletor width="80%" height="10" pill class="d-flex mx-auto"/>
                    </div>
                    <!-- Volume  -->
                    <div style="flex-basis: 33%;" class="py-1">
                        <Skeletor width="80%" height="10" pill class="d-flex mx-auto"/>
                    </div>
                    <!-- time  -->
                    <div style="flex-basis: 33%;" class="py-1">
                        <Skeletor width="80%" height="10" pill class="d-flex mx-auto"/>
                    </div>
                </div>

            </div>
            <!-- Data  -->
            <div class="overflow-table  p-2 pt-0" v-else>
                <div class="down-history d-flex " v-for="(trade , index) in trade_history" :key="index">
                    <!-- Price  -->
                    <div style="flex-basis: 34%;" class="py-1" :style="trade.price > 0 ? 'color:var(--green)': 'color:var(--red)' ">
                        {{trade.price}}
                        <span v-html="trade.price > 0 ? up_icon : down_icon "></span>
                    </div>
                    <!-- Volume  -->
                    <div class="text-center py-1" style="flex-basis: 33%;"> {{trade.volume}}</div>
                    <!-- time  -->
                    <div class="text-end py-1" style="flex-basis: 33%;" > {{trade.time}}</div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import exchangedata from '@/assets/json/exchangedata'
export default {
    name:'TradeHistoryComponent',
     data() {
        return {
            loading: false,
            up_icon: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"  style="fill:var(--green);transform: rotate(-45deg)"  viewBox="0 0 448 512"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>',
            down_icon: '<svg xmlns="http://www.w3.org/2000/svg"  width="12" height="12"  style="fill: var(--red); transform: rotate(-45deg);" viewBox="0 0 384 512"><path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"/></svg>',
            trade_history: exchangedata.trade_history

        }
    }
}
</script>
<style scoped>
    .component_heading h6 {
    color: var(--hideous-white);
    font-size: 14px;
}
.heading_box{
    font-size: 14px;
     color: var(--hideous-grey);
}
.down-history{
     font-size: 12px;
     color: var(--hideous-white);
}
.border-secondary {
    border-color:var(--border) !important;
}
</style>