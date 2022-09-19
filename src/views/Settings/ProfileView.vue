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
                                                <label for="exampleInputEmail1" class="form-label"> First Name</label>
                                                <input type="text" class="form-control shadow-none border-0"
                                                    v-model="v$.name.$model" placeholder="Enter first name"
                                                    id="exampleInputEmail1" aria-describedby="emailHelp"
                                                    :readonly="show == false" />
                                                <span class="text-danger" v-if="v$.name.$error">
                                                    <div>
                                                        {{ v$.name.$errors[0].$message }}
                                                    </div>
                                                </span>

                                            </div>

                                        </div>
                                           <div class="col-md-6 col-lg-6 col-xl-6">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label"> Last Name</label>
                                                <input type="text" class="form-control shadow-none border-0" v-model="v$.lname.$model"
                                                    placeholder="Enter first name"
                                                    id="exampleInputEmail1" aria-describedby="emailHelp"
                                                    :readonly="show == false" />
                                                 <span class="text-danger" v-if="v$.lname.$error">
                                                    <div>
                                                        {{ v$.lname.$errors[0].$message }}
                                                    </div>
                                                </span>

                                            </div>

                                        </div>
                                        <!--** //last name**-->
                                        
                                        <!--******** profile detail ********-->

                                         <!--*********** country code **************-->
                                         <!-- COUNTRY CODE -->
                                        <div class="col-md-6 col-lg-6 col-xl-6">
                                               <label for="exampleInputEmail1" class="form-label">Country Code
                                                </label>
                                            <div class="form-floating">
                                                <!-- COUNTRY DROPDOWN -->
                                                <div class="dropdown p-1">
                                                    <button class="btn btn-secondary dropdown-toggle shadow-none p-0 bg-transparent w-100 border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
                                                        <span><img :src="'https://flagpedia.net/data/flags/normal/' + country1.code.toLowerCase() +'.png'" alt="" class="img-fluid" style="width: 14px" height="14px"  />
                                                            {{ country1.dial }}
                                                        </span>
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li @click="country1 = country" v-for="(country, index) in ACountries " :key="index" >
                                                            <a class="dropdown-item" href="javascript:void(0)">
                                                                <span>
                                                                    <img :src="'https://flagpedia.net/data/flags/normal/' + country.code.toLowerCase() + '.png' " alt="" class="img-fluid" style="width: 14px" height="14px" />
                                                                    {{ country.dial }}</span> 
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                         <!-- <div class="col-md-6 col-lg-6 col-xl-6">
                                              <label for="exampleInputEmail1" class="form-label">Country Code
                                                </label>
                                            <div class="mb-3">
                                              <select class="w-100"  v-model="v$.country_code.$model" :readonly="show == false">
                                                    <option v-for="data,index in countrylist " :key="index" >{{data.code}} </option>
                                                
                                                    </select>
                                                
                                                <span class="text-danger" v-if="v$.country_code.$error">
                                                    <div>
                                                        {{ v$.country_code.$errors[0].$message }}
                                                    </div>
                                                </span>
                                            </div>
                                        </div> -->
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

                                        <div class="col-md-8 col-lg-10 col-xl-8 col-xxl-5">
                                            <div class="btn_save text-center" v-if="!show">
                                                <button type="button" @click="show = true"
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
                                                        <div class="spinner-border spinner-border-sm" role="status">
                                                            <span class="visually-hidden">Loading...</span>
                                                        </div>
                                                    </div>
                                                </button>
                                                <button type="submit" class="btn setting_btn shadow-none my-3 me-3"
                                                    v-else>Save</button>

                                                <button type="button" @click="show = false"
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
import CountriesData from "../../assets/json/CountriesData.json";
export default {
    name: 'ProfileView',
    components: {
        SettingLayout,   
    },
    data() {
        return {
            countrylist:CountriesData,
            name: '',
            lname:'',
            mobile: '',
            email: '',
            status: '',
            show: false,
            loading12: false,
            loading: false,
            country:'',
            // helo:[],           
            country1: {
                dial: "+91",
                flag: "🇮🇳",
                code: "IN",
                name: "India"
            },
            
            // ACountries:CountriesData.sort(
            //     (a,b)=>
            //     (parseFloat(a.dial.substring(1))- parseFloat(b.dial.substring(1)))
            // ),
            
        }
    },
    validations() {
        return {
            name: {
                required: helpers.withMessage('Name is required', required),
            },
             lname: {
                required: helpers.withMessage('Last name is required', required),
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
            },
            // country_code: {
            //     required: helpers.withMessage('country code is required', required)
            // }

        }
    },
    mounted() {
        // console.log("hiii",JSON.parse(JSON.stringify(this.countrylist[51])));
        // this.helo = JSON.parse(JSON.stringify(this.countrylist[51]));
        // console.log(this.helo);
        this.get_user();
        this.country = this.countrylist;
        console.log(this.country,'country datahere');
        console.log(this.country1);

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
            console.log(response)
            if (response?.data) {
                this.loading12 = false;
                if (response.data.status_code == 1) {
                    this.name = response.data.data.fname;
                     this.lname = response.data.data.lname;
                     this.country1.dial  = response.data.data.country_name;
                     console.log(this.country1.dial);

                     // name json country find particular json  this.country1
                    //  console.log(this.lname)
                    this.mobile = response.data.data.mobile;
                    this.email = response.data.data.email;
                    this.status = response.data.data.status ? 'Active' : 'Inactive';
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
                lname: this.lname,
                mobile: this.mobile,
                // email: this.email,
                country_code : this.country1.dial ,
                 country_name  :  this.country1.name
            }
                console.dir(form_data)
            this.loading = true;
            let response = await ApiClass.postRequest('user/upate_profile', true, form_data);
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
    
.btn_save{
    flex-direction: column;
}
}

form-control:disabled,
.form-control[readonly] {
    background-color: #1b1a1a;
    opacity: 1
}
ul.dropdown-menu.show {
    height: 188px;
    overflow-y: scroll;
    transform: translate(119px, 32px) !important;
}
</style>
