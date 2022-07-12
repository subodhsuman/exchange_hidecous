<template>
<div>
    <section class="portfolio">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <!-- PORTFOLIO HEADER -->
                    <div class="portfolio_main d-block d-md-flex  justify-content-between  align-items-center bottom_border">
                        <div class="d-block d-md-flex text-center align-items-center mb-2">
                            <p class="mb-0">PORTFOLIO</p>
                            <div class="search_box ms-3">
                                <div class="input-group input-group-sm text-start w-100">
                                    <span class="input-group-text" id="inputGroup-sizing-sm"> <img src="../assets/images/icons/search.svg" alt="search"> </span>
                                    <input type="text" class="form-control" placeholder="Search here..." aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                                </div>
                            </div>
                        </div>
                        <!-- WITHDRAW AND DEPOSIT HISTORY -->
                        <div class="wd_history d-block d-md-flex text-center">
                            <div class="w_history me-md-4 me-0">
                                <router-link to="/withdraw-history">Withdraw History </router-link>
                            </div>

                            <div class="d_history">
                                <router-link to="/deposit-history">Deposit History </router-link>
                            </div>
                        </div>
                        
                    </div>
                    <!-- PORTFOLIO BALANCE -->
                    <div class="right_heading  my-2">
                        <span> Your Balance</span>
                        <h5>2673.343458000 USDT</h5>
                    </div>

                    <!-- PORTFOLIO TABLE -->
                    <div class="table-responsive">
                        <table class="table mb-0 text-center">
                            <thead >
                                <tr>
                                    <th scope="col">ASSETS</th>
                                    <th scope="col">CURRENT PRICE</th>
                                    <th scope="col" class="d-none d-md-table-cell">QTY</th>
                                    <th scope="col" class="d-none d-md-table-cell">TOTAL</th>
                                    <th scope="col" class="d-none d-md-table-cell"> PORTFOLIO </th>
                                    <th scope="col">ACTION</th>
                                </tr>
                            </thead>
                            <tbody v-if=" loading">
                                <tr  v-for="(portfolio , index) in PortfolioData " :key="index">
                                    <td scope="row" class=" text-start ps-2 ps-xl-5">

                                        <ul class="list-unstyled d-flex mb-0 align-items-center">
                                            <li> <img :src="require(`@/assets/images/coin-list/${portfolio.image}`)" alt="coin image" class="me-2" style="width:30px; height:30px;"> </li>
                                            <li class="text-start"> {{portfolio.coin}}
                                                <p class="mb-0"> {{portfolio.name}}</p>
                                            </li>
                                        </ul>
                                    </td>
                                    <td>{{portfolio.price}}</td>
                                    <td class=" d-none d-md-table-cell">{{portfolio.qty}} </td>
                                    <td class="d-none d-md-table-cell">{{portfolio.total}}</td>
                                    <td class="d-none d-md-table-cell">
                                        <div class="data-box">
                                            <div class="progress" style="height: 8px;">
                                                <div class="progress-bar" role="progressbar" style="width:20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>

                                            </div>
                                            <div>
                                                <p class="mb-0">20%</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="portfolio_button ">
                                        <ul class="m-0 p-0 list-unstyled d-block d-lg-flex justify-content-center">
                                            <li> <button type="button" class="port_btn w_btn me-lg-2 me-0 mb-2" data-bs-toggle="modal" data-bs-target="#withdrawModal">Withdraw</button></li>
                                            <li><button type="button" class="port_btn d_btn " data-bs-toggle="modal" data-bs-target="#depositModal"> Deposit </button></li>
                                        </ul>
                                    </td>
                                </tr>

                            </tbody>

                             <tbody v-else>
                                <tr   v-for="i in 11" :key="i">
                                    <td scope="row" class=" text-start ps-2 ps-xl-5">

                                        <ul class="list-unstyled d-flex mb-0 align-items-center">
                                            <li>  <Skeletor width="25" height="25" circle /> </li>
                                            <li class="text-start"> <Skeletor width="50" height="10 " />
                                            <br>
                                                <p class="mb-0"> <Skeletor width="50" height="10 " /></p>
                                            </li>
                                        </ul>
                                    </td>
                                    <td><Skeletor /></td>
                                    <td class=" d-none d-md-table-cell"><Skeletor /></td>
                                    <td class="d-none d-md-table-cell"><Skeletor /> </td>
                                    <td class="d-none d-md-table-cell">
                                        <div class="data-box">
                                           <Skeletor />
                                        </div>
                                    </td>
                                    <td class="portfolio_button ">
                                        <ul class="m-0 p-0 list-unstyled d-block d-lg-flex justify-content-center">
                                            <li class="px-1"> <Skeletor width="60" height="15" /> </li>
                                            <li class="px-1"><Skeletor width="60" height="15" /> </li>
                                        </ul>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <!------////////WITHDRAW MODEL////////----->
                    <WithdrawModal />
                    <!------////////DEPOSIT MODEL////////----->
                    <DepositModal />
                </div>
            </div>
        </div>
    </section>

