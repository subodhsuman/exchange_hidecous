<template>
<div>
    <div class="modal fade" id="depositModal" tabindex="-1" aria-labelledby="depositModalLabel" aria-hidden="true">
        <div class="modal-dialog   modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <div class="text-center text-white">
                        <h5 class="modal-title" id="depositModalLabel"> DEPOSIT</h5>
                    </div>
                    <div>
                        <button type="button" class="btn-close   " data-bs-dismiss="modal" aria-label="Close"> </button>
                        <!-- <img src="@/assets/images/icons/circle-x.svg" alt=""> -->
                    </div>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <ul class="nav border-yellow nav-pills nav-fill mb-4" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-bep-tab" data-bs-toggle="pill" data-bs-target="#pills-bep" type="button" role="tab" aria-controls="pills-bep" aria-selected="true">BEP 20</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-erc-tab" data-bs-toggle="pill" data-bs-target="#pills-erc" type="button" role="tab" aria-controls="pills-erc" aria-selected="false">ERC 20</button>
                                </li>

                            </ul>
                        </div>
                        <div class="col-md-12">
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane show active " id="pills-bep" role="tabpanel" aria-labelledby="pills-bep-tab">
                                    <form>
                                        <div class="row justify-content-center">
                                            <div class="col-12">
                                                <label for="address" class="form-label text-white">Wallet Address</label>
                                                <div class="input-group form-cont mb-3">
                                                    <input type="text" class="form-control" placeholder="TBxTg48Y9ZRajLQpe9WDY9jYBWTANWSp" id="address" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                    <span class="input-group-text" id="basic-addon2"> <button type="button" class="copy_btn "> <img src="@/assets/images/icons/copypaste.svg" alt="icon"> COPY</button> </span>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="qr_code text-center mb-3">
                                                    <h6 class="text-white">Scan Qr Code</h6>
                                                    <img src="../../assets/images/qr-code.png" class="img-fluid" alt="icon">
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="min_deposit mb-2">
                                                    <p>Min Deposit : 0 BEP 20</p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">

                                                <div class="warning_content">
                                                    <div class="head">
                                                        <img src="../../assets/images/icons/warning.svg" class="img-fluid me-2" alt=""><span>Warning</span>
                                                        <hr class="mt-2 text-warning">
                                                    </div>
                                                    <ul>
                                                        <li class="mb-2">Send Only Using The Binance (BEP20) Network. Using Any Other Network Will Result In A Loss Of Funds.</li>
                                                        <li class="mb-2">Deposit Only BEP To This Deposit Address. Depositing Any Other Asset Will Result In A Loss Of Funds</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="tab-pane " id="pills-erc" role="tabpanel" aria-labelledby="pills-erc-tab">
                                    <form>
                                        <div class="row justify-content-center">
                                            <div class="col-12">
                                                <label for="address" class="form-label text-white">Wallet Address</label>
                                                <div class="input-group form-cont mb-3">
                                                    <input type="text" class="form-control" placeholder="TBxTg48Y9ZRajLQpe9WDY9jYBWTANWSp" id="address" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                    <span class="input-group-text" id="basic-addon2"> <button type="button" class="copy_btn "> <img src="@/assets/images/icons/copypaste.svg" alt="icon"> COPY</button> </span>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="qr_code text-center mb-3">
                                                    <h6 class="text-white">Scan Qr Code</h6>
                                                    <img src="../../assets/images/qr-code.png" class="img-fluid " alt="">
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="min_deposit mb-2">
                                                    <p class="">Min Deposit : 0 ERC 20</p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">

                                                <div class="warning_content">
                                                    <div class="head">
                                                        <img src="../../assets/images/icons/warning.svg" class="img-fluid me-2" alt=""><span>Warning</span>
                                                        <hr class="text-warning mt-2">
                                                    </div>
                                                    <ul>
                                                        <li class="mb-2">Send Only Using The Ethereum (ERC 20) Network. Using Any Other Network Will Result In A Loss Of Funds.</li>
                                                        <li class="mb-2">Deposit Only ETH To This Deposit Address. Depositing Any Other Asset Will Result In A Loss Of Funds</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
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
    name:'DepositModal'
}
</script>
<style scoped>
/* Modal css */
.modal-content {
    background-color: var(--modal-bg);
}
.modal-header {
    background-color: var(--modal-header);
    box-shadow: var(--m-shadow);
}
.btn-close {
    width: 10px;
    height: 10px;
    background: transparent url(../../assets/images/icons/circle-x.svg);
    opacity: 1;
}

.modal-header h5 {
    font-size: 16px;
    font-weight: 400;
    color: var(--pink-hideous);
}

.transaction_fees p,
.withdraw_limit li {
    color: var(--hideous-pink);
    font-weight: 600;
    font-size: 13px;
}
.min_deposit p {
    color: var(--hideous-white);
    font-weight: 400;
    font-size: 12px !important;
}

.setting-btn {
    padding: 7px 7px;
    border-radius: 22px;
    background-color: var(--hideous-pink);
    border: 1px solid var(--hideous-pink);
    color: var(--white);
    border-radius: 3px
}

/* warning content css */
.head span {
    color: var(--red);
    font-weight: 600;
}

.warning_content ul {
    color: var(--hideous-white);
}

/* modal form select css  */
.form-select {
    font-size: 12px;
    color: var(--hideous-white);
    padding: 11px;
    background-color: var(--hideous-black);
    border: 1px solid var(--hideous-black);
    background-size: 16px 16px;
    background-image:url(../../assets/images/icons/anlge-down.svg);
}
.modal .form-control {
    color: var(--hideous-white);
    background-color: var(--modal-input);
    border: 1px solid var(--modal-input);
    font-size: 14px;
}

.modal-body label,
.modal-body p,
.warning_content li {
    font-size: 14px;
}

.modal .input-group-text {
    padding: 0;
    background-color: var(--hideous-pink);
    border: 1px solid var(--hideous-pink);
}

.modal .nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    background-color: var(--hideous-pink);
    
}

.modal .nav-link {
    color: var(--hideous-pink);
    border: 1px solid var(--hideous-pink);
    border-radius: 0;
    
}

.modal .nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
   color: var(--white);
}

.modal .copy_btn {
    color: var(--hideous-white);
    cursor: pointer;
    background-color: var(--hideous-pink);
    border: 1px solid var(--hideous-pink);
    padding: 0.375rem 0.75rem;
    font-size: 12px;

}
.btn-close:focus {
    box-shadow: none;
}
</style>
