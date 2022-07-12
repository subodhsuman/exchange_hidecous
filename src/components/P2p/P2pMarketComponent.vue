<template>
<div>
    <div class="exchange-box mb-xl-0 mb-3">

        <!-- P2P TAB -->
        <div class=" mb-0 nav-fill d-flex justify-content-center">
            <div class="market_coin p-2 text-center">
                <select class="select text-center ">  
                    <option value="1"> USDT/INR  </option>
                    <option value="1">1</option>
                    <option value="1">2</option>
                </select>

            </div>
            <div class="market_price p-2 text-center"> <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" style="fill: var(--hideous-white);" viewBox="0 0 288 512">
                    <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z" /></svg>
                80.82
            </div>

        </div>

        <!-- P2P TAB CONTENT -->
        <div class="borders border-top-0 tab-content p-3" id="pills-tabContent">
            <!-- FIRST TAB  -->
            <div class="tab-pane fade show active" id="pills-coin" role="tabpanel" aria-labelledby="pills-coin-tab">
                <div class="p_market text-center my-3">
                    <h3> P2P Markets </h3>
                    <p class="mb-4"> Use Tacc P2P when you want to buy USDT to trade cryptos, or when you want to sell USDT and cash out to INR. It's safe and hassle free!</p>
                    <!-- button -->
                    <h3 class="how_works p-0 m-0"> How it works ?</h3>
                    <img src="../../assets/images/h_lines.png" alt="icon" class="img-fluid">
                </div>

                <!-- *********************************   p2p market work IMAGE**************************************/-->
                <div class="how-work text-center">
                    <!-- <div class="row text-white text-center justify-content-between">
                        <div class="col-xl-4 col-lg-3 col-md-3">
                            <div class="mb-3 mb-md-0">
                                <img src="../../assets/images/bank.png" alt="icon" class="mb-3 img-fluid">
                            <p class="mb-0 text-capitalize"> Pay Directly to seller bank account.</p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-3 col-md-3">
                             <div class="mb-3 mb-md-0">
                            <img src="../../assets/images/seller.png" alt="icon" class="mb-3 img-fluid">
                            <p class="mb-0 text-capitalize"> Seller confirms Payment.</p>
                             </div>
                        </div>
                        <div class="col-xl-4 col-lg-3 col-md-3">
                             <div class="mb-3 mb-md-0">
                            <img src="../../assets/images/wallet.png" alt="icon" class="mb-3 img-fluid">
                            <p class="mb-0 text-capitalize"> Abundance released locked ETH TO YOUR account </p>
                             </div>
                        </div>
                    </div> -->
                     <img src="../../assets/images/market-p2p.png" alt="icon" class="my-3 img-fluid" id="p2p_image">
                    
                </div>

            </div>

            <!-- SECONDE TAB  -->

        </div>
    </div>
</div>
</template>

<script>
export default {

    name: 'P2pMarketComponent'
}
</script>

<style scoped>
.exchange-box {
    background-color: var(--p2p-bg);
    font-size: 14px;
   box-shadow: var(--p2p-box-shadow);
backdrop-filter: blur( 8.5px );
}

.p_market h3 {
    font-size: 14px;
    font-weight: 700;
    color: var(--hideous-white);
}

.p_market p {
    font-weight: 500;
    font-size: 12px;
    color: var(--hideous-grey);
}

.btn-check:focus+.btn-outline-primary,
.btn-outline-primary:focus {
    box-shadow: none;
}

h6 {
    font-size: 11px;
    font-weight: 500;
}

/* form select css */
.select {
    color: var(--white);
    background-color: transparent;
    border: none;
    border-radius: 0;
    font-size: 16px;
    font-weight: 600;
    padding: 0;
    background-image: none;
}

.select:focus {
    box-shadow: none;
}

.know_more .btn:focus {
    box-shadow: none;
}

.market_coin {
    background-color: var(--hideous-pink);
    width: 50%
}

.market_price {
    border: 1px solid var(--border);
    color: var(--hideous-white);
    width: 50%;
    font-size: 16px;
    font-weight: 600;
}

option {
    color: var(--black);
}

.how-work p {
    font-size: 13px;
    color: var(--hideous-grey);
}
.borders {
    border: 1px solid var(--p2p-border);
}


/*________________________________ NEW CSS ____________________________________________*/
.light_image {
        filter: grayscale(1) invert(1);
}
</style>
