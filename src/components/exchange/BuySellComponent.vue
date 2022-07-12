<template>
<div>
    <div class="d-flex justify-content-between align-items-center">
        <div>
            <!-- LIMIT, MARKET  ,POST-ONLY -->
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active ps-0" id="pills-limit-tab" data-bs-toggle="pill" data-bs-target="#pills-limit" type="button" role="tab" aria-controls="pills-limit" aria-selected="true">Limit</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-market-tab" data-bs-toggle="pill" data-bs-target="#pills-market" type="button" role="tab" aria-controls="pills-market" aria-selected="false">Market</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-post-only-tab" data-bs-toggle="pill" data-bs-target="#pills-post-only" type="button" role="tab" aria-controls="pills-post-only" aria-selected="false">Post-only <svg xmlns="http://www.w3.org/2000/svg" height="12px" width="12px" viewBox="0 0 320 512">
                            <path d="M311.9 335.1l-132.4 136.8C174.1 477.3 167.1 480 160 480c-7.055 0-14.12-2.702-19.47-8.109l-132.4-136.8C-9.229 317.8 3.055 288 27.66 288h264.7C316.9 288 329.2 317.8 311.9 335.1z" /></svg></button>
                </li>
            </ul>
        </div>
        <!--FEE TAB -->
        <div class="fee_only">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-fee-only-tab" data-bs-toggle="pill" data-bs-target="#pills-fee-only" type="button" role="tab" aria-controls="pills-fee-only" aria-selected="false">fee-only <svg xmlns="http://www.w3.org/2000/svg" height="12px" width="12px" viewBox="0 0 320 512">
                            <path d="M311.9 335.1l-132.4 136.8C174.1 477.3 167.1 480 160 480c-7.055 0-14.12-2.702-19.47-8.109l-132.4-136.8C-9.229 317.8 3.055 288 27.66 288h264.7C316.9 288 329.2 317.8 311.9 335.1z" /></svg></button>
                </li>

            </ul>
        </div>
    </div>
    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-limit" role="tabpanel" aria-labelledby="pills-limit-tab" tabindex="0">
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 mb-5 mb-md-0">
                    <form class="buy_form">
                        <div class="row">
                         <!-- USDT BALANCE -->
                            <div class="col-12">
                               <div class="usdt_box">
                                 <h6 class="mb-3">USDT BALANCE: 0</h6>
                               </div>
                            </div>
                            <!-- PRICE -->
                            <div class="col-12">
                                <div class="input-group py-1 mb-3">
                                    <span class="input-group-text" id="basic-addon1"> Price</span>
                                    <input type="text" class="form-control" placeholder="38824" aria-label="Username" aria-describedby="basic-addon1">
                                    <span class="crypto input-group-text " id="basic-addon1"> USDT</span>
                                </div>
                            </div>
                            <!-- AMOUNT -->
                            <div class="col-12">
                                <div class="input-group py-1 mb-3">
                                    <span class="input-group-text" id="basic-addon1"> Amount</span>
                                    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
                                    <span class="crypto input-group-text " id="basic-addon1"> BTC</span>
                                </div>
                            </div>
                            <div class="col-12">
                                <!-- Percentage  -->
                                <div class="percentage">
                                    <ul class="list-unstyled  d-flex justify-content-around mb-3">
                                        <li>10%</li>
                                        <li>25%</li>
                                        <li>50%</li>
                                        <li>75%</li>
                                        <li>max</li>
                                    </ul>
                                </div>
                                <!-- wallet detail  -->
                                <div class="wallet-detail">
                                    <p class="m-0 my-1"><span class="me-2" v-html="wallet_icon"></span>Total 0 USDT</p>
                                </div>
                                <!-- BUTTON -->
                                <div class="text-center my-2">
                                    <!-- loading -->
                                    <button type="button" class="buy-btn" v-if="loading" disabled>
                                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </button>
                                    <!-- button -->
                                    <button type="submit" class="buy-btn" v-else>Buy</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6 mb-4 mb-md-0">
                    <form class="sell_form">
                        <div class="row">
                            <!-- USDT BALANCE -->
                            <div class="col-12">
                               <div class="usdt_box">
                                 <h6 class="mb-3">USDT BALANCE: 0</h6>
                               </div>
                            </div>
                            <!-- PRICE -->
                            <div class="col-12">
                                <div class="input-group py-1 mb-3">
                                    <span class="input-group-text" id="basic-addon1"> Price</span>
                                    <input type="text" class="form-control" placeholder="38824" aria-label="Username" aria-describedby="basic-addon1">
                                    <span class="crypto input-group-text " id="basic-addon1"> USDT</span>
                                </div>
                            </div>
                            <!-- AMOUNT -->
                            <div class="col-12">
                                <div class="input-group py-1 mb-3">
                                    <span class="input-group-text" id="basic-addon1"> Amount</span>
                                    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
                                    <span class="crypto input-group-text " id="basic-addon1"> BTC</span>
                                </div>
                            </div>
                            <div class="col-12">
                                <!-- Percentage  -->
                                <div class="percentage">
                                    <ul class="list-unstyled  d-flex justify-content-around mb-3">
                                        <li>10%</li>
                                        <li>25%</li>
                                        <li>50%</li>
                                        <li>75%</li>
                                        <li>max</li>
                                    </ul>
                                </div>
                                <!-- wallet detail  -->
                                <div class="wallet-detail">
                                    <p class="m-0 my-1"><span class="me-2" v-html="wallet_icon"></span>Total 0 USDT</p>
                                </div>
                                <!-- BUTTON -->
                                <div class="text-center my-2">
                                    <!-- loading -->
                                    <button type="button" class="sell-btn" v-if="loading" disabled>
                                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </button>
                                    <!-- button -->
                                    <button type="submit" class="sell-btn" v-else>Sell</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
        <div class="tab-pane fade" id="pills-market" role="tabpanel" aria-labelledby="pills-market-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="pills-post-only" role="tabpanel" aria-labelledby="pills-post-only-tab" tabindex="0">...</div>
        <!-- <div class="tab-pane fade" id="pills-fee-only" role="tabpanel" aria-labelledby="pills-fee-only-tab" tabindex="0">...</div> -->
    </div>
