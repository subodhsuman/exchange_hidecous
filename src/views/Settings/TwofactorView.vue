<template>
<div>
    <SettingLayout>
        <section class="setting_page">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-10 col-xl-9">
                        <div class="two_fact_box">
                            <div class="setting_head p-3">
                                <h6 class="mb-0">TWO FACTOR AUTHENTICATION SETTING</h6>
                            </div>
                            <div class="setting_content p-4">
                                <form class="row justify-content-center">
                                    <div class="col-md-12 col-lg-12">
                                        <div class="form-check d-flex justify-content-between align-items-center px-3 py-4 mb-3">
                                            <label class="form-check-label w-100" for="flexRadioDefault1">
                                                Email Verification <br><span class="badge text-success ps-0">Recommended</span></label>
                                            <input class="form-check-input shadow-none border-0" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-12">
                                        <div class="form-check d-flex justify-content-between align-items-center px-3 py-4 mb-3">
                                            <label class="form-check-label w-100" for="flexRadioDefault2">None <br><span class="badge text-danger ps-0">Not Recommended</span></label>
                                            <input class="form-check-input shadow-none border-0" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-xl-5">
                                        <div class="text-center">
                                            <button type="button" class="btn setting_btn shadow-none my-3">Update</button>
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
    name: 'TwofactorView',
    components: {
        SettingLayout
    }
}
</script>

<style scoped>
.form-check-input:checked[type=radio] {
    background-color: var(--hideous-pink) !important;
    background-image: unset;
    cursor: pointer;
}

.setting_content .form-check {
    background-color: var(--hideous-modal-input);
    border-radius: 5px;
    cursor: pointer;
}

.badge {
    font-size: 14px;
    font-weight: 600;
}

.form-check-label {
    cursor: pointer;
}
.form-check-input {
    background-color: var(--check-white) !important;
    border: 1px solid rgba(0,0,0,.25);
}


@media all and (min-width: 768px) and (max-width: 991px) {
    .setting_content {
        padding: 20px !important
    }
}

@media all and (min-width: 320px) and (max-width: 767px) {
    .setting_content {
        padding: 10px !important
    }
}
</style>
