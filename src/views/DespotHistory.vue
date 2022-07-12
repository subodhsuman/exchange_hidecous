<template>
<div>
    <section class="d-history px-md-5  px-0">
        <div class="container-fluid">
            <div class="row">
                 <div class="col-12">
                    <div class="mb-4">
                        <router-link to="/portfolio">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: var(--green )" viewBox="0 0 448 512">
                       <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>
                         Deposit History </router-link>
                    </div>
                 </div>
                <div class="col-12">
                   <div class="table-responsive">
                     <table class="table text-center text-white">
                        <thead>
                            <tr>
                                <th scope="col"> Symbol</th>
                                <th scope="col">Token Type</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Token Address</th>
                                <th scope="col">Status</th>
                                <th scope="col">Created At</th>

                            </tr>
                        </thead>
                        <tbody v-if="loading">
                                <!-- Data not found -->
                                <!-- <tr class="border-0 first-row">
                                    <td class="border-0" colspan="8"> Data Not Found</td>
                                </tr> -->
                                <tr v-for="(data , index) in DepositData" :key="index">
                                    <td> {{data.symbol}}</td>
                                    <td> {{data.token}}</td>
                                    <td> {{data.amount}}</td>
                                    <td> {{data.address}}</td>
                                    <td> {{data.status}}</td>

                                    <td> {{data.time}}</td>

                                </tr>
                            </tbody>
                             <tbody v-else>
                                <tr v-for="i in 5" :key="i">
                                    <td> <Skeletor /></td>
                                    <td> <Skeletor /></td>
                                    <td> <Skeletor /></td>
                                    <td><Skeletor /></td>
                                    <td> <Skeletor /></td>

                                    <td> <Skeletor /></td>

                                </tr>
                            </tbody>
                    </table>
                   </div>
                </div>
<!-- Pagination -->
                 <div class="col-12">
                    <div class="pagination_box d-flex justify-content-end" style="color:white">
                        <pagination v-model="page" :records="recordData" :per-page="perPageData" :options="options" @paginate="referrals" />
                    </div>
                </div>
            </div>
        </div>

    </section>
</div>
</template>

<script>
export default {
    name: 'DespotHistory',
     data() {
        return {
            loading: true,
             page: 1,
            recordData: 100,
            perPageData: 10,
             options: {
                edgeNavigation: false,
                chunksNavigation: false,
                chunk: 3,
                texts: false,
                format: false,
            },
            DepositData: [{
                symbol:'INR',
                token:'1',
                amount:'100',
                address:'1',
                status:'Rejected',
                time:'June 22, 2022 at 6:16:24 PM'

            },
            {
                symbol:'INR',
                token:'1',
                amount:'100',
                address:'1',
                status:'Rejected',
                time:'June 22, 2022 at 6:16:24 PM'

            }
            ,{
                symbol:'INR',
                token:'1',
                amount:'100',
                address:'1',
                status:'Rejected',
                time:'June 22, 2022 at 6:16:24 PM'

            },
            {
                symbol:'INR',
                token:'1',
                amount:'100',
                address:'1',
                status:'Rejected',
                time:'June 22, 2022 at 6:16:24 PM'

            },
            {
                symbol:'INR',
                token:'1',
                amount:'100',
                address:'1',
                status:'Rejected',
                time:'June 22, 2022 at 6:16:24 PM'

            }
            ]
        }
    },
}
</script>

<style scoped>
.d-history {
    background-color: var(--hideous-bg);
    height: 100vh;
}
.d-history a {
    color:var(--green);
    text-decoration: none;
}

thead tr {
    color: var(--hideous-white);
    font-weight: 400;
    font-size: 14px;
   
}

thead tr th {
    border: 1px solid var(--border);
      white-space: nowrap;
      font-weight: 400 !important;
}

tbody tr {
    color: var(--hideous-white);
    font-weight: 400;
    font-size: 14px;
    background-color: var(--port-tr);
    border-bottom: 1px solid var(--border);
}
table {
    white-space: nowrap;
}


.table thead>tr {
   vertical-align: bottom;
   border-bottom: 2px solid var(--border) !important;
}


</style>
