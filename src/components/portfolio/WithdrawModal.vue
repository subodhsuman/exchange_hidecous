<template>
<div>
    <!-- MODAL-1 -->
    <div class="modal fade" id="withdrawModal" tabindex="-1" aria-labelledby="withdrawModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <div class="text-center">
                        <h5 class="modal-title" id="withdrawModalLabel"> WITHDRAW </h5>
                    </div>
                    <div>
                        <button type="button" class=" btn-close  " data-bs-dismiss="modal" aria-label="Close"> </button>
                        <!-- <img src="@/assets/images/icons/circle-x.svg" alt=""> -->
                    </div>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-cont mb-3">
                                    <label for="select" class="form-label ">NETWORK</label>
                                    <select class="form-select form-control" aria-label="Default select example" id="select">
                                        <option selected>ERC-20</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-cont mb-3">
                                    <label for="destination" class="form-label ">DESTINATION</label>
                                    <input type="text" placeholder="Wallet Address" class="form-control" id="destination">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-cont mb-3">
                                    <label for="amount" class="form-label ">AMOUNT</label>
                                    <input type="text" placeholder="Amount" class="form-control" id="amount">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form_text mb-4">
                                    <p class="text-white">10 ERC</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="transaction_fees mb-4">
                                    <p class="text-end">Transaction Fess: 0.1% ERC</p>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="modal_button d-grid text-center mb-4">
                                    <button type="button" class="setting-btn">Proceed Withdrawal</button>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-12 col-xl-12">
                                <div class="withdraw_limit text-end">
                                    <ul class="list-unstyled">
                                        <li>Min. Withdraw :0 BPE </li>
                                        <li>Max. Withdraw :0 BPE </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </form>
                    <div class="warning_content">
                        <div class="head">
                            <img src="../../assets/images/icons/warning.svg" class="img-fluid me-2" alt=""><span>Warning</span>
                            <hr class="text-warning mt-2">
                        </div>

                        <ul>
                            <li class="mb-2">Please Double-Check The Destination Address.Withdrawal Requests Cannot Be Cancelled After Submission.</li>
                            <li class="mb-2">Withdrawal To Smart Contract Addresses Will Be Lost Forever</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'WithdrawModal'
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

.modal-header h5 {
    font-size: 16px;
    font-weight: 400;
    color: var(--pink-hideous);
}

.transaction_fees p,
.withdraw_limit li,
.min_deposit p {
    color: var(--hideous-pink);
    font-weight: 600;
    font-size: 13px;
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
    color: var(--just-bit-white);
    padding: 11px;
    background-color: var(--just-bit-black);
    border: 1px solid var(--just-bit-black);
    background-size: 16px 16px;
    background-image: url(../../assets/images/icons/anlge-down.svg);

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
    color: var(--just-bit-white);
}

.modal .copy_btn {
    color: var(--hideous-white);
    cursor: pointer;
    background-color: var(--hideous-pink);
    border: 1px solid var(--hideous-pink);
    padding: 0.375rem 0.75rem;
    font-size: 14px;

}

.modal label {
    color: var(--hideous-white);
}

.btn-close {
    width: 10px;
    height: 10px;
    background: transparent url(../../assets/images/icons/circle-x.svg);
    opacity: 1;
}

.btn-close:focus {
    box-shadow: none;
}
</style>
