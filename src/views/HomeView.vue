<template>
<div class="home">
    <!--********* Lovely Banner Section *********-->
    <section class="home_banner d-flex justify-content-center align-items-center p-0">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-6 col-xl-6 align-self-center">
                    <div class="banner_heading p-2">
                        <h1>
                            <span>BUY </span> & <span>SELL</span> Crypto <br>
                            Instantly
                        </h1>
                        <p>The most trusted cryptocurrency trading platform</p>

                        <div class="input-group p-1 my-4">
                            <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1">
                            <span class="input-group-text" id="basic-addon1">Get Started</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6">
                    <div class="banner_img p-2">
                        <img src="../assets/images/banner-bg.png" alt="image" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--********* Lovely Poster Slider Section *********-->

    <section class="poster-slider p-0">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <swiper :autoplay="{ delay: 2500, disableOnInteraction: false,}" :navigation="false" :modules="modules" class="mySwiper" :slides-per-view="3" :loop="true" :space-between="30" @swiper="onSwiper" :spaceBetween="10" :pagination="{clickable: true,}" @slideChange="onSlideChange" :breakpoints="{
      '320': {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      '767': {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }">

                        <swiper-slide><img src="../assets/images/slide1.png" alt="img" class="img-fluid mx-auto d-block"></swiper-slide>
                        <swiper-slide> <img src="../assets/images/slide2.png" alt="img" class="img-fluid mx-auto d-block"></swiper-slide>
                        <swiper-slide> <img src="../assets/images/slide3.png" alt="img" class="img-fluid mx-auto d-block"></swiper-slide>
                        <swiper-slide><img src="../assets/images/slide1.png" alt="img" class="img-fluid mx-auto d-block"></swiper-slide>
                        <swiper-slide> <img src="../assets/images/slide2.png" alt="img" class="img-fluid mx-auto d-block"></swiper-slide>
                        <swiper-slide> <img src="../assets/images/slide3.png" alt="img" class="img-fluid mx-auto d-block"></swiper-slide>
                        <swiper-slide><img src="../assets/images/slide1.png" alt="img" class="img-fluid mx-auto d-block"></swiper-slide>
                        <swiper-slide> <img src="../assets/images/slide2.png" alt="img" class="img-fluid mx-auto d-block"></swiper-slide>
                        <swiper-slide> <img src="../assets/images/slide3.png" alt="img" class="img-fluid mx-auto d-block"></swiper-slide>
                    </swiper>

                </div>
            </div>
        </div>
    </section>

    <!--  *********  Lovely Poster Slider Section *********  -->
    <section class="coin_list">
        <div class="container">
            <MainHeading main_heading="List OF coins" />
            <div>
                <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                    <li  v-for="(data,index) in table_array" :key="index" role="presentation">
                        <button class="nav-link text-capitalize" id="pills-contact-tab" :class="order_type == data.type ? 'nav-link active' : 'nav-link'" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                             {{ data.type }}
                        </button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div class="tarde_table table-responsive ">
                            <table class="table text-center">
                                <thead>
                                    <tr class=" table-bordered rounded">
                                        <th scope="col">Name</th>
                                        <th scope="col">Last Price</th>
                                        <th scope="col">24h change </th>
                                        <th scope="col">Market</th>
                                        <th scope="col">Trade</th>
                                    </tr>
                                </thead>
                                <tbody class="align-baseline" v-if="loading">
                                    <tr class="border-0" v-for="(data , index) in TableData" :key="index">
                                        <td class="text-start ps-2 ps-lg-5"><img :src="require(`../assets/images/coins/${data.coin}`)" alt="coin icon" style="width:32px; height:30px;" class="me-3">{{data.name}}</td>
                                        <td> {{data.price}} <span> USDT</span> </td>
                                        <td> {{data.change}}</td>
                                        <td> <img src="../assets/images/coins/chart.png" alt=""></td>
                                        <td> <button type="button" class="trade_btn">Trade</button> </td>
                                    </tr> 
                                     <!-- <Skeletor pill :shimmer="true"/> -->
                                </tbody>
                                 <tbody class="align-baseline" v-else>
                                    <tr class="border-0" v-for=" i in 8" :key="i">
                                        <td class="text-start ps-2 ps-lg-5"> <Skeletor /></td>
                                        <td> <Skeletor /> </td>
                                        <td><Skeletor /></td>
                                        <td> <Skeletor /> </td>
                                        <td> <Skeletor /> </td>
                                    </tr> 
                                     <!-- <Skeletor pill :shimmer="true"/> -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div class="tarde_table table-responsive ">
                            <table class="table text-center">
                                <thead>
                                    <tr class=" table-bordered rounded">
                                        <th scope="col">Name</th>
                                        <th scope="col">Last Price</th>
                                        <th scope="col">24h change </th>
                                        <th scope="col">Market</th>
                                        <th scope="col">Trade</th>
                                    </tr>
                                </thead>
                                <tbody class="align-baseline" v-if="loading">
                                    <tr class="border-0" v-for="(data , index) in TableData" :key="index">
                                        <td class="text-start ps-2 ps-lg-5"><img :src="require(`../assets/images/coins/${data.coin}`)" alt="coin icon" style="width:32px; height:30px;" class="me-3">{{data.name}}</td>
                                        <td> {{data.price}} <span> USDT</span> </td>
                                        <td> {{data.change}}</td>
                                        <td> <img src="../assets/images/coins/chart.png" alt=""></td>
                                        <td> <button type="button" class="trade_btn">Trade</button> </td>
                                    </tr> 
                                     <!-- <Skeletor pill :shimmer="true"/> -->
                                </tbody>
                                 <tbody class="align-baseline" v-else>
                                    <tr class="border-0" v-for=" i in 8" :key="i">
                                        <td class="text-start ps-2 ps-lg-5"> <Skeletor /></td>
                                        <td> <Skeletor /> </td>
                                        <td><Skeletor /></td>
                                        <td> <Skeletor /> </td>
                                        <td> <Skeletor /> </td>
                                    </tr> 
                                     <!-- <Skeletor pill :shimmer="true"/> -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div class="tarde_table table-responsive ">
                            <table class="table text-center">
                                <thead>
                                    <tr class=" table-bordered rounded">
                                        <th scope="col">Name</th>
                                        <th scope="col">Last Price</th>
                                        <th scope="col">24h change </th>
                                        <th scope="col">Market</th>
                                        <th scope="col">Trade</th>
                                    </tr>
                                </thead>
                                <tbody class="align-baseline" v-if="loading">
                                    <tr class="border-0" v-for="(data , index) in TableData" :key="index">
                                        <td class="text-start ps-2 ps-lg-5"><img :src="require(`../assets/images/coins/${data.coin}`)" alt="coin icon" style="width:32px; height:30px;" class="me-3">{{data.name}}</td>
                                        <td> {{data.price}} <span> USDT</span> </td>
                                        <td> {{data.change}}</td>
                                        <td> <img src="../assets/images/coins/chart.png" alt=""></td>
                                        <td> <button type="button" class="trade_btn">Trade</button> </td>
                                    </tr> 
                                     <!-- <Skeletor pill :shimmer="true"/> -->
                                </tbody>
                                 <tbody class="align-baseline" v-else>
                                    <tr class="border-0" v-for=" i in 8" :key="i">
                                        <td class="text-start ps-2 ps-lg-5"> <Skeletor /></td>
                                        <td> <Skeletor /> </td>
                                        <td><Skeletor /></td>
                                        <td> <Skeletor /> </td>
                                        <td> <Skeletor /> </td>
                                    </tr> 
                                     <!-- <Skeletor pill :shimmer="true"/> -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="view_more text-center">
             <router-link to="/">    
             <button type="button" class="view_btn shadow-none">View More <img src="../assets/images/icons/view_arrow.svg" alt=""> </button>
             </router-link>
            </div>

        </div>

    </section>
    <!--  ********* Features of Hideous Section *********  -->
    <section class="hideous-feature">
        <div class="container">
            <MainHeading main_heading="Features of Hideous" />

            <div class="row">
                <div class="col-md-4 col-lg-4 col-xl-4 custom-box" v-for="(data, index) in FeatureData" :key="index">
                    <div class="feature_box text-center my-4 p-3">
                        <div class="feature-image mb-4">
                            <img :src="require(`../assets/images/${data.image}`)" alt="image" class="img-fluid">
                        </div>
                        <div class="feature-heading text-capitalize mb-2">
                            <h3> {{data.heading}}</h3>
                        </div>
                        <div class="feature-para">
                            <p>{{data.para}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--  ********* STEPS TO GET STARTED *********  -->
    <section class="started_step">
        <div class="container">
            <MainHeading main_heading="Steps To Get Started" />
            <div class="row flex-column-reverse flex-lg-row">
                <div class="steps_heading col-xl-6 col-lg-6 col-md-12 align-self-center">
                    <h4 class=" mb-4"> Lorem ipsum dolor sit amet, consectetur adipiscing</h4>
                    <div class="steps_main_box d-block d-md-flex text-center text-md-start ">
                        <div class="steps_number">
                            <h2 class="p-2 me-3"> 01 </h2>
                        </div>
                        <div class="p-2 about_steps">
                            <h3 >  FUND YOUR ACCOUNT</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div class="steps_main_box d-block d-md-flex text-center text-md-start ">
                        <div class="steps_number">
                            <h2 class="p-2"> 02 </h2>
                        </div>
                        <div class="p-2 about_steps">
                            <h3 > VERIFY YOUR IDENTITY</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div class="steps_main_box d-block d-md-flex text-center text-md-start ">
                        <div class="steps_number">
                            <h2 class="p-2"> 03 </h2>
                        </div>
                        <div class="p-2 about_steps">
                            <h3 >  START TRADING</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div class="my-3 text-center text-md-start">
                        <button type="button" class="btn started_btn">GET STARTED</button>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12 ">
                    <div class="text-center mb-3">
                        <img src="../assets/images/mobile.png" alt="mobile img" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--   ************** GET IN TOUCH ***************   -->
    <section class="get_in_touch">
        <div class="container">
            <MainHeading main_heading="GET IN TOUCH" />
            <div class="row  justify-content-center">
                <div class="col-xl-4  col-lg-4 col-md-6 cus_border">
                    <div class="get_touch text-center p-4">
                        <div class="get_touch_icon mb-2 mb-md-5">
                            <img src="../assets/images/support.png" alt="support images" class="img-fluid">
                        </div>
                        <div class="get_touch_heading">
                            <h3> 24/7 SUPPORT</h3>
                        </div>
                        <div class="get_touch_para">
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                    </div>
                </div>
                <div class="col-xl-4  col-lg-4 col-md-6 cus_border">
                    <div class="get_touch text-center  p-4">
                        <div class="get_touch_icon mb-2 mb-md-5">
                            <img src="../assets/images/faq.png" alt="image" class="img-fluid">
                        </div>
                        <div class="get_touch_heading">
                            <h3> FAQS</h3>
                        </div>
                        <div class="get_touch_para">
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4  col-lg-4 col-md-6">
                    <div class="get_touch text-center p-4">
                        <div class="get_touch_icon mb-2 mb-md-5">
                            <img src="../assets/images/blog.png" alt="image" class="img-fluid">
                        </div>
                        <div class="get_touch_heading">
                            <h3> BLOGS</h3>
                        </div>
                        <div class="get_touch_para">
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import exchangedata from '@/assets/json/exchangedata'
import MainHeading from '@/components/landingpage/MainHeading.vue'
import {
    Swiper,
    SwiperSlide
}
from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay"
import {
    Autoplay,

    Navigation
} from "swiper";

export default {
    name: 'HomeView',
    components: {
        MainHeading,
        Swiper,
        SwiperSlide,

    },
    setup() {
        return {
            modules: [Autoplay, Navigation],

        }

    },
    data() {
        return {
            loading: true,
            TableData: exchangedata.TableData,
            FeatureData: exchangedata.FeatureData ,
      
         table_array: [
                {
                type: "top coins"
            }, 
            {
                type: "gainers"
            },
            {
                type: "new"
            }
            ], 
              order_type: "top coins",
    }
      },

}
</script>

<style scoped>
.home{
    z-index: 0;
    position: relative;
}
.home_banner {
    background-image: url(../assets/images/banner.png);
    position: relative;
    background-repeat: no-repeat;
    min-height: 90vh;
}

.banner_heading h1 {
    font-size: 60px;
    font-weight: 700;
    color: var(--hideous-white);
    line-height: 60px;
}

.banner_heading h1 span {
    color: var(--hideous-pink);
}

.banner_heading p {
    color: var(--hideous-grey);
    font-size: 22px;
}

.home_banner .input-group {
    border: 1px solid var(--hideous-pink);
}

.home_banner .input-group-text {
    color: var(--white);
    background-color: var(--hideous-pink);
    border: 1px solid var(--hideous-pink);
    border-radius: 2px;
}

.home_banner .form-control {
    color: var(--hideous-white);
    background-color: transparent;
    border: 1px solid var(--transparent);

}

.home_banner .form-control:focus {
    box-shadow: none;
}

/**** SLIDER  CSS ****/
.poster-slider {
    position: relative;
}

.poster-slider::before {
    background-image: var(--poster-bg);
    content: '';
    position: absolute;
    top: -134px;
    left: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    min-height: 1205px;
    z-index: -1;
}

/* Coin List CSS */
.coin_list {
    position: relative;
}

.coin_list::before {
    content: '';
    position: absolute;

}

/* NAV PILLS */
.nav-link {
    display: block;
    padding: 4px 17px;
    color: var(--hideous-white);
    font-weight: var(--fw-600);
}

.nav-link:focus,
.nav-link:hover {
    color: var(--hideous-pink);
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    background-color: var(--hideous-pink);
    margin-right: 10px;
}

/* TABLE */
.tarde_table {
    white-space: nowrap;
}

.tarde_table thead tr {
    background-color: var(--hideous-white);
}

.tarde_table th {
    width: 16%;
}

.tarde_table tbody tr {
    color: var(--hideous-white);
}
 .tarde_table thead tr th {
    color:  var(--hideous-black) ;
     font-weight: var(--fw-700);
 }
  .tarde_table tbody tr th {
    color:  var(--hideous-black) ;
     font-weight: var(--fw-500);
 }

.tarde_table tbody,
td,
tfoot,
th,
thead,
tr {
    border-style: none;
    font-size: var(--fs-14);
}

/* TABLE TRADE BUTTON */
.trade_btn {
    color: var(--white);
    cursor: pointer;
    background-color: var(--hideous-green);
    border: 1px solid transparent;
    padding: 4px 15px;

}

/* VIEW MORE BUTTON */
.view_more .view_btn {
    color: var(--hideous-pink);
    border: none;
    transition: all 0.2s ease-in-out;
    border-bottom: 2px solid transparent;
    background-color: transparent;
}

.view_more .view_btn:hover {
    border-bottom: 2px solid var(--hideous-pink);
    transition: all 0.2s ease-in-out;
}

.hideous-feature h3 {
    color: var(--hideous-white);
    font-size: 18px;
}

.hideous-feature p,
.about_steps P,
.get_touch_para p {
    color: var(--hideous-grey);
    font-size: 16px;
}

.feature_box {
    position: relative;
}

/* STARTED STEPS  */

.custom-box:nth-child(2) .feature_box,
.custom-box:nth-child(5) .feature_box {
    border-inline: 2px solid var(--hideous-dark-pink);
}

.steps_number h2 {
    color: var(--hideous-dark-pink);
    font-size: 80px;
}

.about_steps h3,
.get_touch_heading h3 {
    font-size: 20px;
    color: var(--hideous-white);
}
.get_touch_heading h3{
      color: var(--hideous-white);
}

.started_btn {
    color: var(--white);
    cursor: pointer;
    background-color: var(--hideous-pink);
    border: 1px solid var(--hideous-pink);
    padding: 10px 25px;
    border-radius: 0.25rem;
    transition: all 0.2 ease-in-out;
}
.steps_heading h4 {
      color: var(--hideous-white);
}
.started_btn:hover {
    background-color: transparent;
    color: var(--hideous-pink);
    transition: all 0.2 ease-in-out;
}

.cus_border {
    position: relative;
}

.cus_border::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 0;
    width: 1px;
    height: 165px;
    z-index: -1;
    background-color: var(--hideous-pink);
}

.get_in_touch {
    position: relative;
}

.get_in_touch::before {
    background-image: var(--get-in-bg);
    content: '';
    position: absolute;
    top: -118px;
    left: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    min-height: 845px;
    z-index: -1;
}

@media (min-width: 992px) and (max-width: 1199px) {

    .banner_heading h1 {
        font-size: 45px;
        line-height: 47px;
    }

    .home_banner {
        min-height: 70vh;
    }
}

@media (min-width:768px) and (max-width:991px) {
    section {
        padding: 40px 0;
    }

    .home_banner {
        min-height: 60vh;
    }

    /****** BANNER SECTION ******/
    .banner_heading h1 {
        font-size: 33px;
        line-height: 41px;
    }

    .banner_heading p {
        font-size: 16px;
        text-align: justify;
        word-break: break-all;
    }

    .started_step h4 {
        font-size: 16px;
        text-align: center;
        word-break: break-all;
    }

    .cus_border:nth-child(2):before {
        display: none;
    }

    .get_in_touch::before {
        top: -143px;
        min-height: 1280px;
    }
}

@media (min-width:320px) and (max-width:767px) {
    section {
        padding: 40px 0;
    }

    /****** BANNER SECTION ******/
    .banner_heading h1 {
        font-size: 29px;
        line-height: 36px;
    }

    .banner_heading p {
        font-size: 16px;
        text-align: justify;
        word-break: break-all;
    }

    .poster-slider::before,
    .custom-box:nth-child(2) .feature_box,
    .custom-box:nth-child(5) .feature_box,
    .cus_border::before {
        display: none;
    }

    .started_step h4 {
        font-size: 16px;
        text-align: center;
        word-break: break-all;
    }

}
</style>
