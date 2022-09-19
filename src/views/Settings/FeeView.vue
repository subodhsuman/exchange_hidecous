<template>
<div>
    <SettingLayout>
        <section class="setting_page">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-10 col-xl-9">
                        <div class="fee_box">
                            <div class="setting_head p-3 d-flex  justify-content-between align-items-center">
                                <div>
                                    <h6 class="mb-0">FEE DETAIL</h6>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input shadow-none" v-model="fee_by_lbm" @change="feeUpdate()" type="checkbox" role="switch" id="flexSwitchCheckChecked">
                                </div>
                            </div>
                            <div class="setting_content p-5">
                                <div class="row align-items-start column_reverse">
                                    <div class="col-md-12 col-lg-12 col-xl-7">
                                        <div class="fee_detail">
                                            <h6>Pay trading fees with Lovely Exchange</h6>
                                            <p class="mb-0">Enable this option to pay trading fees with:</p>
                                            <ul class="ps-0">
                                                <li>1. Lovely Exchange you buy from the exchange. </li>
                                                <li>2. Unlock Lovely Exchange balanced reserved for trading fees. </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-12 col-xl-5">
                                        <div class="p-3 fee_discount">
                                            <p><span>Note:</span> You'll get 50% discount if you pay fees via lovely exchange.</p>
                                        </div>
                                    </div>
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
import ApiClass from "@/api/api"
export default {
    name: 'FeeView',
    components: {
        SettingLayout
    },

    data() {
        return {
            fee_by_lbm:"",
        }
    },
    methods: {

        async feeUpdate() {
              let data = {
                fee_by_lbm: this.fee_by_lbm,
            }
            let response = await ApiClass.postRequest("fee_by_lbm/update",true,data);
              if(response?.data?.status_code==0)
              {
                 return this.failed(response.data.message)
              }
               if(response?.data?.status_code==1)
              {
                //  return this.success(response.data.message)
              }
              
            // console.log("fee update",response)
            // console.log("data value",data)
        },
     
    },

    // mounted() {
    //     this.feeUpdate()
    // }

}
</script>

<style scoped>
.form-check-input:checked {
    background-color: var(--hideous-pink);
    border: unset;
}

.fee_detail h6 {
    color: var(--hideous-pink);
}

.fee_detail p,
.fee_detail ul li {
    color: var(--hideous-white);
    font-size: 14px;
    list-style: none;
}

.fee_discount {
    background-color: var(--hideous-fee-bg);
    border-radius: 5px;
}

.fee_discount p {
    color: var(--hideous-white);
    font-size: 14px;
}

.fee_discount span {
    color: var(--hideous-pink);
    font-size: 14px;
}

@media all and (min-width: 992px) and (max-width: 1199px) {
    .setting_content {
        padding: 20px !important;
    }

    .fee_discount {
        padding: 10px !important;
    }

    .column_reverse {
        flex-direction: column;
    }

}

@media all and (min-width: 768px) and (max-width: 991px) {
    .setting_content {
        padding: 20px !important;
    }

    .fee_discount {
        padding: 10px !important;
    }

    .column_reverse {
        flex-direction: column;
    }
}

@media all and (min-width: 320px) and (max-width: 767px) {
    .setting_content {
        padding: 20px !important;
    }

    .fee_discount {
        padding: 10px !important;
    }
}
</style>
