<template>
<div>
    <SettingLayout>
        <section class="setting_page">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-10 col-xl-9">
                        <div class="modal_box">
                            <div class="setting_head p-3">
                                <h6 class="mb-0">
                                    <router-link to="/setting/ticketlist"><img src="@/assets/images/icons/list-arrow.svg" alt="icons" class="img-fluid"></router-link> TICKET LIST
                                </h6>
                            </div>
                            <div class="setting_content">
                                <div class="list_info p-4">
                                    <div class="user_info" >
                                        <p class="mb-1">Name <span class="ms-5">{{detailss[2]}}</span></p>
                                        <p>Status <span class="text-warning ms-5">{{detailss[6]}}</span></p>
                                    </div>
                                    <form class="row justify-content-center" @submit.prevent="postComment()">
                                        <div class="col-md-12 col-lg-12 col-xl-12">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Comments</label>
                                                <div class="form-floating">
                                                    <textarea  v-model="coment" class="form-control shadow-none border-0 py-1 px-2"  placeholder="Add comments" id="floatingTextarea2" style="height: 100px"></textarea>
                                                </div>
                                            </div>
                                             <div class="text-danger" v-if="v$.coment.$error">{{v$.coment.$errors[0].$message }}</div>
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
                                        <div class="col-md-12 col-lg-12 col-xl-12">
                                            <div v-if="show">
                                                <label for="exampleInputEmail1" class="form-label">All Comments</label>
                                                <div class="comment_scroll p-3">
                                                    <div class="main_comment_box d-flex mb-2 p-2" v-for="(comnt,index) in getValue" :key="index">
                                                        <div class="user_image me-3">
                                                           <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" style="fill: var(--user-white);transform: ;msFilter:;" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"/></svg>
                                                        </div>
                                                        <div class="comment-details">
                                                            <div class="detail_info_comment mb-2">
                                                                <div class="comment_time">
                                                                    {{new Date(comnt.created_at).toLocaleTimeString("en-IN",optionsDate)}}
                                                                </div>
                                                                <div class="comment_user_name">
                                                                    {{comnt.user.name}}
                                                                </div>
                                                            </div>
                                                            <div class="comment_box">
                                                                <p>{{comnt.comment}}</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div v-else>
                                                <label for="exampleInputEmail1" class="form-label">Comments</label>
                                                <div class="mb-3 form-control border-0">
                                                    <p class="mb-0">No comments Available</p>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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
import useVuelidate from '@vuelidate/core'
import {required,helpers} from '@vuelidate/validators'

export default {
    // component:'/setting/ticketlistmodal',
    name: 'TicketmodalView',
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
            show: true,
            loading:false,
            detailss:[],
            getid:'',
            getValue:[],
            coment:"",
            optionsDate :{time:'numeric'}
        }
        
    },
       validations(){
        return {
         coment:{
               required:helpers.withMessage("comment is required",required)
             }, 
          }
     },
    
    mounted() {
        this.detailss= this.$store.getters.getList;
        this.getid=this.$store.getters.getList[1];

        // console.log("Ticketlsit",this.getid);
        // =this.$route.params.details
        // this.user = this.detailss[0];
        // console.log("dlslslls",this.detailss)
        // this.postComment();
         this.getComment();
      
    },
    methods: {
             async postComment(){
                 const res = await this.v$.$validate();
                if (!res) {
                    return
                }
                 
                    const form_data={
                        ticket_id:this.getid,
                         comment:this.coment
                    }
                      this.loading=true
                      let response= await ApiClass.postRequest("ticket_comment/create",true,form_data)
                      console.log(response);
                       if(response?.data?.status_code==0){
                            this.failed(response.data.message)
                           this.loading=false;
                           
                       }
                         if(response?.data?.status_code==1){
                            this.loading=false;
                            this.getComment();
                             this.resForm();
                       }

                    //   console.log("post commnent",response);
              },

              async getComment(){
                let api_response = await ApiClass.getRequest("ticket/get/"  +this.getid);
                    //    console.log("get value",api_response)

                if(api_response?.data?.status_code==0){
                      return this.failed(api_response.data.message)
                }
                  if(api_response?.data?.status_code==1){ 
                      this.getValue=api_response.data.data.comments;
                  }
                //   console.log("get data ",this.getValue);
                // console.log("get comment value",api_response)
              },
              resForm(){
                   this.coment="";
                   this.v$.$reset();
              }
    }
}
</script>

<style scoped>
.list_info p {
    font-size: 12px;
    font-weight: 600;
    color: var(--hideous-white);
}

.list_info span {
    color: var(--hideous-text-gray);
    font-size: 13px;
}

.user_info hr {
    color: var(--hideous-text-gray);
}

.comments_msg {
    min-width: 100px;
}

.comments_msg .badge {
    color: var(--hideous-text-gray);
    background-color: var(--hideous-setting-head);
    border-radius: 10px;
    font-size: 14px;
    white-space: break-spaces;
}

.comments_msg p {
    font-size: 14px;
    font-weight: 600;
}

.comment_scroll {
    background-color: var(--hideous-modal-input);
    border-radius: 5px;
    color: var(--hideous-text-gray);
    font-size: 14px;
    height: 300px;
    overflow-y: scroll;
}

.main_comment_box {
    background-color: var(--hideous-setting-head);
    border-radius: 5px;
}

.comment_time,
.comment_user_name {
    font-size: 13px;
}

.comment_box p {
    font-size: 14px;
}

/* width */
::-webkit-scrollbar {
    width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
    background: var(--hideous-modal-input);
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: var(--hideous-text-gray);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: var(--hideous-text-gray);
}

@media all and (min-width: 768px) and (max-width: 991px) {
    .list_info {
        padding: 20px !important;
    }
}

@media all and (min-width: 320px) and (max-width: 767px) {
    .list_info {
        padding: 20px !important;
    }
}
</style>
