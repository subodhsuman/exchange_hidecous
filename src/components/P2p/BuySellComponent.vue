<template>
<div>
    <div class="exchange-box mb-xl-0 mb-3">

        <!-- *********** MAIN TAB *********** -->
        <ul class="nav nav-pills mb-0 d-flex justify-content-end nav-fill" id="pills-tab" role="tablist">
            <li class="nav-item buy" role="presentation">
                <button class="nav-link  active" id="pills-buy-tab" data-bs-toggle="pill" data-bs-target="#pills-buy" type="button" role="tab" aria-controls="pills-buy" aria-selected="true">Buy</button>
            </li>
            <li class="nav-item sell" role="presentation">
                <button class="nav-link " id="pills-sell-tab" data-bs-toggle="pill" data-bs-target="#pills-sell" type="button" role="tab" aria-controls="pills-sell" aria-selected="false">Sell</button>
            </li>
        </ul>
        <!-- *********** TAB CONTENT *********** -->
        <div class="tab-content  border-top-0 p-3 pb-0" id="pills-tabContent">
            <!-- *********** SELL TAB CONTENT *********** -->
            <div class="tab-pane fade show active" id="pills-buy" role="tabpanel" aria-labelledby="pills-buy-tab">
                <form>
                    <!-- AT PRICE -->
                    <label for="exampleInputEmail1" class="form-label mb-1">Price</label>
                    <div class="input-group mb-3 p-1 ">
                        <input type="text" class="form-control" placeholder="0 " aria-label="Username" aria-describedby="basic-addon1">
                        <span class="input-group-text " id="basic-addon1"> BTC </span>
                    </div>
                    <!-- AMOUNT -->
                    <label for="exampleInputEmail1" class="form-label mb-1">Quantity</label>
                    <div class="input-group mb-3 p-1 ">
                        <input type="text" class="form-control" placeholder="0" aria-label="Username" aria-describedby="basic-addon1">
                        <span class="input-group-text " id="basic-addon1"> BTC </span>
                    </div>
                    <!-- TOTAL -->
                    <label for="exampleInputEmail1" class="form-label mb-1">Total</label>
                    <div class="input-group mb-3 p-1 ">
                        <input type="text" class="form-control" placeholder="0" aria-label="Username" aria-describedby="basic-addon1">
                        <span class="input-group-text " id="basic-addon1"> BTC </span>
                    </div>
                    <!-- Accordion -->
                    <div class="accordion accordion-flush mb-3" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header p-2" id="flush-headingOne">
                                <button class="accordion-button w-100 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <p class="ms-3 mb-0"> Add Preffered Buyer (Optional)</p>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body py-2">ENTER XID OF PREFERRED SELLER</div>
                                <div class="input-group  border">
                                    <input type="text" class="form-control" placeholder="Eg:cryptop2p" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                                <div class="acc-btn d-flex align-items-center p-2"> Get Your Own XID! <button type="button" class="btn btn-outline-primary btn-sm ms-2"> Create Now</button> </div>
                                <div class="how_create">
                                    <ul class="mb-0">
                                        <li> 1. Create & Share Your XID In Crypto Groups.</li>
                                        <li> 2. Get Matched Instantly With Sellers.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- BUTTON -->
                    <div class="d-grid gap-2">
                        <!-- button -->
                        <button class="buy-btn  p-2" type="button" v-if="loading">Buy</button>
                        <!-- loading -->
                        <button type="button" class="buy-btn p-2" disabled v-else>
                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    </div>

                </form>

                <!-- ul list -->
                <div class="payment-details">
                    <ul class="ps-0 mt-1 mb-0 d-flex align-items-center justify-content-between">
                        <li>
                            <p class="mb-0"> Fee 0.00%</p>
                        </li>
                        <li> <span>Add/Edit Payment Details</span> </li>
                    </ul>
                </div>

            </div>
            <!-- *********** SELL TAB CONTENT*********** -->
            <div class="tab-pane fade" id="pills-sell" role="tabpanel" aria-labelledby="pills-sell-tab">
                <form>
                    <!-- AT PRICE -->
                    <label for="exampleInputEmail1" class="form-label mb-1">Price</label>
                    <div class="input-group mb-3 p-1 ">
                        <input type="text" class="form-control" placeholder="0 " aria-label="Username" aria-describedby="basic-addon1">
                        <span class="input-group-text " id="basic-addon1"> BTC </span>
                    </div>
                    <!-- AMOUNT -->
                    <label for="exampleInputEmail1" class="form-label mb-1">Quantity</label>
                    <div class="input-group mb-3 p-1 ">
                        <input type="text" class="form-control" placeholder="0" aria-label="Username" aria-describedby="basic-addon1">
                        <span class="input-group-text " id="basic-addon1"> BTC </span>
                    </div>
                    <!-- TOTAL -->
                    <label for="exampleInputEmail1" class="form-label mb-1">Total</label>
                    <div class="input-group mb-3 p-1 ">
                        <input type="text" class="form-control" placeholder="0" aria-label="Username" aria-describedby="basic-addon1">
                        <span class="input-group-text " id="basic-addon1"> BTC </span>
                    </div>
                    <!-- Accordion -->
                    <div class="accordion accordion-flush mb-3" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header p-2" id="flush-headingTwo">
                                <button class="accordion-button w-100 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    <p class="ms-3 mb-0"> Add Preffered Buyer (Optional)</p>
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body py-2">ENTER XID OF PREFERRED SELLER</div>
                                <div class="input-group  border">
                                    <input type="text" class="form-control" placeholder="Eg:cryptop2p" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                                <div class="acc-btn d-flex align-items-center p-2"> Get Your Own XID! <button type="button" class="btn btn-outline-primary btn-sm ms-2"> Create Now</button> </div>
                                <div class="how_create">
                                    <ul class="mb-0">
                                        <li> 1. Create & Share Your XID In Crypto Groups.</li>
                                        <li> 2. Get Matched Instantly With Sellers.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                     <div class="d-grid gap-2">
                        <!-- button -->
                        <button class="sell-btn  p-2" type="button" v-if="loading"> Sell </button>
                        <!-- loading -->
                        <button type="button" class="sell-btn p-2" disabled v-else>
                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    </div>

                </form>

                <!-- ul list -->
                <div class="payment-details">
                    <ul class="ps-0 mt-1 mb-0 d-flex align-items-center justify-content-between">
                        <li>
                            <p class="mb-0">Fee 0.00%</p>
                        </li>
                        <li> <span>Add/Edit Payment Details</span> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'BuySellComponent',
    data() {
        return {
            loading: true,
        }
    },

}
</script>

