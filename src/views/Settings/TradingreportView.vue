<template>
<div>
    <SettingLayout>
        <section class="setting_page">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-10 col-xl-9">
                        <div class="trading_box">
                            <div class="setting_head p-3">
                                <h6 class="mb-0">DOWNLOAD TRADING REPORT</h6>
                            </div>
                            <div class="setting_content p-4">
                                <form class="row  justify-content-center">
                                    <div class="col-md-12 col-lg-12 col-xl-7 col-xxl-6">
                                        <div class="form_box p-3">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">From Date</label>
                                                <input type="date" class="form-control shadow-none border-0" id="exampleInputEmail1" aria-describedby="emailHelp">
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">To Date</label>
                                                <input type="date" class="form-control shadow-none border-0" id="exampleInputEmail1" aria-describedby="emailHelp">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-12 col-xl-5 col-xxl-6">
                                        <div class="report_content p-3">
                                            <h6>The report will include:</h6>
                                            <ul class="ps-0">
                                                <li>1. Exchange Trades</li>
                                                <li>2. P2P Trades</li>
                                                <li>3. STF Trades</li>
                                                <li>4. Current coin balance</li>
                                                <li>5. Deposit and withdrawals</li>
                                                <li>6. Ledger History</li>
                                                <li>7. Airdrops and other distributions</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-5 col-lg-5 col-xl-5">
                                        <div class="btn_save text-center">
                                            <button type="submit"  class="btn setting_btn shadow-none my-3" >Save</button>
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
    name: 'TradingreportView',
    components: {
        SettingLayout
   
    }
}
</script>

<style scoped>
::-webkit-calendar-picker-indicator {
    filter: invert(40%) sepia(76%) saturate(5828%) hue-rotate(313deg) brightness(91%) contrast(87%);
}

.report_content h6 {
    color: var(--hideous-pink);
}

.report_content ul li {
    color: var(--hideous-white);
    font-size: 14px;
    list-style: none;
}

@media all and (min-width: 992px) and (max-width: 1199px) {
    .setting_content {
        padding: 0 !important;
    }
}

@media all and (min-width: 768px) and (max-width: 991px) {
    .setting_content {
        padding: 0 !important;
    }
}

@media all and (min-width: 320px) and (max-width: 767px) {
    .setting_content {
        padding: 0 !important;
    }
}
</style>
