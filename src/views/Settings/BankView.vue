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
                                    <form class="row" @submit.prevent="submissionForm()">
                                        <div class="col-md-6 col-lg-6 col-xl-6">
                                       <div class="mb-3">
                                             <div >
                                                <label for="exampleInputEmail1" class="form-label">User Name</label>
                                                <input type="text" v-model="uName" class="form-control shadow-none border-0" placeholder="Enter Name" id="exampleInputEmail1" aria-describedby="emailHelp">
                                            </div>
                                            <div class="text-danger" v-if="v$.uName.$error">{{ v$.uName.$errors[0].$message }}</div>
                                       </div>
                                        </div>
                                        <div class="col-md-6 col-lg-6 col-xl-6">
                                              <div class="mb-3">
                                            <div class="">
                                                <label for="exampleInputEmail1" class="form-label">Account Number</label>
                                                <input type="text" v-model="accNo" class="form-control shadow-none border-0" @keypress="isNumber($event)" placeholder="Enter Account Number" id="exampleInputEmail1" aria-describedby="emailHelp">
                                            </div>
                                            <div class="text-danger" v-if="v$.accNo.$error">{{ v$.accNo.$errors[0].$message }}</div>
                                        </div>
                                        </div>
                                        <div class="col-md-6 col-lg-6 col-xl-6">
                                              <div class="mb-3">
                                            <div class="">
                                                <label for="exampleInputEmail1" class="form-label">Re-Enter Account Number</label>
                                                <input type="text" v-model="reAccno" @keypress=" isNumber($event)" class="form-control shadow-none border-0" placeholder="Re-Enter Account Number" id="exampleInputEmail1" aria-describedby="emailHelp">
                                            </div>
                                            <div class="text-danger" v-if="v$.reAccno.$error">{{ v$.reAccno.$errors[0].$message }}</div>
                                        </div>
                                        </div>
                                        <div class="col-md-6 col-lg-6 col-xl-6">
                                              <div class="mb-3">
                                            <div class="select_box ">
                                                <label for="exampleInputEmail1" class="form-label">Nationality</label>
                                                <select class="form-select shadow-none border-0" aria-label="Default select example" v-model="nationl" @change="getState()">
                                                    <option selected value="">Choose...</option>
                                                    <option v-for="(dat,index) in Country" :key="index" :value="dat.country">
                                                        {{dat.country}}
                                                    </option>

                                                </select>
                                            </div>
                                            <div class="text-danger" v-if="v$.nationl.$error">{{ v$.nationl.$errors[0].$message }}</div>
                                        </div>
                                        </div>

                                        <div class="col-md-6 col-lg-6 col-xl-6" v-if="nationl">
                                              <div class="mb-3">
                                            <div class="select_box ">
                                                <label for="exampleInputEmail1" class="form-label" >State</label>
                                                <select class="form-select shadow-none border-0" @change="showError()" aria-label="Default select example" v-model="state">
                                                    <option selected value="">choose</option>
                                                    <option :value="st" v-for="(st ,index) in sateedata" :key="index">
                                                        {{st}}
                                                    </option>
                                                </select>
                                            </div>
                                             <div><span>{{this.error}}</span></div>
                                            <div class="text-danger" v-if="v$.state.$error">{{ v$.state.$errors[0].$message }}</div>
                                        </div>
                                        </div>

                                        <div class="col-md-6 col-lg-6 col-xl-6">
                                              <div class="mb-3">
                                            <div class="">
                                                <label for="exampleInputEmail1" class="form-label">IFSC Code</label>
                                                <input type="text" v-model="ifsc" class="form-control shadow-none border-0" placeholder="IFSC Code" id="exampleInputEmail1" aria-describedby="emailHelp">
                                            </div>
                                            <div class="text-danger" v-if="v$.ifsc.$error">{{ v$.ifsc.$errors[0].$message }}</div>
                                        </div>
                                        </div>
                                        <div class="col-md-6 col-lg-6 col-xl-6">
                                              <div class="mb-3">
                                            <div class="select_box ">
                                                <label for="exampleInputEmail1" class="form-label">Account Type</label>
                                                <select class="form-select shadow-none border-0" aria-label="Default select example" v-model="bankType">
                                                    <option value="" selected>choose</option>
                                                    <option value="saving">saving</option>
                                                    <option value="current">current</option>
                                                    <option value="joined">joined</option>
                                                </select>
                                            </div>
                                            <div class="text-danger" v-if="v$.bankType.$error">{{ v$.bankType.$errors[0].$message }}</div>
                                        </div>
                                        </div>
                                        <div class="col-md-12 col-lg-12 col-xl-12">
                                            <div class="btn_save text-center">
                                                 <button type="button" class="btn setting_btn shadow-none my-4" v-if="loading">
                                                        <div class="d-flex justify-content-center">
                                                            <div class="spinner-border spinner-border-sm" role="status">
                                                                <span class="visually-hidden">Loading...</span>
                                                            </div>
                                                        </div>
                                                 </button>
                                                 <button type="submit" class="btn setting_btn shadow-none my-4" v-else>submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <!--******* form end ***********-->
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                    <div class="accordion-item  mb-3" v-for="(acc,index) in getBankdetalis" :key="index">
                                        <h2 class="accordion-header" id="flush-headingOne">
                                            <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" :data-bs-target="'#flush-collapseOne'+index" aria-expanded="false" aria-controls="flush-collapseOne">
                                                <div class=" reverse d-flex justify-content-between  w-100">
                                                    <div>Your Bank Account No:>::= {{acc.account_number}}</div>
                                                    <div class="text-capitalize"><span class="badge rounded-pill  me-2">{{acc.verify_status}}</span></div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div :id="'flush-collapseOne'+index" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">
                                                <div class="detail_box">
                                                    <div class="detail_heading d-flex justify-content-between align-items-center ">
                                                        <div>
                                                            <h5 class="mb-0">Your bank account details for IMPS payments</h5>
                                                        </div>
                                                        <div>
                                                            <button type="button" class="btn btn_remove shadow-none border-0 " @click="deletAcoount(acc.id)">Remove</button>
                                                        </div>
                                                    </div>
                                                    <div class="details_info">
                                                        <div class="details_list d-flex align-items-center  p-2">
                                                            <div class="pe-5 info_user"> <label for="exampleInputEmail1" class="form-label">Bank Account:</label></div>
                                                            <div class="ms-5 info_user">
                                                                <p class="mb-0">
                                                                    {{acc.account_number}}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="details_list d-flex align-items-center p-2">
                                                            <div class="pe-5 info_user"><label for="exampleInputEmail1" class="form-label">IFSC Code/Swift Code</label></div>
                                                            <div class="ms-1 info_user">
                                                                <p class="mb-0"> {{acc.ifsc_code}}</p>
                                                            </div>
                                                        </div>
                                                        <div class="details_list d-flex align-items-center border-bottom-0 p-2">
                                                            <div class="pe-5 info_user"><label for="exampleInputEmail1" class="form-label">Account Type</label></div>
                                                            <div class="ms-5 info_user">
                                                                <p class="mb-0"></p>
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
import useVuelidate from '@vuelidate/core'
import {
    required,
    minLength,
    maxLength,
    helpers,
    sameAs
} from '@vuelidate/validators'
import ApiClass from "@/api/api"
export default {
    name: 'BankView',
    components: {
        SettingLayout
    },

    setup() {
        return {
            v$: useVuelidate()
        }
    },

    data() {
        return {
            loading:false,
            Country: [],
            sateedata: [],
            getBankdetalis: [],
            uName: "",
            accNo: "",
            reAccno: "",
            nationl: "",
            ifsc: "",
            bankType: "",
            state: "",
             error:""

        }

    },
    validations() {
        return {
            uName: {
                required: helpers.withMessage("User Name must Be required!", required),
                maxLength: helpers.withMessage("User Name Maximum 20 Character!", maxLength((20))),
                minLength: helpers.withMessage("User Name Minimum 3 Character!", minLength((3)))
            },
            accNo: {
                required: helpers.withMessage("Account Must Be Required!", required),
                minLength: helpers.withMessage("Account Number Must be Minimum 9 digits!", minLength((9))),
                maxLength: helpers.withMessage("Account Number Must be Maximum 20 digits!", maxLength((20))),
                Reegex: helpers.withMessage("Account Should be Number Only!", (value) => /^[0-9]+$/.test(value))
            },

            reAccno: {
                required: helpers.withMessage("Re-account Number Must Be Required!", required),
                sameAs: helpers.withMessage("Re-Enter Account Number Does not match!", sameAs(this.accNo))
            },
            nationl: {
                required: helpers.withMessage("Nationlity is Required!", required)
            },
            ifsc: {
                required: helpers.withMessage("IFSE code is required", required),
                Regex: helpers.withMessage("IFSC Code Should Be Character and Number!", (value) => /^[a-z\d\-_\s]+$/i.test(value)),
                  minLength:helpers.withMessage("IFSC code Minimum 8 Character!",minLength((8))),
                   maxLength:helpers.withMessage("IFSC code Maximum 11 Character!",maxLength((11)))

            },
            bankType: {
                required: helpers.withMessage("Choose Your Bank Type!", required)
            },
            state: {
                required: helpers.withMessage("State is required!!", required)
            }

        }
    },

    methods: {
        async submissionForm() {
            const abc = await this.v$.$validate()
            console.log("lslslslslsl", await this.v$.$validate())
            if (!abc) {
                return
            }

            var formData = new FormData();
            formData.append("alias", this.uName);
            formData.append("account_number", this.accNo);
            formData.append("confirm_account_number", this.reAccno);
            formData.append("country",this.nationl);
            formData.append("ifsc_code", this.ifsc);
            formData.append("state", this.state);
            formData.append("account_type", this.bankType);
            this.loading=true;
            var response = await ApiClass.postRequest("userbanks/create", true, formData)
                
            // console.log("bank api", response)
            if (response ?.data?.status_code == 1) {
                this.loading=false;
                // this.success(response.data.message)
                this.restForm() 
             }
            if (response ?.data?.status_code == 0) {
                this.loading=false;
                return this.failed(response.data.message)
            }
            this.getBank()
        },
         async getBank() {
            let response = await ApiClass.getRequest("userbanks/get", true);
            if (response?.data?.status_code == 1) {
                this.getBankdetalis = response.data.data; 
            }
            if (response?.data?.status_code== 0) {
                return this.failed(response.data.message)
            }

            //  console.log("bank detalis>>>>>",bnkdetails)
            // console.log("get bank details", response)
        },

        async getCountry() {
            let response1 = await ApiClass.getNodeRequest("dashboard/get-country", true);
            this.Country = response1.data.data.countries;
            //  console.log("contry name",cntryname)
            //   console.log("get country",response1)
            // this.getState();
        },
        async getState() {
            //  let response = await ApiClass.getNodeRequest("dashboard/get-state?country=Afghanistan", true);
            let res = await ApiClass.getNodeRequest("dashboard/get-state?country=" + this.nationl, true);
            this.sateedata = res.data.data.states;
            //   console.log("sklsllls",this.sateedata)
            //   console.log("get state",res);
        },
        async deletAcoount(id) {
            let response = await ApiClass.deleteRequest("userbanks/delete/" + id, true)
            console.log("delete account", response);
            if (response ?.data?.status_code == 1) {
                //  this.success(response.data.message)
                   this.getBank()
            }
            if (response?.data?.status_code == 0) {
                return this.failed(response.data.message)
            }
        },

        restForm() {
            this.uName = this.accNo = this.reAccno  = this.nationl = this.ifsc = this.state = this.bankType = "";
            this.v$.$reset();
        },

             isNumber: function(evt) {
                      evt = (evt) ? evt : window.event;
                     var charCode = (evt.which) ? evt.which : evt.keyCode;
                      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                      evt.preventDefault();
                 } else {
                      return true;
                    }
           }
        
       
    },

    mounted() {
        this.getBank();
        this.getCountry();
        // this.deletAcoount()
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

    .reverse {
        flex-direction: column;
    }
}
</style>
