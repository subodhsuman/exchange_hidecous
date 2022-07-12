<template>
<div>
    <SettingLayout>
        <section class="setting_page">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-10 col-xl-9">
                        <div class="contact_box">
                            <div class="setting_head p-3">
                                <h6 class="mb-0">
                                    <router-link to="/setting/support"><img src="@/assets/images/icons/list-arrow.svg" alt="icons" class="img-fluid"></router-link> Query
                                </h6>
                            </div>
                            <div class="setting_content p-4">
                                <form class="row justify-content-center">
                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Title</label>
                                            <input type="text" class="form-control shadow-none border-0" placeholder="Enter the title" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                        <div class="select_box mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Choose Category</label>
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
                                            <label for="exampleInputEmail1" class="form-label">Name</label>
                                            <input type="text" class="form-control shadow-none border-0" placeholder="Enter the Name" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Email ID</label>
                                            <input type="email" class="form-control shadow-none border-0" placeholder="Enter the Email" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-12 col-xl-12">
                                        <div class="mb-4">
                                            <label for="exampleInputEmail1" class="form-label">Comment</label>
                                            <div class="form-floating">
                                                <textarea class="form-control shadow-none border-0 py-1 px-2" placeholder="Enter Address" id="floatingTextarea2" style="height: 100px"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5 col-lg-5 col-xl-5">
                                        <div class="btn_save text-center">
                                            <button  type="submit" class="btn setting_btn shadow-none">Submit</button>
                                            <button type="submit" class="btn setting_btn shadow-none" v-if="loading">
                                                <div class="d-flex justify-content-center">
                                                    <div class="spinner-border" role="status">
                                                        <span class="visually-hidden">Loading...</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <!--********************** form end *****************-->
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
    name: 'ContactusView',
    components: {
        SettingLayout
    }
}
</script>

<style scoped>
.setting_content .form-select {
    background-color: var(--hideous-modal-input);
    border-radius: 5px;
    color: var(--hideous-text-gray);
    font-size: 14px;
}

@media all and (min-width: 1200px) and (max-width: 1399px) {}

@media all and (min-width: 992px) and (max-width: 1199px) {}

@media all and (min-width: 768px) and (max-width: 991px) {
    .setting_content {
        padding: 20px !important;
    }
}

@media all and (min-width: 320px) and (max-width: 767px) {
    .setting_content {
        padding: 20px !important;
    }
}
</style>
