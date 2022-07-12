<template>
<div>
    <SettingLayout>
        <section class="setting_page">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-10 col-xl-9">
                        <div class="kyc_setting_box">
                            <div class="setting_head p-3">
                                <h6 class="mb-0">KYC SETTINGS</h6>
                            </div>
                            <div class="setting_content p-4">
                                <form class="row">
                                    <h5>Basic Details:</h5>
                                    <div class="col-md-4 col-lg-4 col-xl-4">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">First Name</label>
                                            <input type="text" class="form-control shadow-none border-0" placeholder="Name" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                    </div>
                                    <!--****** first name *****-->
                                    <div class="col-md-4 col-lg-4 col-xl-4">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Middle Name</label>
                                            <input type="text" class="form-control shadow-none border-0" placeholder="Middle Name" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                    </div>
                                    <!--****** middle name *****-->
                                    <div class="col-md-4 col-lg-4 col-xl-4">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Last Name</label>
                                            <input type="text" class="form-control shadow-none border-0" placeholder="Last Name" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                    </div>
                                    <!--****** last name *****-->
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
                                    <!--****** nationality *****-->
                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Date Of Birth</label>
                                            <input type="date" class="form-control shadow-none border-0" placeholder="Last Name" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                    </div>
                                    <!--****** date of birth *****-->
                                    <div class="col-md-12 col-lg-12 col-xl-12">
                                        <div class="mb-4">
                                            <label for="exampleInputEmail1" class="form-label">Address</label>
                                            <div class="form-floating">
                                                <textarea class="form-control shadow-none border-0 py-1 px-2" placeholder="Enter Address" id="floatingTextarea2" style="height: 100px"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <!--****** address *****-->
                                    <hr>
                                    <h5>Identify Verification:</h5>
                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                        <div class="select_box mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Document Type</label>
                                            <select class="form-select shadow-none border-0" aria-label="Default select example">
                                                <option selected>choose</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!--****** document type *****-->
                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                        <div class="select_box mb-4">
                                            <label for="exampleInputEmail1" class="form-label">Document Number</label>
                                            <input type="text" class="form-control shadow-none border-0" placeholder="Document number" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                    </div>
                                    <!--****** document number *****-->
                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                        <div class="select_box mb-4">
                                            <label for="exampleInputEmail1" class="form-label">Upload Front</label>
                                            <ChooseImageComponent />
                                        </div>
                                    </div>
                                    <!--****** upload front *********-->
                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                        <div class="select_box mb-4">
                                            <label for="exampleInputEmail1" class="form-label">Upload Back</label>
                                            <ChooseImageComponent />
                                        </div>
                                    </div>
                                    <!--****** upload back *********-->
                                    <hr>
                                    <h5>PAN Card Verification</h5>
                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                        <div class="select_box mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Document Type</label>
                                            <select class="form-select shadow-none border-0" aria-label="Default select example">
                                                <option selected>PAN Card</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!--****** document type *****-->
                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                        <div class="select_box mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Document Number</label>
                                            <input type="text" class="form-control shadow-none border-0" placeholder="Document number" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                    </div>
                                    <!--****** document number*****-->
                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                        <div class="select_box mb-4">
                                            <label for="exampleInputEmail1" class="form-label">Upload Front</label>
                                            <ChooseImageComponent />
                                        </div>
                                    </div>
                                    <!--****** upload front *********-->

                                    <div class="col-md-12 col-lg-12 col-xl-12">
                                        <div class="btn_save text-center">
                                            <button type="submit" class="btn setting_btn shadow-none my-4">Save</button>
                                            <button type="submit" class="btn setting_btn shadow-none my-4" v-if="loading">
                                                <div class="d-flex justify-content-center">
                                                    <div class="spinner-border" role="status">
                                                        <span class="visually-hidden">Loading...</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                    <!--****** save btn*****-->
                                </form>
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
import ChooseImageComponent from '@/components/Setting/ChooseImageComponent.vue'
export default {
    name: 'KycsettingView',
    components: {
        SettingLayout,
        ChooseImageComponent
    }
}
</script>

<style scoped>
.setting_content h5 {
    font-size: 15px;
    font-weight: 600;
    color: var(--hideous-white);
}

.setting_content hr {
    color: var(--hideous-text-gray);
}

.setting_content .form-select {
    background-color: var(--hideous-modal-input);
    border-radius: 5px;
    color: var(--hideous-text-gray);
    font-size: 14px;
}

::-webkit-calendar-picker-indicator {
    filter: invert(40%) sepia(76%) saturate(5828%) hue-rotate(313deg) brightness(91%) contrast(87%);
}

@media all and (min-width: 1200px) and (max-width: 1399px) {}

@media all and (min-width: 992px) and (max-width: 1199px) {}

@media all and (min-width: 768px) and (max-width: 991px) {
    .setting_content {
        padding: 20px !important
    }
}

@media all and (min-width: 320px) and (max-width: 767px) {
    .setting_content {
        padding: 15px !important
    }
}
</style>