</div>
</template>

<script>
export default {
    name: 'BuySellComponent',
    data() {
        return {
            loading: false
        }
    },
}
</script>

<style scoped>
/* NAV PILLS CSS */
.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    color: var(--hideous-white);
    background-color: transparent;
}

.nav-pills .nav-link.active svg,
.nav-pills .show>.nav-link svg {
    fill: rgba(255, 255, 255, 1);
}

.nav-link {
    color: var(--hideous-grey);
    font-size: 14px;
}

.nav-link:hover {
    color: var(--hideous-white);
}

.nav-link:hover svg {
    fill: var(--hideous-white);
}

img,
svg {
    vertical-align: baseline;
}

.nav-item svg {
    fill: rgba(109, 109, 109, 1);
}

/* INPUT GROUP CSS */
.input-group {
    background: var(--peacoat);
    border-radius: 4px;

}

.input-group-text {
    color: var(--hideous-grey);
    background-color: transparent;
    border: none;
    font-size: 13px;
}

.form-control {
    font-size: 13px;
    border: none;
    color: var(--hideous-white);
    background-color: transparent;
}

.form-control:focus {
    box-shadow: none;
}

.percentage ul li {
    font-size: 12px;
    color: var(--hideous-grey);
    cursor: pointer;
}

.percentage ul {
    border: 1px solid var(--border);
    padding: 1px;
}

/**************  Buy Button **************/
.buy-btn {
    font-size: 14px;
    width: 100%;
    background-color: var(--green);
    border: 2px solid var(--green);
    color: var(--white);
    box-shadow: none;
    border-radius: 4px;
    padding-block: 5px;
    transition: all 0.2s ease-in-out;
}

.buy-btn:hover {
    background-color: var(--hideous-green);
   border: 2px solid var(--hideous-green);
    transition: all 0.2s ease-in-out;
}
.sell-btn{
    font-size: 14px;
    width: 100%;
    background-color: var(--red);
    border: 2px solid var(--red);
    color: var(--white);
    box-shadow: none;
    border-radius: 4px;
    padding-block: 5px;
    transition: all 0.2s ease-in-out;
}
.sell-btn:hover {
    background-color: var(--hover-red);
   border: 2px solid var(--hover-red);
    transition: all 0.2s ease-in-out;
}

/* wallet-detail */
.wallet-detail p {
    font-size: 14px;
}
.usdt_box h6 {
    font-size: 14px;
    color: var(--hideous-white);
}
.crypto{
    color: var(--hideous-white);
}
@media (min-width:320px) and (max-width:767px) {
.fee_only{
display: none;
 }
}
</style>
