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
    meta: { auth: true },
    component: () => import( '../views/PortfolioView.vue')
  } , 
  {
    path: '/withdraw-history',
    name: 'WithdrawHistory',
    meta: { auth: true },
    component: () => import( '../views/WithdrawHistory.vue')
  } ,
  {
    path: '/deposit-history',
    name: 'DespotHistory',
    meta: { auth: true },
    component: () => import( '../views/DespotHistory.vue')
  } ,
  {
    path: '/p2p',
    name: 'P2pView',
    meta: { auth: true },
    component: () => import( '../views/P2pView.vue')
  },

  // setting page 
  {
    path: '/setting/profile',
    alias: '/settings',
    meta: { auth: true },
    name: 'ProfileView',
    component: () =>
        import ('../views/Settings/ProfileView.vue')
},
{
  path: '/setting/kycsetting',
  name: 'KycsettingView',
  meta: { auth: true },
    component: () =>
        import ('../views/Settings/KycsettingView.vue')
},
{
  path: '/setting/bank',
  name: 'BankView',
  meta: { auth: true },
    component: () =>
        import ('../views/Settings/BankView.vue')
},
{
  path: '/setting/twofactor',
  name: 'TwofactorView',
  meta: { auth: true },
    component: () =>
        import ('../views/Settings/TwofactorView.vue')
},
{
  path: '/setting/fee',
  name: 'FeeView',
  meta: { auth: true },
    component: () =>
        import ('../views/Settings/FeeView.vue')
},
{
  path: '/setting/activitylog',
  name: 'ActivitylogView',
  meta: { auth: true },
    component: () =>
        import ('../views/Settings/ActivitylogView.vue')
},
{
  path: '/setting/tradingreport',
  name: 'TradingreportView',
  meta: { auth: true },
    component: () =>
        import ('../views/Settings/TradingreportView.vue')
},
{
    path: '/setting/referrallink', 
    name: 'ReferrallinkView',
    meta: { auth: true },
    component: () =>
        import ('../views/Settings/ReferrallinkView.vue')
},
{
    path: '/setting/support', 
    name: 'SupportView',
    meta: { auth: true },
    component: () =>
        import ('../views/Settings/SupportView.vue')
},
{
    path: '/setting/ticketlist', 
    name: 'TicketlistView',
    meta: { auth: true },
    component: () =>
        import ('../views/Settings/TicketlistView.vue')
},
{
    path: '/setting/contactus',  
    name: 'ContactusView',
    meta: { auth: true },
    component: () =>
        import ('../views/Settings/ContactusView.vue')
},
{
    path: '/setting/ticketlistmodal', 
    name: 'TicketmodalView',
    meta: { auth: true },
    component: () =>
        import ('../views/Settings/TicketmodalView.vue')
},
{
    path: '/setting/mobilesetting', 
    name: 'MobileSettingView',
    meta: { auth: true },
    component: () =>
        import ('../views/Settings/Mobile/MobileSettingView.vue')
},
{
    path: '/referralpage', 
    name: 'ReferralView',
    meta: { auth: true },
    component: () =>
        import ('../views/ReferralView.vue')
},


  {
    path: '/login',
    name: 'LoginView',
 meta: { guest: true },
    component: () =>
      import('../views/auth/LoginView.vue')
  },


  {
    path: '/register',
    name: 'RegisterView',
     meta: { guest: true },
    component: () =>
      import('../views/auth/RegisterView.vue')
  },
  {
    path: '/forgot-password',
    name: 'ForgotPasswordView',
    component: () =>
      import('../views/auth/ForgotPasswordView.vue')
  },
  {
    path: '/reset-password',
    name: 'ResetPasswordView',
    component: () =>
      import('../views/auth/ResetPasswordView.vue')
  },
  {
    path: '/verify',
    name: 'VerificationView',
    component: () =>
      import('../views/auth/VerificationView.vue')
  },
  {
    path: '/verifymail',
    name: 'EmailVerifyView',
    component: () =>
      import('../views/auth/EmailVerifyView.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
function isLogin() {
  return localStorage.getItem('token');
}
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    (!isLogin()) ? next('/login') : next();
  } else if (to.matched.some(record => record.meta.guest)) {
    (isLogin()) ? next('/exchange') : next();
  } else {
    next();
  }
})

export default router
