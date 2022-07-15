<template>
    <div>
        <SettingLayout>
            <section class="setting_page">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12 col-lg-10 col-xl-9">
                            <div v-if="kycstatus==='new'|| kycstatus==='rejected' " class="text-white">
                                <div class="alert-text">
                                    <div class="alert alert-warning text-center" role="alert"
                                        v-if="kycstatus==='rejected'">
                                        <span>Your Kyc is <b>Rejected</b> due to following Reasons :</span><br>
                                        <span class="text-danger text-capitalize">{{ this.msg }}</span>
                                    </div>
                                </div>


                                <div class="kyc_setting_box">
                                    <div class="setting_head p-3">
                                        <h6 class="mb-0">KYC SETTINGS</h6>
                                    </div>
                                    <div class="setting_content p-4">
                                        <form class="row" @submit.prevent="submitForm()">
                                            <h5>Basic Details:</h5>
                                            <div class="col-md-4 col-lg-4 col-xl-4">
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label">First
                                                        Name</label>
                                                    <input type="text" v-model="form.firstName"
                                                        class="form-control shadow-none border-0" placeholder="Name"
                                                        id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                                <div class="text-danger" v-if="v$.form.firstName.$error && hasSubmit">{{
                                                v$.form.firstName.$errors[0].$message }}</div>
                                            </div>
                                            <!--****** first name *****-->
                                            <div class="col-md-4 col-lg-4 col-xl-4">
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label">Middle
                                                        Name</label>
                                                    <input type="text" v-model="mdName"
                                                        class="form-control shadow-none border-0"
                                                        placeholder="Middle Name" id="exampleInputEmail1"
                                                        aria-describedby="emailHelp">
                                                </div>

                                            </div>
                                            <!--****** middle name *****-->
                                            <div class="col-md-4 col-lg-4 col-xl-4">
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label">Last Name</label>
                                                    <input type="text" v-model="form.lastName"
                                                        class="form-control shadow-none border-0"
                                                        placeholder="Last Name" id="exampleInputEmail1"
                                                        aria-describedby="emailHelp">
                                                </div>
                                                <div class="text-danger" v-if="v$.form.lastName.$error && hasSubmit">{{
                                                v$.form.lastName.$errors[0].$message }}</div>
                                            </div>
                                            <!--****** last name *****-->
                                            <div class="col-md-6 col-lg-6 col-xl-6">
                                                <div class="select_box mb-3">
                                                    <label for="exampleInputEmail1"
                                                        class="form-label">Nationality</label>
                                                    <select class="form-select shadow-none border-0"
                                                        aria-label="Default select example" v-model="form.nationality">
                                                        <option selected>choose</option>
                                                        <option :value="val.name" v-for="(val, index) in Country"
                                                            :key="index">
                                                            {{val.name}}
                                                        </option>

                                                    </select>
                                                </div>
                                                <div class="text-danger" v-if="v$.form.nationality.$error && hasSubmit">
                                                    {{ v$.form.nationality.$errors[0].$message }}</div>
                                            </div>
                                            <!--****** nationality *****-->
                                            <div class="col-md-6 col-lg-6 col-xl-6">
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label">Date Of
                                                        Birth</label>
                                                    <input type="date" v-model="form.dob"
                                                        :max="new Date(new Date().setFullYear(new Date().getFullYear() - 15)).toISOString().split('T')[0]"
                                                        class="form-control shadow-none border-0"
                                                        placeholder="Last Name" id="exampleInputEmail1"
                                                        aria-describedby="emailHelp">
                                                </div>
                                                <div class="text-danger" v-if="v$.form.dob.$error && hasSubmit">{{
                                                v$.form.dob.$errors[0].$message }}</div>
                                            </div>
                                            <!--****** date of birth *****-->
                                            <div class="col-md-12 col-lg-12 col-xl-12">
                                                <div class="mb-4">
                                                    <label for="exampleInputEmail1" class="form-label">Address</label>
                                                    <div class="form-floating">
                                                        <textarea v-model="form.address"
                                                            class="form-control shadow-none border-0 py-1 px-2"
                                                            placeholder="Enter Address" id="floatingTextarea2"
                                                            style="height: 100px"></textarea>
                                                    </div>
                                                </div>
                                                <div class="text-danger" v-if="v$.form.address.$error && hasSubmit">{{
                                                v$.form.address.$errors[0].$message }}</div>
                                            </div>
                                            <!--****** address *****-->
                                            <hr>
                                            <h5>Identify Verification:</h5>
                                            <div class="col-md-6 col-lg-6 col-xl-6">
                                                <div class="select_box mb-3">
                                                    <label for="exampleInputEmail1" class="form-label">Please Choose
                                                        only Document Type</label>
                                                    <select class="form-select shadow-none border-0"
                                                        v-model="form.dType" aria-label="Default select example">
                                                        <option selected>choose</option>
                                                        <option value="aadhaar">Aadhaar card</option>
                                                        <option value="driving">Driving Licence</option>
                                                        <option value="voter">Voter Card</option>
                                                        <option value="passport">Passport</option>
                                                    </select>
                                                </div>
                                                <div class="text-danger" v-if="v$.form.dType.$error && hasSubmit">{{
                                                v$.form.dType.$errors[0].$message }}</div>
                                            </div>
                                            <!--****** document type *****-->
                                            <div class="col-md-6 col-lg-6 col-xl-6">
                                                <div class="select_box mb-4">
                                                    <label for="exampleInputEmail1" class="form-label">Please Enter
                                                        Document Type Number</label>
                                                    <input type="text" @keypress="addhar()" v-model="form.docNo"
                                                        class="form-control shadow-none border-0"
                                                        placeholder="Document number" id="exampleInputEmail1"
                                                        aria-describedby="emailHelp">
                                                </div>
                                                <div class="text-danger" v-if="v$.form.docNo.$error && hasSubmit">{{
                                                v$.form.docNo.$errors[0].$message }}</div>
                                            </div>
                                            <!--****** document number *****-->
                                            <div class="col-md-6 col-lg-6 col-xl-6">
                                                <div class="select_box mb-4">
                                                    <label for="exampleInputEmail1" class="form-label">Upload Image
                                                        Front of choose Document</label>
                                                    <ChooseImageComponent v-model="form.adhFront" />
                                                </div>

                                                <div class="text-danger" v-if="v$.form.adhFront.$error && hasSubmit">
                                                    {{v$.form.adhFront.$errors[0].$message}}</div>
                                            </div>
                                            <!--****** upload front *********-->
                                            <div class="col-md-6 col-lg-6 col-xl-6">
                                                <div class="select_box mb-4">
                                                    <label for="exampleInputEmail1" class="form-label">Upload Image Back
                                                        Choose Document </label>
                                                    <ChooseImageComponent v-model="form.adhBack" />
                                                </div>
                                                <div class="text-danger" v-if="v$.form.adhBack.$error && hasSubmit">
                                                    {{v$.form.adhBack.$errors[0].$message}}</div>
                                            </div>
                                            <!--****** upload back *********-->
                                            <hr>
                                            <h5>PAN Card Verification</h5>
                                            <div class="col-md-6 col-lg-6 col-xl-6">
                                                <div class="select_box mb-3">
                                                    <label for="exampleInputEmail1" class="form-label">Please Choose
                                                        only PAN card!</label>
                                                    <select class="form-select shadow-none border-0"
                                                        v-model="form.panDoc" aria-label="Default select example">
                                                        <option selected>PAN Card</option>
                                                    </select>
                                                </div>
                                                <div class="text-danger" v-if="v$.form.panDoc.$error && hasSubmit">{{
                                                v$.form.panDoc.$errors[0].$message }}</div>
                                            </div>
                                            <!--****** document type *****-->
                                            <div class="col-md-6 col-lg-6 col-xl-6">
                                                <div class="select_box mb-3">
                                                    <label for="exampleInputEmail1" class="form-label">Enter the Valid
                                                        PAN Card Number</label>
                                                    <input type="text" v-model="form.panNo"
                                                        class="form-control shadow-none border-0"
                                                        placeholder="Document number" id="exampleInputEmail1"
                                                        aria-describedby="emailHelp">
                                                </div>
                                                <div class="text-danger" v-if="v$.form.panNo.$error && hasSubmit">{{
                                                v$.form.panNo.$errors[0].$message }}</div>
                                            </div>
                                            <!--****** document number*****-->
                                            <div class="col-md-6 col-lg-6 col-xl-6">
                                                <div class="select_box mb-4">
                                                    <label for="exampleInputEmail1" class="form-label">Upload Your PAN
                                                        Card Image</label>
                                                    <ChooseImageComponent v-model="form.panImg" />
                                                </div>
                                                <div class="text-danger" v-if="v$.form.panImg.$error && hasSubmit">{{
                                                v$.form.panImg.$errors[0].$message }}</div>
                                            </div>
                                            <!--****** upload front *********-->

                                            <div class="col-md-12 col-lg-12 col-xl-12">
                                                <div class="btn_save text-center">
                                                    <button type="button" class="btn setting_btn shadow-none my-4"
                                                        v-if="loading">
                                                        <div class="d-flex justify-content-center">
                                                            <div class="spinner-border" role="status">
                                                                <span class="visually-hidden">Loading...</span>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <button type="submit" class="btn setting_btn shadow-none my-4"
                                                        v-else>submit</button>
                                                </div>
                                            </div>

                                            <!--****** save btn*****-->
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div v-if="kycstatus==='pending'" style="color:red; font-size:20px;text-align:center">

                                <h1>Your Kyc has been submitted successfully and Pending For Approval</h1>

                            </div>

                            <div v-if="kycstatus==='completed'" style="color:red;text-align:center;font-size;24px">
                                <h1>Your kyc has been completed</h1>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </SettingLayout>
    </div>
