<template>
<div>
    <SettingLayout>
        <section class="setting_page">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-10 col-xl-9">
                        <div class="support_box">
                            <div class="setting_head p-3">
                                <h6 class="mb-0">CONTACT SUPPORT </h6>
                            </div>
                            <div class="setting_content p-4">
                                <div class="mb-2">
                                    <h6>You control your data, and we respect that.</h6>
                                    <p class="mb-0">For requests regarding:</p>
                                    <ul class="ps-0 mb-2">
                                        <li> 1. copy of your data</li>
                                        <li>2. Data export</li>
                                        <li>3. Data correction</li>
                                    </ul>
                                    <p>
                                        Please reach out to us, our team will be happy to hlp you
                                    </p>
                                </div>
                                <div class="btn_support d-flex ">
                                  <router-link to="/setting/ticketlist"><button type="button" class="btn setting_btn shadow-none me-4">View Previous Ticket</button></router-link> 
                                   <router-link to="/setting/contactus"><button type="button" class="btn setting_btn shadow-none">Contact Us</button></router-link> 
                                </div>
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
    name: 'SupportView',
    components: {
        SettingLayout
    }
}
</script>

<style scoped>
.setting_content h6 {
    color: var(--hideous-pink);
}

.setting_content p,
.setting_content ul li {
    color: var(--hideous-white);
    font-size: 14px;
    list-style: none;
}

@media all and (min-width: 1200px) and (max-width: 1399px) {
    .setting_btn {
        padding: 6px 20px !important;
    }
}

@media all and (min-width: 992px) and (max-width: 1199px) {
    .setting_btn {
        padding: 6px 20px !important;
    }
}

@media all and (min-width: 768px) and (max-width: 991px) {

    .setting_btn {
        padding: 6px 20px !important;
        margin-bottom: 10px;
    }
}

@media all and (min-width: 320px) and (max-width: 767px) {
    .btn_support {
        flex-direction: column;
    }

    .setting_content {
        padding: 20px !important;
    }

    .setting_btn {
        padding: 6px 20px !important;
        margin-bottom: 10px;
    }
}
</style>
