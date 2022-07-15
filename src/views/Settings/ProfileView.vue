<template>
    <div>
        <SettingLayout>
            <section class="setting_page">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12 col-lg-10 col-xl-9">
                            <div class="d-flex justify-content-center" v-if="loading12">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            <div class="profile_box" v-else>
                                <div class="setting_head p-3">
                                    <h6 class="mb-0">PROFILE DETAIL</h6>
                                </div>
                                <div class="setting_content p-4">
                                    <form class="row justify-content-center" @submit.prevent="addUser()">
                                        <div class="col-md-6 col-lg-6 col-xl-6">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                                <input type="text" class="form-control shadow-none border-0"
                                                    v-model="v$.name.$model" placeholder="Enter your name"
                                                    id="exampleInputEmail1" aria-describedby="emailHelp"
                                                    :readonly="show == false" />
                                                <span class="text-danger" v-if="v$.name.$error">
                                                    <div>
                                                        {{ v$.name.$errors[0].$message }}
                                                    </div>
                                                </span>

                                            </div>

                                        </div>
                                        <!--******** profile detail ********-->

                                        <div class="col-md-6 col-lg-6 col-xl-6">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Mobile Number
                                                </label>
                                                <input type="text"
                                                    onkeypress="return (event.charCode !=8 && ((event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 46 && this.value.indexOf('.') == 1)))"
                                                    id=" input-phone" class="form-control shadow-none border-0"
                                                    v-model="v$.mobile.$model" placeholder="Enter your mobile numb"
                                                    aria-describedby="emailHelp" :readonly="show == false" />
                                                <span class="text-danger" v-if="v$.mobile.$error">
                                                    <div>
                                                        {{ v$.mobile.$errors[0].$message }}
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        <!--*********** mobile numb **************-->

                                        <div class="col-md-6 col-lg-6 col-xl-6">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Email ID</label>
                                                <input type="text" class="form-control shadow-none border-0"
                                                    v-model="v$.email.$model" placeholder="admin@mail.com"
                                                    id="exampleInputEmail1" aria-describedby="emailHelp"
                                                    :readonly="show == false" />
                                                <span class="text-danger" v-if="v$.email.$error">
                                                    <div>
                                                        {{ v$.email.$errors[0].$message }}
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        <!--************** email id *****************-->

                                        <div class="col-md-6 col-lg-6 col-xl-6">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Status</label>
                                                <input type="text" v-model="v$.status.$model"
                                                    class="form-control shadow-none border-0" v-if="status"
                                                    placeholder="status" id="exampleInputEmail1"
                                                    aria-describedby="emailHelp" readonly />
                                                <!-- <input type="text" v-else class="form-control shadow-none border-0" placeholder="Active" :value="Active1" id="exampleInputEmail1" aria-describedby="emailHelp" :readonly="show==false" /> -->
                                            </div>
                                            <span class="text-danger" v-if="v$.status.$error">
                                                <div>
                                                    {{ v$.status.$errors[0].$message }}
                                                </div>
                                            </span>
                                        </div>
                                        <!--******************** status*************** -->

                                        <div class="col-md-5 col-lg-5 col-xl-5">
                                            <div class="btn_save text-center" v-if="!show">
                                                <button type="submit" @click="show = true"
                                                    class="btn setting_btn shadow-none my-3">Edit</button>
                                                <!-- <button type="submit" class="btn setting_btn shadow-none my-3" v-if="loading">
                                                <div class="d-flex justify-content-center">
                                                    <div class="spinner-border" role="status">
                                                        <span class="visually-hidden">Loading...</span>
                                                    </div>
                                                </div>
                                            </button> -->
                                            </div>
                                            <div class="btn_save text-center d-flex align-items-center" v-else>
                                                <button type="button" class="btn setting_btn shadow-none my-3 me-3"
                                                    v-if="loading">
                                                    <div class="justify-content-center">
                                                        <div class="spinner-border my-1" role="status">
                                                            <span class="visually-hidden">Loading...</span>
                                                        </div>
                                                    </div>
                                                </button>
                                                <button type="submit" class="btn setting_btn shadow-none my-3 me-3"
                                                    v-else>Save</button>
                                                <button type="submit" @click="show = false"
                                                    class="btn setting_btn shadow-none my-3">Cancel</button>
                                                <!-- <button type="submit" class="btn setting_btn shadow-none my-3" v-if="loading">
                                                <div class="d-flex justify-content-center">
                                                    <div class="spinner-border" role="status" >
                                                        <span class="visually-hidden">Loading...</span>
                                                    </div>
                                                </div>
                                            </button> -->
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
import useVuelidate from '@vuelidate/core'



import {
    required,
    email,
    helpers
} from '@vuelidate/validators'
import SettingLayout from '@/Layout/SettingLayout'
import ApiClass from '@/api/api.js'
export default {
    name: 'ProfileView',
    components: {
        SettingLayout
    },
    data() {
        return {
            name: '',
            mobile: '',
            email: '',
            status: '',
            show: false,
            loading12: false,
            loading: false,
        }
    },
    validations() {
        return {
            name: {
                required: helpers.withMessage('Name is required', required),
            },
            mobile: {
                required: helpers.withMessage(' Mobile number is required', required),
            },
            email: {
                email: helpers.withMessage('Email is required', required),
                required: helpers.withMessage('Email must be valid email address', email, required)
            },
            status: {
                required: helpers.withMessage('Status is required', required)
            }

        }
    },
    mounted() {
        this.get_user();

    },
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    methods: {


        async get_user() {

            this.loading12 = true;
            let response = await ApiClass.getNodeRequest('user/get');
            if (response?.data) {
                this.loading12 = false;
                if (response.data.status_code == 1) {
                    this.name = response.data.data.fname;
                    this.mobile = response.data.data.mobile;
                    this.email = response.data.data.email;
                    this.status = response.data.data.status ? 'active' : 'inactive';
                }          
            }
        }, 
        async addUser() {          

            const result = await this.v$.$validate();
            if (!result) {
                return;
            }
          
            let form_data = {
                fname: this.name,
                mobile: this.mobile,
                email: this.email
            }
            this.loading = true;
            let response = await ApiClass.postRequest('user/reset_email', true, form_data);
            if (response?.data)
                    this.loading = false;
            if (response?.data.status_code == 0) {
              return  this.failed(response.data.message);
            }
                this.success(response.data.message);

        }

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

form-control:disabled,
.form-control[readonly] {
    background-color: #1b1a1a;
    opacity: 1
}
</style>
