<template>
<div>
    <section class="px-2 py-1" id="hide_exchange">
        <div class="container-fluid">
            <div class="row exchange border border-secondary">

                <!-- 1st Section  -->
                <div class="col-md-6 col-lg-6 col-xl-3 col-xxl-2 p-0 border-end border-secondary order-3 order-xl-1">
                    <OrderDepthView />
                </div>

                <!-- 2nd Section  -->
                <div class="col-md-12 col-lg-12 col-xl-6 col-xxl-8  border-end border-secondary order-1 order-xl-2">
                    <div class="row text-white">
                        <div class="col-md-12 col-lg-12 col-xl-12 p-0 border-bottom border-secondary">
                            <div>
                                <DetailBarView />
                            </div>
                            <div class="ex_chart">
                                <ChartComponent />
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-12 col-xl-12   p-3  border_sm">
                            <BuySellComponent />
                        </div>
                    </div>
                </div>

                <!-- 3rd Section  -->
                <div class="col-md-6 col-lg-6 col-xl-3 col-xxl-2  p-0 border-end border-secondary order-2 order-xl-3">

                    <div>
                        <CryptoListView />
                    </div>
                    <div class="border_sm">
                        <TradeHistoryComponent />
                    </div>

                </div>
                <div class="col-md-12 col-lg-12 col-xl-12 p-0 order-4">
                    <OrderComponent />
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import OrderDepthView from '@/components/exchange/OrderDepthView.vue'
import CryptoListView from '@/components/exchange/CryptoListView.vue'
import DetailBarView from '@/components/exchange/DetailBarView.vue'
import ChartComponent from '@/components/exchange/ChartComponent.vue'
import BuySellComponent from '@/components/exchange/BuySellComponent.vue'
import TradeHistoryComponent from '@/components/exchange/TradeHistoryComponent.vue'
import OrderComponent from '@/components/exchange/OrderComponent.vue'

export default {
    name: 'ExchangeView',
    components: {
        OrderDepthView,
        CryptoListView,
        DetailBarView,
        ChartComponent,
        BuySellComponent,
        TradeHistoryComponent,
        OrderComponent
    }
}
</script>

<style scoped>

section {
    background-color: var(--hideous-primary) ;
}

.exchange {
    background-color: var(--lovely-secondary)
}

.ex_chart {
    border-top: 1px solid var(--border);
}

.border_sm {
    border-bottom: 0 solid var(--border);
}

.border-secondary {
    border-color: var(--border) !important;
}

@media (min-width:320px) and (max-width:1199px) {
    .border_sm {
        border-bottom: 1px solid var(--border);

    }
}
</style>
