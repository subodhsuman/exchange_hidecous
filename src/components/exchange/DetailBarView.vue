<template>
<div class="crypto-detail">
    <ul class="list-group list-group-horizontal justify-content-evenly justify-content-sm-evenly align-items-center flex-wrap">
        <li class="list-group-item bg-transparent rounded-0 flex-grow-1 cus_right_border mt-3 mt-sm-0 p-2 p-2 pb-0">
            <div class="d-flex align-items-center justify-content-center gap-5">
                <!-- Current name  -->
                <div class="d-flex align-items-center justify-content-center gap-2">
                    <!-- Fav Star  -->
                    <div class="text-center" style="cursor:pointer;">
                    <!-- loader  -->
                        <span class="mt-1 mb-0 d-flex justify-content-center" v-if="loading">
                            <Skeletor width="20" height="20" circle />
                        </span>
                        <!-- data  -->
                        <div v-else>
                            <span v-html="empty_star" v-if="true"></span>
                            <span v-html="filled_star" v-else></span>
                        </div>
                    </div>

                    <!-- Currency Name  -->
                    <div class="currency-name d-flex align-items-center justify-content-between gap-1">
                        <!-- Loader  -->
                        <h5 class=" mb-0" v-if="loading">
                            <Skeletor width="100" height="10" pill />
                        </h5>
                        <!-- Data  -->
                        <h6 class=" m-0" v-else>BTC/<span>USDT</span></h6>
                    </div>
                </div>

                <!-- Current Price  -->
                <div class="current-price">
                    <!-- Loader  -->
                    <h5 class=" mb-0" v-if="loading">
                        <Skeletor width="100" height="10" pill />
                    </h5>
                    <!-- Data  -->
                    <h5 class=" mb-0" v-else>{{current_price}}</h5>
                </div>
            </div>
        </li>

        <!-- 24H change  -->
        <li class="list-group-item p-0 bg-transparent rounded-0 flex-grow-1 cus_right_border mt-3 mt-sm-0 p-2 pb-0">
            <div class="text-center">
                <h6 class="m-0">24 Hour Change</h6>
                <!-- Skeletor  -->
                <p class="mt-1 mb-2 d-flex justify-content-center" :style="change_price > 0 ? 'color:var(--green)' : 'color:red'" v-if="loading">
                    <Skeletor width="80%" height="10" pill />
                </p>
                <!-- data  -->
                <p class=" mb-0" :style="change_price > 0 ? 'color:var(--green)' : 'color:red'" v-else>{{change_price}}%</p>
            </div>
        </li>

        <!-- High Price  -->
        <li class="list-group-item p-0 bg-transparent rounded-0 flex-grow-1 cus_right_border mt-3 mt-sm-0 p-2 pb-0">
            <div class="text-center">
                <h6 class="grow-price m-0">
                    24H High <span v-html="up_icon"></span>
                </h6>
                <!-- loader  -->
                <p class="mt-1 mb-2 d-flex justify-content-center" v-if="loading">
                    <Skeletor width="80%" height="10" pill />
                </p>
                <!-- data  -->
                <p class=" mb-0" style="color:var(--green)" v-else>{{high_price}}</p>
            </div>
        </li>

        <!-- Low Price  -->
        <li class="list-group-item p-0 bg-transparent rounded-0 flex-grow-1 cus_right_border mt-3 mt-sm-0 p-2 pb-0">
            <div class="text-center">
                <h6 class="m-0 down-price">
                    24H Low
                    <span v-html="down_icon"></span>
                </h6>
                <!-- loader  -->
                <p class="mt-1 mb-2 d-flex justify-content-center" v-if="loading">
                    <Skeletor width="80%" height="10" pill />
                </p>
                <!-- data -->
                <p class=" mb-0" style="color:var(--red)" v-else>{{low_price}}</p>
            </div>
        </li>

        <!-- Change Vol  -->
        <li class="list-group-item p-0 bg-transparent border-0 rounded-0 flex-grow-1 d-none d-xxl-block">
            <div class="text-center">
                <h6 class="m-0 down-price">
                    24H Vol</h6>
                <!-- loader  -->
                <p class="mt-1 mb-2 d-flex justify-content-center" v-if="loading">
                    <Skeletor width="80%" height="10" pill />
                </p>
                <!-- data   -->
                <p class=" mb-0" :style="change_vol > 0 ? 'color:var(--green)' : 'color:var(--red)'" v-else> {{change_vol}} USDT</p>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: "DetailBarComponent",
    data() {
        return {
            loading: false,
            current_price: "37824564.43",
            change_price: "-4.20",
            high_price: "3782.43",
            low_price: "3782.43",
            change_vol: "37708483101.80",
            filled_star: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: var(--hideous-white);" ><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>',
            empty_star: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:var(--hideous-white);"><path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path></svg>',
            up_icon: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"  style="fill:var(--green);transform: rotate(-45deg)"  viewBox="0 0 448 512"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg>',
            down_icon: '<svg xmlns="http://www.w3.org/2000/svg"  width="12" height="12"  style="fill: var(--red); transform: rotate(-45deg);" viewBox="0 0 384 512"><path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"/></svg>',

        };
    },
};
</script>

<style scoped>
/* ******************************* EXCHANGE HEADER CSS ******************************* */

.crypto-detail {
    color: var(--hideous-white);
}

.crypto-detail h6 {
    color: var(--hideous-white);
    font-size: 12px;
}

.crypto-detail p {
    color: var(--hideous-white);
    font-size: 14px;
}

h5 {
    color: var(--hideous-white);
}

.cus_right_border {
    border: 0;
    border-right: 1px solid var(--border);
}
.currency-name h6,
.current-price h5{
    font-size: 17px;
}

/* ******************************* RESPONSIVE CSS ******************************* */
@media (min-width: 320px) and (max-width: 1399px) {
    .cus_right_border {
        border-right: 0;
        border: 0;
    }
}
</style>
