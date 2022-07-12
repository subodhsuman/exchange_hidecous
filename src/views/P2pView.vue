<template>
<div>
    <section class="p2p-box px-md-2 py-md-1 p-0">
        <div class="container-fluid">
            <div class="row">
                <!--   OrderDepthComponent component  -->
                <div class="col-md-6 col-lg-6 col-xl-3">

                    <TradeHistoryComponent />
                </div>
                <!--  Trade History component -->
                <div class="col-md-6 col-lg-6 col-xl-6 mb-3 mb-xl-0">
                    <OrderDepthComponent />
                </div>
                <div class="col-md-12 col-lg-12 col-xl-3">
                    <P2pMarketComponent />

                </div>
            </div>
            <div class="row mt-3 justify-content-center">
                <!--   XidOrderComponent  component -->

                <div class="col-md-6 col-lg-6 col-xl-3 mb-3 mb-xl-0">
                    <XidOrderComponent/>

                </div>
                <!--   OrderComponent  component -->
                <div class="col-md-6 col-lg-6 col-xl-6 mb-3 mb-xl-0">
                    <OrderComponent />
                   
                </div>
                <div class="col-md-12 col-lg-6 col-xl-3">
                    <BuySellComponent />
                </div>
                  
            </div>

        </div>

    </section>
</div>
</template>

<script>
import TradeHistoryComponent from '@/components/P2p/TradeHistoryComponent.vue'

import OrderDepthComponent from '@/components/P2p/OrderDepthComponent.vue'
import OrderComponent from '@/components/P2p/OrderComponent.vue'
import BuySellComponent from '@/components/P2p/BuySellComponent.vue'
import P2pMarketComponent from '@/components/P2p/P2pMarketComponent.vue'
import XidOrderComponent from '@/components/P2p/XidOrderComponent.vue'
export default {
    name: 'P2pView',
    components: {
        TradeHistoryComponent,
        OrderDepthComponent,
        OrderComponent,
        BuySellComponent ,
        P2pMarketComponent,
        XidOrderComponent
    }
}
</script>
