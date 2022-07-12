<template>
<div class="row">
    <div class="col-md-12">
        <div class="section-heading mb-3 mb-md-5 text-center">
            <h2 class="mb-0 text-uppercase">{{main_heading}}</h2>
            <img src="../../assets/images/underline.png" alt="underline" class="img-fluid">
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'MainHeading',
        props: {
            main_heading: String
        }
    }
</script>

<style scoped>
    .section-heading h2 {
        color: var(--hideous-white);
        font-size: 28px;
        position: relative;
        font-family: 'semi-bold';
    }
     /* .coin_list.section-heading h2 {
        color: var(---white);
    } */
    
    /* .asked_ques h2 {
        color: var(--hideous-white);
    } */
    /* .sub_about {
    text-align: left;
    } */
    
    @media (min-width:767px) and (max-width:991px) {
        .section-heading h2 {
            font-size: 25px;
        }
    }
    
    @media (min-width:320px) and (max-width:767px) {
        .section-heading h2 {
            font-size: 18px;
        }
    }
</style>