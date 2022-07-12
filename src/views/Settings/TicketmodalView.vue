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
                                    <div class="user_info">
                                        <p class="mb-1">Name <span class="ms-5">Res</span></p>
                                        <p>Status <span class="text-warning ms-5">open</span></p>
                                    </div>
                                    <form class="row justify-content-center">
                                        <div class="col-md-12 col-lg-12 col-xl-12">
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Comments</label>
                                                <div class="form-floating">
                                                    <textarea class="form-control shadow-none border-0 py-1 px-2" placeholder="Add comments" id="floatingTextarea2" style="height: 100px"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-5 col-lg-5 col-xl-5">
                                            <div class="btn_save text-center">
                                                <button type="submit" class="btn setting_btn shadow-none mb-3">Submit</button>
                                                <button type="submit" class="btn setting_btn shadow-none mb-3" v-if="loading">
                                                    <div class="d-flex justify-content-center">
                                                        <div class="spinner-border" role="status">
                                                            <span class="visually-hidden">Loading...</span>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-lg-12 col-xl-12">
                                            <div v-if="show">
                                                <label for="exampleInputEmail1" class="form-label">All Comments</label>
                                                <div class="comment_scroll p-3">
                                                    <div class="main_comment_box d-flex mb-2 p-2" v-for="(comment, index) in CommentData" :key="index">
                                                        <div class="user_image me-3">
                                                           <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" style="fill: var(--user-white);transform: ;msFilter:;" viewBox="0 0 512 512">                                                           <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"/></svg>
                                                        </div>
                                                        <div class="comment-details">
                                                            <div class="detail_info_comment mb-2">
                                                                <div class="comment_time">
                                                                    {{comment.time}}
                                                                </div>
                                                                <div class="comment_user_name">
                                                                    {{comment.name}}
                                                                </div>
                                                            </div>
                                                            <div class="comment_box">
                                                                <p>{{comment.comments}}</p>
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
export default {
    name: 'TicketlistView',
    components: {
        SettingLayout
    },
    data() {
        return {
            show: true,
            CommentData: [{
                    time: '24 Min ago',
                    name: 'Seema Pathania',
                    comments: 'heloo exchange what are you doing man',
                },
                {
                    time: '24 Min ago',
                    name: 'Seema Pathania',
                    comments: 'heloo exchange what are you doing man',
                },
                {
                    time: '24 Min ago',
                    name: 'Seema Pathania',
                    comments: 'heloo exchange what are you doing man',
                },
                {
                    time: '24 Min ago',
                    name: 'Seema Pathania',
                    comments: 'heloo exchange what are you doing man',
                },
                {
                    time: '24 Min ago',
                    name: 'Seema Pathania',
                    comments: 'heloo exchange what are you doing man',
                },
                {
                    time: '24 Min ago',
                    name: 'Seema Pathania',
                    comments: 'heloo exchange what are you doing man',
                }
            ]
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
