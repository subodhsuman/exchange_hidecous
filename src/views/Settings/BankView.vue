<template>
<div>
    <SettingLayout>
        <section class="setting_page">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-10 col-xl-9">
                        <div class="bank_box">
                            <div class="setting_head p-3 d-flex justify-content-between align-items-center">
                                <div class="">
                                    <h6 class="mb-0">BANK DETAIL</h6>
                                </div>
                                <div class="btn_add_new">
                                    <button type="button" class="btn btn_add shadow-none " data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> <img src="@/assets/images/icons/plus.svg" alt="icons" class="img-fluid me-2">Add New</button>
                                </div>
                            </div>
                            <div class="setting_content p-4">
                                <div class="collapse" id="collapseExample">
                                    <form class="row justify-content-center">
                                        <div class="col-md-6 col-lg-6 col-xl-6">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Alias</label>
                                                <input type="text" class="form-control shadow-none border-0" placeholder="Enter Name" id="exampleInputEmail1" aria-describedby="emailHelp">
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-6 col-xl-6">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Account Number</label>
                                                <input type="text" class="form-control shadow-none border-0" placeholder="Enter Account Number" id="exampleInputEmail1" aria-describedby="emailHelp">
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-6 col-xl-6">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Re-Enter Account Number</label>
                                                <input type="text" class="form-control shadow-none border-0" placeholder="Re-Enter Account Number" id="exampleInputEmail1" aria-describedby="emailHelp">
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-6 col-xl-6">
                                            <div class="select_box mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Nationality</label>
                                                <select class="form-select shadow-none border-0" aria-label="Default select example">
                                                    <option selected>choose</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-6 col-xl-6">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">IFSC Code</label>
                                                <input type="text" class="form-control shadow-none border-0" placeholder="IFSC Code" id="exampleInputEmail1" aria-describedby="emailHelp">
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-6 col-xl-6">
                                            <div class="select_box mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Account Type</label>
                                                <select class="form-select shadow-none border-0" aria-label="Default select example">
                                                    <option selected>choose</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-5 col-lg-5 col-xl-5">
                                            <div class="btn_save text-center">
                                                <button  type="submit" class="btn setting_btn shadow-none my-3">Save</button>
                                                <button type="submit" class="btn setting_btn shadow-none my-3" v-if="loading">
                                                    <div class="d-flex justify-content-center">
                                                        <div class="spinner-border" role="status">
                                                            <span class="visually-hidden">Loading...</span>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <!--******* form end ***********-->
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                    <div class="accordion-item mb-3">
                                        <h2 class="accordion-header" id="flush-headingOne">
                                         <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                <div class=" reverse d-flex justify-content-between  w-100">
                                                    <div>SBI/Bank Account:142568951254</div>
                                                    <div><span class="badge rounded-pill  me-2">Complete</span></div>
                                                </div>
                                            </button>
                                         </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">
                                                <div class="detail_box">
                                                    <div class="detail_heading d-flex justify-content-between align-items-center mb-3">
                                                        <div>
                                                            <h5 class="mb-0">Your bank account details for IMPS payments</h5>
                                                        </div>
                                                        <div>
                                                            <button type="button" class="btn btn_remove shadow-none border-0 ">Remove</button>
                                                        </div>
                                                    </div>
                                                    <div class="details_info">
                                                        <div class="details_list d-flex align-items-center  p-2">
                                                            <div class="pe-5 info_user"> <label for="exampleInputEmail1" class="form-label">Bank Account:</label></div>
                                                            <div class="ms-5 info_user">
                                                                <p class="mb-0">142568951254</p>
                                                            </div>
                                                        </div>
                                                        <div class="details_list d-flex align-items-center p-2">
                                                            <div class="pe-5 info_user"><label for="exampleInputEmail1" class="form-label">IFSC Code/Swift Code</label></div>
                                                            <div class="ms-1 info_user">
                                                                <p class="mb-0">SBIN0002536</p>
                                                            </div>
                                                        </div>
                                                        <div class="details_list d-flex align-items-center border-bottom-0 p-2">
                                                            <div class="pe-5 info_user"><label for="exampleInputEmail1" class="form-label">Account Type</label></div>
                                                            <div class="ms-5 info_user">
                                                                <p class="mb-0">Saving</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item mb-3">
                                        <h2 class="accordion-header" id="flush-headingTwo">
                                            <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                               <div class=" reverse d-flex justify-content-between w-100">
                                                    <div>SBI/Bank Account:142568951254</div>
                                                    <div><span class="badge rounded-pill  me-2">Pending</span></div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">
                                                <div class="detail_box">
                                                    <div class="detail_heading d-flex justify-content-between align-items-center mb-3">
                                                        <div>
                                                            <h5 class="mb-0">Your bank account details for IMPS payments</h5>
                                                        </div>
                                                        <div>
                                                            <button type="button" class="btn btn_remove shadow-none border-0 ">Remove</button>
                                                        </div>
                                                    </div>
                                                    <div class="details_info">
                                                        <div class="details_list d-flex align-items-center  p-2">
                                                            <div class="pe-5 info_user"> <label for="exampleInputEmail1" class="form-label">Bank Account:</label></div>
                                                            <div class="ms-5 info_user">
                                                                <p class="mb-0">142568951254</p>
                                                            </div>
                                                        </div>
                                                        <div class="details_list d-flex align-items-center p-2">
                                                            <div class="pe-5 info_user"><label for="exampleInputEmail1" class="form-label">IFSC Code/Swift Code</label></div>
                                                            <div class="ms-1 info_user">
                                                                <p class="mb-0">SBIN0002536</p>
                                                            </div>
                                                        </div>
                                                        <div class="details_list d-flex align-items-center border-bottom-0 p-2">
                                                            <div class="pe-5 info_user"><label for="exampleInputEmail1" class="form-label">Account Type</label></div>
                                                            <div class="ms-5 info_user">
                                                                <p class="mb-0">Saving</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item mb-3">
                                        <h2 class="accordion-header" id="flush-headingThree">
                                            <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                               <div class=" reverse d-flex justify-content-between  w-100">
                                                    <div>SBI/Bank Account:142564141254</div>
                                                    <div><span class="badge rounded-pill  me-2">Rejected</span></div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">
                                                <div class="detail_box">
                                                    <div class="detail_heading d-flex justify-content-between align-items-center mb-3">
                                                        <div>
                                                            <h5 class="mb-0">Your bank account details for IMPS payments</h5>
                                                        </div>
                                                        <div>
                                                            <button type="button" class="btn btn_remove shadow-none border-0 ">Remove</button>
                                                        </div>
                                                    </div>
                                                    <div class="details_info">
                                                        <div class="details_list d-flex align-items-center  p-2">
                                                            <div class="pe-5 info_user"> <label for="exampleInputEmail1" class="form-label">Bank Account:</label></div>
                                                            <div class="ms-5 info_user">
                                                                <p class="mb-0">142568951254</p>
                                                            </div>
                                                        </div>
                                                        <div class="details_list d-flex align-items-center p-2">
                                                            <div class="pe-5 info_user"><label for="exampleInputEmail1" class="form-label">IFSC Code/Swift Code</label></div>
                                                            <div class="ms-1 info_user">
                                                                <p class="mb-0">SBIN0002536</p>
                                                            </div>
                                                        </div>
                                                        <div class="details_list d-flex align-items-center border-bottom-0 p-2">
                                                            <div class="pe-5 info_user"><label for="exampleInputEmail1" class="form-label">Account Type</label></div>
                                                            <div class="ms-5 info_user">
                                                                <p class="mb-0">Saving</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- ********user detail end ************-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </SettingLayout>
