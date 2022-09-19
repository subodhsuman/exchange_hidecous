<template>
<div>
    <SettingLayout>
        <section class="setting_page">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-10 col-xl-9">
                        <div class="contact_box">
                            <div class="setting_head p-3">
                                <h6 class="mb-0">
                                    <router-link to="/setting/support"><img src="@/assets/images/icons/list-arrow.svg" alt="icons" class="img-fluid"></router-link> Query
                                </h6>
                            </div>
                            <div class="setting_content p-4">
                                <form class="row justify-content-center" @submit.prevent="submitForm()">
                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                        <div class="mb-3">
                                            <div>
                                            <label for="exampleInputEmail1" class="form-label">Title</label>
                                            <input type="text" class="form-control shadow-none border-0" v-model="title" placeholder="Enter the title" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                         <div class="text-danger" v-if="v$.title.$error">{{v$.title.$errors[0].$message }}</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                           <div class="mb-3">
                                        <div class="select_box">
                                            <label for="exampleInputEmail1" class="form-label">Choose Category</label>
                                            <select class="form-select shadow-none border-0" v-model="chosCaty" aria-label="Default select example">
                                                <option value="">choose</option>
                                                <option :value="res.id" v-for="(res,index) in getTicket" :key="index">
                                                     {{res.name}}
                                                    </option>
                                                
                                            </select>
                                        </div>
                                              <div class="text-danger" v-if="v$.chosCaty.$error">{{v$.chosCaty.$errors[0].$message }}</div>
                                    </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                        <div class="mb-3">
                                        <div class="">
                                            <label for="exampleInputEmail1" class="form-label">Name</label>
                                            <input type="text" v-model="name" class="form-control shadow-none border-0" placeholder="Enter the Name" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                         <div class="text-danger" v-if="v$.name.$error">{{v$.name.$errors[0].$message }}</div>
                                    </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                           <div class="mb-3">
                                        <div class="">
                                            <label for="exampleInputEmail1" class="form-label">Email ID</label>
                                            <input type="email" v-model="email_Id" class="form-control shadow-none border-0" placeholder="Enter the Email" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                         <div class="text-danger" v-if="v$.email_Id.$error">{{v$.email_Id.$errors[0].$message }}</div>
                                    </div>
                                    </div>
                                    <div class="col-md-12 col-lg-12 col-xl-12">
                                        <div class="mb-4">
                                            <label for="exampleInputEmail1" class="form-label">Comment</label>
                                            
                                                <textarea class="form-control shadow-none border-0 py-1 px-2" v-model="comment" placeholder="Enter comment" id="floatingTextarea2" style="height: 100px"></textarea>
                                            
                                               <div class="text-danger" v-if="v$.comment.$error">{{v$.comment.$errors[0].$message }}</div>
                                        </div>
                                    </div>
                                    <div class="col-md-5 col-lg-5 col-xl-5">
                                        <div class="btn_save text-center">
                                              <button type="button" class="btn setting_btn shadow-none my-4" v-if="loading">
                                                        <div class="d-flex justify-content-center">
                                                            <div class="spinner-border" role="status">
                                                                <span class="visually-hidden">Loading...</span>
                                                            </div>
                                                        </div>
                                                 </button>
                                                 <button type="submit" class="btn setting_btn shadow-none my-4" v-else>submit</button>
                                        </div>
                                    </div>
                                </form>
                                <!--********************** form end *****************-->
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
import ApiClass from "@/api/api"
import {helpers,maxLength,minLength,required} from '@vuelidate/validators'
export default {
    name: 'ContactusView',
    components: {
        SettingLayout

    },
      setup(){
        return {
            v$:useVuelidate()
        }
    },

    data(){
        return {
             title:"",
             loading:false,
             name:'',
             chosCaty:'',
             email_Id:'',
             comment:'',
             getTicket:[]
            
        }
    },

    validations () {
    return {
      title: {
         required:helpers.withMessage("Title is required",required)
          },
       name: { 
            required:helpers.withMessage("Name is rquired",required),
            minLength:helpers.withMessage("Please Enter the Minimum 3 Character Name!!",minLength((3))),
            maxLength:helpers.withMessage("Please Enter the Maximum  20 Character Name!!",maxLength((20)))
         },
       chosCaty:{
        required:helpers.withMessage("Please Choose one of them!",required)
        },
       email_Id:{
        required:helpers.withMessage("Email is requird",required),
        regex:helpers.withMessage("Please Enter the Valid Email!",(value)=> /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
             )
        },
       comment:{
        required:helpers.withMessage("comment is required",required)
        }
    }
  },                                                                                                                                     
    methods: {
              async submitForm(){
                    const ress= await this.v$.$validate();
                    if(!ress){
                        return
                    }
                       let data1={
                            title:this.title,
                            author_name:this.name,
                            category_id:this.chosCaty,
                            author_email:this.email_Id,
                             content:this.comment,
                         }
                         this.loading=true;
                        let response = await ApiClass.postRequest("ticket/create",true,data1)
                        if(response?.data?.status_code==0){ 
                            this.loading=false
                            return this.failed(response?.data?.message)
                        }

                        if(response?.data?.status_code==1){
                            // alert("Your Ticket Created Successfully!!")
                             this.success(response?.data?.message)
                            this.loading=false
                             this.restForm();
                            this.$router.push("/setting/ticketlist");
                        }
                        
                        // console.log("dlslskljdsklfjdklfjkld",response)           
                },


            async ticketType(){
                              let getticket =await ApiClass.getRequest("ticket_type/get",true);
                            //   console.log("get tickte",getticket)
                            //   console.log("get tick valjue",getticket?.data?.data);
                              if(getticket?.data?.status_code==0){
                                  return this.failed(getticket?.data?.message)
                              }
                              if(getticket?.data?.status_code==1){
                                 this.getTicket=getticket?.data?.data;
                                //   return this.success(getticket?.data?.message)
                              }

                            //    console.log("get ticket name",show)
             },
             restForm(){
                 this.title = this.name = this.chosCaty = this.email_Id = this.comment="";
                 this.v$.$reset();
             }


     },
     mounted() {
         this.ticketType();
     },
       
}
</script>

<style scoped>
.setting_content .form-select {
    background-color: var(--hideous-modal-input);
    border-radius: 5px;
    color: var(--hideous-text-gray);
    font-size: 14px;
}

@media all and (min-width: 1200px) and (max-width: 1399px) {}

@media all and (min-width: 992px) and (max-width: 1199px) {}

@media all and (min-width: 768px) and (max-width: 991px) {
    .setting_content {
        padding: 20px !important;
    }
}

@media all and (min-width: 320px) and (max-width: 767px) {
    .setting_content {
        padding: 20px !important;
    }
}
</style>
