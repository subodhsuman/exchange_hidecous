import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/exchange',
    name: 'ExchangeView',
    
    component: () => import('../views/ExchangeView.vue')
  } , 
  {
    path: '/footer',
    name: 'MainFooter',
    component: () => import( '../components/MainFooter.vue')
  } ,  
  {
    path: '/portfolio',
    name: 'PortfolioView',
    component: () => import( '../views/PortfolioView.vue')
  } , 
  {
    path: '/withdraw-history',
    name: 'WithdrawHistory',
    component: () => import( '../views/WithdrawHistory.vue')
  } ,
  {
    path: '/deposit-history',
    name: 'DespotHistory',
    component: () => import( '../views/DespotHistory.vue')
  } ,
  {
    path: '/p2p',
    name: 'P2pView',
    component: () => import( '../views/P2pView.vue')
  },

  // setting page 
  {
    path: '/setting/profile',
    alias: '/settings',
    name: 'ProfileView',
    component: () =>
        import ('../views/Settings/ProfileView.vue')
},
{
    path: '/setting/kycsetting',
    name: 'KycsettingView',
    component: () =>
        import ('../views/Settings/KycsettingView.vue')
},
{
    path: '/setting/bank',
    name: 'BankView',
    component: () =>
        import ('../views/Settings/BankView.vue')
},
{
    path: '/setting/twofactor',
    name: 'TwofactorView',
    component: () =>
        import ('../views/Settings/TwofactorView.vue')
},
{
    path: '/setting/fee',
    name: 'FeeView',
    component: () =>
        import ('../views/Settings/FeeView.vue')
},
{
    path: '/setting/activitylog',
    name: 'ActivitylogView',
    component: () =>
        import ('../views/Settings/ActivitylogView.vue')
},
{
    path: '/setting/tradingreport',
    name: 'TradingreportView',
    component: () =>
        import ('../views/Settings/TradingreportView.vue')
},
{
    path: '/setting/referrallink',
    name: 'ReferrallinkView',
    component: () =>
        import ('../views/Settings/ReferrallinkView.vue')
},
{
    path: '/setting/support',
    name: 'SupportView',
    component: () =>
        import ('../views/Settings/SupportView.vue')
},
{
    path: '/setting/ticketlist',
    name: 'TicketlistView',
    component: () =>
        import ('../views/Settings/TicketlistView.vue')
},
{
    path: '/setting/contactus',
    name: 'ContactusView',
    component: () =>
        import ('../views/Settings/ContactusView.vue')
},
{
    path: '/setting/ticketlistmodal',
    name: 'TicketmodalView',
    component: () =>
        import ('../views/Settings/TicketmodalView.vue')
},
{
    path: '/setting/mobilesetting',
    name: 'MobileSettingView',
    component: () =>
        import ('../views/Settings/Mobile/MobileSettingView.vue')
},
{
    path: '/referralpage',
    name: 'ReferralView',
    component: () =>
        import ('../views/ReferralView.vue')
},


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