<style scoped>
/*********** Select Form control css ***************/

.form-select {
    width: 130px;
    font-size: 12px;
    font-weight: 500;
    background-image: url('../../assets/images/icons/caret-down.svg');
    background-size: unset;

}

.form-select:focus {
    box-shadow: none;
    border: none;
}

.tab-content {
    border: 1px solid var(--p2p-border);
}

.how_create ul li {
    font-size: 12px;
    color: var(--hideous-white);
}

/*********** Input Group Css ***********/

.input-group-text {
    font-size: 12px;
    font-weight: 400;
    color: var(--white);
    text-align: start;
    background-color: var(--in-group);
    border: none;
}

/*********** Form Control Css ***********/
.form-control {
    font-size: 12px;
    background-color: transparent;
    border: none;
    color: var(--hideous-white);
}

.form-control:focus {
    border-color: none;
    box-shadow: none;
}

/*********** BUTTON Css ***********/

.buy-btn {
    font-weight: 400;
    border: 1px solid transparent;
    font-size: 12px;
    border-radius: 0;
    background-color: var(--green);
    color: var(--white);
}

.sell-btn {
    font-weight: 400;
    border: 1px solid transparent;
    font-size: 12px;
    border-radius: 0;
    background-color: var(--red);
    color: var(--white);
}

.acc-btn {
    color: var(--hideous-white);
    /* background-color: var(--hideous-black); */
    font-size: 14px;

}

.acc-btn .btn-outline-primary {
    color: var(--white);
    border: 2px solid var(--hideous-pink);
    ;
    border-radius: 7px;
    font-weight: 600;
    background: var(--hideous-pink);
    font-size: 14px;
}

.acc-btn .sm-btn {
    padding: 1px 7px;
}

.accordion-item {
    background-color: var(--p2p-1input-bg);
}

.acc-btn .btn-check:focus+.btn,
.btn:focus {
    box-shadow: none;
}

/*********** UL LIST Css ***********/
ul li {
    list-style: none;
}

li p {
    font-weight: 500;
    font-size: 12px;
    color: var(--hideous-white)
}

li span {
    color: var(--hideous-white);
    font-size: 12px;
}

.border {
    border: 1px solid var(--border) !important;
}

/* .border-end {
    border-right: 1px solid var(--inv-light-grey) !important;
} */

/*** accordion ***/
.accordion-button {
    width: 60%;
    padding: 5px;
    font-size: 12px;
    color: var(--inv-black);
    text-align: left;
    background-color: var(--inv-light-grey);
    font-weight: 500;
    border: 0;
}

.accordion-button::after {
    flex-shrink: 0;
    width: 1.25rem;
    height: 1.25rem;
    margin-left: auto;
    content: "";
    background-image: url('@/assets/images/icons/caret-right.svg');
    background-size: 1.25rem;
    position: absolute;
    left: 2px;
}

.accordion-button:focus {
    box-shadow: none;
}

.accordion-button p {
    font-weight: 600;
    color: var(--hideous-pink);
    font-size: 14px;
}

.accordion-button:not(.collapsed)::after {
    background-image: url('@/assets/images/icons/caret-right.svg');
    transform: rotate(90deg);
}

.accordion-body {
    font-size: 14px;
    color: var(--hideous-white);
}

.payment-details li {
    cursor: pointer;
}

.exchange-box .nav-pills .buy .nav-link.active,
.nav-pills .show>.nav-link {
    color: var(--green);
    background-color: transparent;
    border-bottom: 1px solid var(--green);
    border-radius: 0;
}

.exchange-box .nav-pills .sell .nav-link.active,
.nav-pills .show>.nav-link {
    color: var(--red);
    background-color: transparent;
    border-bottom: 1px solid var(--red);
    border-radius: 0;
}

.exchange-box .nav-link {
    color: var(--hideous-grey);
    font-size: 14px;
}

.exchange-box {
    background-color: var(--p2p-bg);
}

ul {
    width: 100%;
}

.nav-fill .nav-item .nav-link,
.nav-justified .nav-item .nav-link {
    width: 100%;
}

.tab-pane label {
    font-size: 12px;
    color: var(--hideous-white);
}

.exchange-box .input-group {
    background: var(--p2p-input-bg);

}

.accordion-header {
    background: var(--p2p-acr);

}
.exchange-box{
    box-shadow: var(--p2p-box-shadow);
backdrop-filter: blur( 8.5px );
border-radius: 2px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
}

/* @media all and (min-width:320px) and (max-width:1399px) {
    .accordion-button {
        width: 78%;
    }

    .input-group-text {
        width: 25%;
    }

}

@media all and (min-width:320px) and (max-width:992px) {
    .input-group-text {
        width: 25%;
    }
} */
</style>