</template>

<script>
import ApiClass from "@/api/api"
import SettingLayout from '@/Layout/SettingLayout'
import ChooseImageComponent from '@/components/Setting/ChooseImageComponent.vue'
import useVuelidate from '@vuelidate/core'
import CountriesData from '@/assets/json/CountriesData.json'
import {
    required,
    helpers,
    maxLength,
    minLength,

} from '@vuelidate/validators'

export default {
    name: 'KycsettingView',
    components: {
        SettingLayout,
        ChooseImageComponent,
        // CountriesData

    },
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    mounted() {
        console.log(this.Country);
        this.getdata();
    },

    data() {
        return {
            Country: CountriesData.countries,
            hasSubmit: false,
            loading: false,
            kycstatus: "",
            msg: "",
            form: {
                firstName: '',
                mdName: '',
                lastName: '',
                dob: '',
                nationality: '',
                dType: '',
                address: "",
                docNo: "",
                adhFront: "",
                adhBack: '',
                panDoc: "",
                panNo: "",
                panImg: '',


            }

        }
    },
    validations() {
        return {
            form: {
                firstName: {
                    required: helpers.withMessage("First Name is required!", required),
                    maxLength: helpers.withMessage("Maximum character only 10 ", maxLength(10)),
                    minLength: helpers.withMessage("Minimum character only 5", minLength(5)),
                    regexpre: helpers.withMessage("Please Enter only Character!!:",
                        (value) => /^[A-Za-z ]*$/.test(value))


                },
                lastName: {
                    required: helpers.withMessage("Last Name is required!", required),
                    maxLength: helpers.withMessage("Maximum character only 7 ", maxLength(7)),
                    minLength: helpers.withMessage("Minimum character only 5", minLength(5)),
                    regexpres: helpers.withMessage("Please Enter only Character!!:",
                        (value) => /^[A-Za-z ]*$/.test(value))


                },
                nationality: {
                    required: helpers.withMessage("Nationality is required!", required),
                },
                dob: {
                    required: helpers.withMessage("Date of Birth is required!", required),

                },
                address: {
                    required: helpers.withMessage("Address is required!", required),
                    maxLength: helpers.withMessage("Maximum character of Address 200 ", maxLength(120)),
                    minLength: helpers.withMessage("Minimum character of Address 100", minLength(30))
                },

                adhFront: {

                    required: helpers.withMessage("Image is required!", required),
                },
                adhBack: {
                    required: helpers.withMessage("Image is required!", required),
                },

                panDoc: {
                    required: helpers.withMessage("Please select only Pan card!", required),
                },

                panNo: {
                    required: helpers.withMessage("Please Enter the Number of PAN card Format!", required),
                    maxLength: helpers.withMessage("Maximum character Only 10 digits ", maxLength(10)),
                    minLength: helpers.withMessage("Minimum character only  10 digits", minLength(10)),
                    regex: helpers.withMessage("please enter valid pan card no:",
                        (value) => /([A-Z]){5}([0-9]){4}([A-Z]){1}$/.test(value))
                },

                panImg: {
                    required: helpers.withMessage("Image is required!", required),
                },

                dType: {
                    required: helpers.withMessage("Document Type is required!", required),
                },

                docNo: {
                    required: helpers.withMessage("Please Enter the selected Document Number!", required),
                    maxLength: helpers.withMessage("Maximum character Only 12 digits ", maxLength(12)),
                    minLength: helpers.withMessage("Minimum character only  12 digits", minLength(12))
                },

            }

        }
    },

    methods: {
        async submitForm() {
          
            this.hasSubmit = true;
            const res = await this.v$.$validate();
            if (!res) {
                return
            }
            this.loading = true;
           
            var formData = new FormData();
            formData.append("first_name", this.form.firstName);
            formData.append("middle_name", this.form.mdName);
            formData.append("last_name", this.form.lastName);
            formData.append("date_birth", this.form.dob);
            formData.append("address", this.form.address);
            formData.append("identity_type", this.form.dType);
            formData.append("identity_number", this.form.docNo);
            formData.append("pan_verify", this.form.panDoc);
            formData.append("identity_front_path", this.form.adhFront);
            formData.append("identity_back_path", this.form.adhBack);
            formData.append("pan_card_path", this.form.panImg);
            formData.append("pan_card_number", this.form.panNo);

            const response = await ApiClass.postRequest("userkyc/create", true, formData)
            this.loading = false;
           if(response?.data)
           {
               if (response?.data?.data?.status_code == 0) {
                   return this.failed(response.data.message);
               }

               this.success(response.data.message);
            }
        },
        addhar() {
            if (this.form.dType == "aadhaar") {
                let res =
                    event.charCode != 8 &&
                    event.charCode >= 48 &&
                    event.charCode <= 57 &&
                    event.charCode != 46 &&
                    event.target.value.length <= 11;
                return res ? "" : event.preventDefault();
            }
        },
        async getdata() {
            const response = await ApiClass.getNodeRequest("user-kyc/get")
            if (response?.data)
            {
                if (response?.data?.data?.status_code == 0) {
                    return this.failed(response.data.message);
                }

                this.kycstatus = response.data.data.user_kyc_status;
                this.msg = response.data.user_kyc_status_message;
            }
        }
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
