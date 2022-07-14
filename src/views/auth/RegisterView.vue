<template>
    <div>
        <section class="auth d-flex align-items-center position-relative">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <!-- AUTH IMAGE -->
                    <div class="col-xl-6 col-lg-6">
                        <div class="image_section d-none d-lg-block">
                            <h2>Sign up to <span class="pink-text">Hideous</span></h2>
                            <div class="main-img">
                                <img src="@/assets/images/auth/main-img.png" class="img-fluid" alt="main-image">
                            </div>
                        </div>
                    </div>
                    <!-- AUTH FORM -->
                    <div class="col-xl-6 col-lg-6 col-md-9">
                        <div class="form_box px-4 py-5 px-md-5">
                            <form @submit.prevent="submitForm">
                                <div class="row">
                                    <div class="col-md-6">
                                        <!-- first name -->
                                        <div class="mb-3">
                                            <label for="Fname" class="form-label">First Name </label>
                                            <input type="text" class="form-control shadow-none border-0" id="Fname"
                                                placeholder="Enter first Name" v-model="v$.firstName.$model"
                                                oninput="value = value.replace(/[^A-Za-z]/ig, '')">
                                            <div class="input-errors" v-for="error of v$.firstName.$errors"
                                                :key="error.$uid">
                                                <div class="text-danger">{{ error.$message }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <!-- last name -->
                                        <div class="mb-3">
                                            <label for="Lname" class="form-label">Last Name </label>
                                            <input type="text" class="form-control shadow-none border-0" id="Lname"
                                                placeholder="Enter Last Name" v-model="regisForm.lastName">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <!-- country code -->
                                        <div class="mb-3">
                                            <label for="code" class="form-label">Country code </label>
                                            <div class="dropdown">
                                                <button class="btn btn-secondary dropdown-toggle shadow-none border-0"
                                                    type="button" id="code" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    <a class="dropdown-item" href="#"><img
                                                            :src="'https://flagpedia.net/data/flags/normal/' + country.code.toLowerCase() + '.png'"
                                                            class="img-fluid me-2" alt="" style="width: 14px"
                                                            height="14px">{{country.number}}</a>
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="code">
                                                    <li class="border-bottom" v-for="(data,index) in countryArray"
                                                        :key="index" @click="country = data"><a class="dropdown-item"
                                                            href="#"><img
                                                                :src="'https://flagpedia.net/data/flags/normal/' + data.code.toLowerCase() + '.png'"
                                                                class="img-fluid me-2" alt="" style="width: 14px"
                                                                height="14px">{{data.number}}</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <!-- phone number -->
                                        <div class="mb-3">
                                            <label for="phone" class="form-label">Phone Number</label>
                                            <input type="text" class="form-control shadow-none border-0" id="phone"
                                                placeholder="Enter Phone Number"
                                                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');"
                                                v-model="v$.mobile.$model">
                                            <div class="input-errors" v-for="error of v$.mobile.$errors"
                                                :key="error.$uid">
                                                <div class="text-danger">{{ error.$message }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <!-- Email -->
                                        <div class="mb-3">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="email" class="form-control shadow-none border-0" id="email"
                                                placeholder="Enter Email" v-model="v$.email.$model">
                                            <div class="input-errors" v-for="error of v$.email.$errors"
                                                :key="error.$uid">
                                                <div class="text-danger">{{ error.$message }}</div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <!-- PASSWORD -->
                                        <div class="mb-3 password">
                                            <label for="password" class="form-label">Password</label>
                                            <input :type="type" class="form-control shadow-none border-0" id="password"
                                                placeholder="Password" v-model="v$.password.$model">
                                            <span class="float-end position-relative eye" v-if="type=='password'"
                                                @click="type='text'">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                                    height="18" width="18" style="fill:#2b2b2ba8">
                                                    <path
                                                        d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z" />
                                                </svg>
                                            </span>
                                            <span class="float-end position-relative eye" v-else
                                                @click="type='password'">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                                                    height="18" width="18" style="fill:#2b2b2ba8">
                                                    <path
                                                        d="M150.7 92.77C195 58.27 251.8 32 320 32C400.8 32 465.5 68.84 512.6 112.6C559.4 156 590.7 207.1 605.5 243.7C608.8 251.6 608.8 260.4 605.5 268.3C592.1 300.6 565.2 346.1 525.6 386.7L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L150.7 92.77zM223.1 149.5L313.4 220.3C317.6 211.8 320 202.2 320 191.1C320 180.5 316.1 169.7 311.6 160.4C314.4 160.1 317.2 159.1 320 159.1C373 159.1 416 202.1 416 255.1C416 269.7 413.1 282.7 407.1 294.5L446.6 324.7C457.7 304.3 464 280.9 464 255.1C464 176.5 399.5 111.1 320 111.1C282.7 111.1 248.6 126.2 223.1 149.5zM320 480C239.2 480 174.5 443.2 127.4 399.4C80.62 355.1 49.34 304 34.46 268.3C31.18 260.4 31.18 251.6 34.46 243.7C44 220.8 60.29 191.2 83.09 161.5L177.4 235.8C176.5 242.4 176 249.1 176 255.1C176 335.5 240.5 400 320 400C338.7 400 356.6 396.4 373 389.9L446.2 447.5C409.9 467.1 367.8 480 320 480H320z" />
                                                </svg>
                                            </span>
                                            <div class="input-errors" v-for="error of v$.password.$errors"
                                                :key="error.$uid">
                                                <div class="text-danger">{{ error.$message }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <!-- CONFIRM PASSWORD -->
                                        <div class="mb-3 password">
                                            <label for="confirm-password" class="form-label">Confirm Password</label>
                                            <input :type="type1" class="form-control shadow-none border-0"
                                                id="confirm-password" placeholder="Confirm Password"
                                                v-model="v$.confirmPassword.$model">
                                            <span class="float-end position-relative eye" v-if="type1=='password'"
                                                @click="type1='text'">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                                    height="18" width="18" style="fill:#2b2b2ba8">
                                                    <path
                                                        d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z" />
                                                </svg>
                                            </span>
                                            <span class="float-end position-relative eye" v-else
                                                @click="type1='password'">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                                                    height="18" width="18" style="fill:#2b2b2ba8">
                                                    <path
                                                        d="M150.7 92.77C195 58.27 251.8 32 320 32C400.8 32 465.5 68.84 512.6 112.6C559.4 156 590.7 207.1 605.5 243.7C608.8 251.6 608.8 260.4 605.5 268.3C592.1 300.6 565.2 346.1 525.6 386.7L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L150.7 92.77zM223.1 149.5L313.4 220.3C317.6 211.8 320 202.2 320 191.1C320 180.5 316.1 169.7 311.6 160.4C314.4 160.1 317.2 159.1 320 159.1C373 159.1 416 202.1 416 255.1C416 269.7 413.1 282.7 407.1 294.5L446.6 324.7C457.7 304.3 464 280.9 464 255.1C464 176.5 399.5 111.1 320 111.1C282.7 111.1 248.6 126.2 223.1 149.5zM320 480C239.2 480 174.5 443.2 127.4 399.4C80.62 355.1 49.34 304 34.46 268.3C31.18 260.4 31.18 251.6 34.46 243.7C44 220.8 60.29 191.2 83.09 161.5L177.4 235.8C176.5 242.4 176 249.1 176 255.1C176 335.5 240.5 400 320 400C338.7 400 356.6 396.4 373 389.9L446.2 447.5C409.9 467.1 367.8 480 320 480H320z" />
                                                </svg>
                                            </span>
                                            <div class="input-errors" v-for="error of v$.confirmPassword.$errors"
                                                :key="error.$uid">
                                                <div class="text-danger">{{ error.$message }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <!-- REFERRAL -->
                                        <div class="mb-3">
                                            <label for="referral" class="form-label">Referral</label>
                                            <input type="text" class="form-control shadow-none border-0" id="referral"
                                                placeholder="Code" v-model="v$.referral.$model">
                                            <div class="input-errors" v-for="error of v$.referral.$errors"
                                                :key="error.$uid">
                                                <div class="text-danger">{{ error.$message }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <!-- terms -->
                                        <div class="form-check terms mb-3">
                                            <input class="form-check-input shadow-none" type="checkbox" value=""
                                                id="flexCheckDefault" v-model="v$.termsCondition.$model">
                                            <label class="form-check-label" for="flexCheckDefault">
                                                I agree to terms and conditions
                                            </label>
                                            <div class="input-errors" v-for="error of v$.termsCondition.$errors"
                                                :key="error.$uid">
                                                <div class="text-danger">{{ error.$message }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <!-- BUTTON -->
                                        <div class="d-grid mb-3">
                                            <button type="submit" class="btn auth_btn text-white shadow-none"
                                                v-if="!loader">Sign
                                                Up</button>
                                            <button type="button" class="btn auth_btn text-white shadow-none" disabled
                                                v-else>
                                                <div class="d-flex justify-content-center">
                                                    <div class="spinner-border" role="status"
                                                        style="width: 1rem; height: 1rem;">
                                                        <span class="visually-hidden">Loading...</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <!-- AUTH OPTION -->
                                        <div class="text-center options">
                                            <p>If you don't have an account,
                                                <span>
                                                    <router-link to="/login">Sign In</router-link>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { reactive, ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email, helpers ,minLength  ,maxLength  ,sameAs } from '@vuelidate/validators'
import ApiClass from '@/api/api'
import countryList from '@/assets/json/countrycode.json'
import _ from 'lodash'
const passRegex = helpers.regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/);

export default {
    name: 'RegisterView',
    setup() {
        const country =  {
            number: "+91",
            flag: "🇮🇳",
            code: "IN",
            name: "India"
        }
        const type = ref('password');
        const type1 = ref('password');
        const loader = ref(false)

        const countryArray = _.orderBy(countryList, [item => parseInt(item.number)],['dsc']);
        const regisForm = reactive({
            firstName: "",
            lastName: "",
            mobile: "",
            email: "",
            password: "",
            confirmPassword: "",
            referral: "",
            termsCondition: ""
        })
        // let formReset = reactive(regisForm)
        const rules = computed(() => {
            return {
                firstName: {
                    required: helpers.withMessage("First name is required.", required),
                    minLength: helpers.withMessage("First name must have atleast 3 letters.", minLength(3)),
                    maxLength: helpers.withMessage("First name should be not greater than 30 letters.", maxLength(30)),
                },
                mobile: {
                    required: helpers.withMessage("Mobile number is required.", required),
                    minLength: helpers.withMessage("Mobile number must be 10 character. ", minLength(10)),
                    maxLength: helpers.withMessage("Mobile number must be 10 character. ", maxLength(10))
                },
                email: {
                    required: helpers.withMessage("Email is required.", required),
                    email: helpers.withMessage("Email must be a valid email address.", email),
                },
                password: {
                    required: helpers.withMessage("Password is required.", required),
                    minLength: helpers.withMessage("Password must have atleast 8 characters.", minLength(8)),
                    regexPassword:
                        helpers.withMessage('Password should contains at least One Uppercase, One Lowercase and One Special Character', passRegex)
                },
                confirmPassword: {
                    required: helpers.withMessage("Confirm password is required.", required),
                    sameAs: helpers.withMessage("Confirm password must be same as password.", sameAs(regisForm.password)),
                },
                referral: {
                    minLength: helpers.withMessage("Referral code must be 10 character.", minLength(10))
                },
                termsCondition: {
                    sameAs: helpers.withMessage("Terms and conditions are required.", sameAs(true)),
                }
            }

        });

        const v$ = useVuelidate(rules, regisForm)

        return { regisForm, v$, loader,  country, countryArray, type, type1 }
    },
    methods: {
        async submitForm() {

            const result = await this.v$.$validate()
            if (!result) {
                return
            }
            let form = {
                fname: this.regisForm.firstName,
                lname: this.regisForm.lastName,
                mobile: this.regisForm.mobile,
                country_name: this.country.name,
                country_code: this.country.code,
                email: this.regisForm.email,
                password: this.regisForm.password,
                confirm_password: this.regisForm.confirmPassword,
                referral: this.regisForm.referral,
                terms: this.regisForm.termsCondition
            };
            this.loader = true;
            let res = await ApiClass.postRequest('register', false, form);
            if (res?.data)
            {
                this.loader = false;

                if (res.data?.status_code == 0) {
                    return this.failed(res.data.message);
                }
                this.success(res.data.message);
                this.reSet();
                return this.$router.push("/exchange");
            }
        },
        reSet() {
            this.v$.$reset();            
            Object.keys(this.regisForm).forEach((i) =>  this.regisForm[i] = "");       
        }
    }
        

}
</script>

<style scoped>
.auth .input-group-text {
    background-color: var(--hideous-white)
}

.dropdown .dropdown-toggle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.dropdown .dropdown-menu {
    width: 100%;
}

.dropdown-menu {
    max-height: 135px;
    overflow-y: scroll;
    font-size: 13px;
}

.dropdown-item:focus,
.dropdown-item:hover {
    background-color: #da318224;
    color: var(--hideous-primary)
}

/* width */
::-webkit-scrollbar {
    width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #090103a6;
}
</style>
