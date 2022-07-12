<template>
<div>
    <!-- ****************************** EXCHANGE CHART ****************************** -->
    <div class="exchange-chart exchange_box">

        <div class="row">
            <div class="col-12">
                <!-- LOADER -->
                <div class="exchange_chart" v-if="loading">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
                <!-- Chart  -->
                <div class="exchange_chart text-center d-flex" v-else>
                    <h1>EXCHANGE CHART</h1>
                </div>

            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "ChartComponent",
    data() {
        return {
            loading: false
        }
    },
}
</script>

<style scoped>
/************** Exchange Chart **************/
.exchange_chart {
    color: var(--hideous-white);
    display: flex;
    align-items: center;
    min-height: 470px;
    justify-content: center;
}

.spinner-border {
    display: inline-block;
    width: 5rem;
    height: 5rem;
    vertical-align: -0.125em;
    border: 0.5em solid var(--hideous-white);
    border-right-color: transparent;
    border-radius: 50%;
    -webkit-animation: .75s linear infinite spinner-border;
    animation: .75s linear infinite spinner-border;
}
</style>
