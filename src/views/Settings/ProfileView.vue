<template>
<div>
    <SettingLayout>
        <section class="setting_page">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-10 col-xl-9">
                        <div class="profile_box">
                            <div class="setting_head p-3">
                                <h6 class="mb-0">PROFILE DETAIL</h6>
                            </div>
                            <div class="setting_content p-4">
                                <form class="row justify-content-center">
                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Profile Detail</label>
                                            <input type="text" class="form-control shadow-none border-0" placeholder="Enter your name" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                    </div>
                                    <!--******** profile detail ********-->

                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
                                            <input type="text" class="form-control shadow-none border-0" placeholder="Enter your mobile number" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                    </div>
                                    <!--*********** mobile number **************-->

                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Email ID</label>
                                            <input type="email" class="form-control shadow-none border-0" placeholder="admin@mail.com" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                    </div>
                                    <!--************** email id *****************-->

                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Status</label>
                                            <input type="text" class="form-control shadow-none border-0" placeholder="Active" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                    </div>
                                    <!--******************** status*************** -->

                                    <div class="col-md-5 col-lg-5 col-xl-5">
                                        <div class="btn_save text-center">
                                            <button   type="submit" class="btn setting_btn shadow-none my-3">Save</button>
                                            <button type="submit" class="btn setting_btn shadow-none my-3" v-if="loading" >
                                                <div class="d-flex justify-content-center">
                                                    <div class="spinner-border" role="status">
                                                        <span class="visually-hidden">Loading...</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <!-- ****************save btn************** -->
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
export default {
    name: 'ProfileView',
    components: {
        SettingLayout
    }
}
</script>

<style scoped>
@media all and (min-width: 1200px) and (max-width: 1399px) {
    .setting_content {
        padding: 20px 30px !important;
    }
}

@media all and (min-width: 992px) and (max-width: 1199px) {
    .setting_content {
        padding: 20px 20px !important;
    }
}

@media all and (min-width: 768px) and (max-width: 991px) {
    .setting_content {
        padding: 20px 20px !important;
    }
}

@media all and (min-width: 320px) and (max-width: 767px) {
    .setting_content {
        padding: 20px 10px !important;
    }
}
</style>