</div>
</template>

<script>
import SettingLayout from '@/Layout/SettingLayout'
export default {
    name: 'BankView',
    components: {
        SettingLayout
    }
}
</script>

<style scoped>
.btn_add {
    border: 1px solid var(--hideous-pink);
    border-radius: 5px;
    color: var(--hideous-pink);
    font-size: 14px;
    padding: 4px 20px;
}

.btn_remove {
    border-radius: 5px;
    color: var(--hideous-pink);
    font-size: 14px;
    padding: 7px 40px;
    background-color: var(--white);
    font-weight: 600;
}

.setting_content .form-select {
    background-color: var(--hideous-modal-input);
    border-radius: 5px;
    color: var(--hideous-text-gray);
    font-size: 14px;
}

.accordion-item:last-of-type .accordion-button.collapsed,
.accordion-flush .accordion-item .accordion-button {
    border-radius: 5px;
    background-color: var(--hideous-pink);
    color: var(--white);
    font-size: 14px;
    font-weight: 600;
}

.accordion-item {
    background-color: unset;
    border: none;
}

.accordion-body .detail_heading h5 {
    color: var(--hideous-white);
    font-size: 14px;
}

.details_info .details_list {
    border-bottom: 1px solid var(--hideous-setting-border);
}

.details_info .details_list p {
    font-size: 14px;
    color: var(--hideous-white);
}

.details_info {
    border: 1px solid var(--hideous-setting-border);
    border-radius: 5px;
    width: 300px;
}

.accordion-button::after {
    background-image: url('../../assets/images/icons/arrow.svg');
}

.badge {
    height: 20px;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--hideous-badge);
    color: var(--hideous-pink);
}




@media all and (min-width: 320px) and (max-width: 767px) {
    .setting_head {
        flex-direction: column;
    }

    .btn_add_new {
        margin-top: 10px;
    }

    .setting_content,
    .accordion-body {
        padding: 10px !important;
    }

    .detail_heading {
        flex-direction: column-reverse;
        align-items: flex-start !important;
    }

    .btn_remove {
        margin-bottom: 10px;
    }

    .details_info {
        width: 210px;
    }

    .details_list {
        flex-direction: column;
        align-items: flex-start !important;
    }

    .info_user {
        margin: 0 !important;
    }
    .reverse{
        flex-direction: column;
    }
}
</style>