</div>
</template>

<script>
import WithdrawModal from '@/components/portfolio/WithdrawModal.vue'
import DepositModal from '@/components/portfolio/DepositModal.vue'
import exchangedata from '@/assets/json/exchangedata'
export default {
    name: 'PortfolioView',
    components: {
        WithdrawModal,
        DepositModal
    },
    data() {
        return {
            loading:true,
            PortfolioData: exchangedata.PortfolioData
        }
    },

}
</script>

<style scoped>
section {
    padding: 15px 15px;
}
.portfolio_main p ,
.right_heading h5{
    color: var(--hideous-white);
}

.table> :not(caption)>*>* {
    border-bottom-width: unset !important;
}

.portfolio {
    background-color: var(--hideous-bg);
}

.right_heading {
    color: var(--hideous-pink);
    font-size: 14px;
}

h5,
.port_head {
    font-size: 16px;
}

.portfolio tbody td p {
    color: var(--hideous-grey);
    font-size: 12px;
}

/* ************** progress bar  ************** */
.data-box .progress-bar {
    background-color: var(--hideous-pink);
}

.data-box .progress {
    background-color: var(--p2p-progress);
}

/* PORTFOLIO ACTION BUTTON  */
.port_btn {
    cursor: pointer;
    padding: 3px 14px;
    font-size: 12px;
    border-radius: 3px;
    width: 85px;
    transition: all 0.2s ease-in-out;
}

.w_btn {
    background-color: var(--red);
    color: var(--white);
    border: 1px solid var(--red);
}

.w_btn:hover {
    background-color: var(--transparent);
    color: var(--red);
    transition: all 0.2s ease-in-out;
}

.d_btn:hover {
    background-color: var(--transparent);
    color: var(--green);
    transition: all 0.2s ease-in-out;
    border: 1px solid var(--green);
}

.d_btn {
    background-color: var(--green);
    color: var(--white);
    border: 1px solid var(--green);
}

/* PORTFOLIO SEARCH BOX */

.portfolio .input-group-text {
    background-color: var(--transparent);
    border: none;
    padding: 10px;
}

.portfolio .form-control {
    color: var(--hideous-white);
    background-color: var(--transparent);
    border: none;

}

.portfolio .input-group {
    border-radius: 0;
    background: var(--portfolio-search);
}

.form-control:focus {
    box-shadow: none;
}

/* TABLE CSS*/
.portfolio thead tr th {
    border: 1px solid var(--border);
    padding: 6px 6px !important;
}

.portfolio table {
    font-size: 14px;
}

.table> :not(caption)>*>* {
    border-bottom-width: thin;
}

.portfolio th,
td {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 14%;
}

.portfolio tbody tr {
    vertical-align: middle;
    background-color: var(--port-tr);
    border-bottom: 10px solid var(--hideous-bg);
    cursor: pointer;
}
.bottom_border{
    border-bottom: 1px solid var(--border);
}
/* wd_history css */
.w_history a {
    color: var(--red);
    text-decoration: none;
    font-size: 14px;
}
.d_history a {
    color: var(--green);
    text-decoration: none;
    font-size: 14px;
}
thead tr th ,
td p {
   color: var(--hideous-white) !important;
}
tbody tr td{
      color: var(--hideous-white) !important;
}


@media all and (min-width:320px) and (max-width:768px) {
    .setting_btn {
        padding: 7px 40px !important;
    }
}
</style>
