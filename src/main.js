import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// pagination
import Pagination from 'v-pagination-3'
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { Skeletor } from "vue-skeletor"; 

//mixin 
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import SweetAlert from '@/common/mixins.js'




createApp(App).component(Skeletor.name, Skeletor).use(VueSweetalert2).mixin(SweetAlert).component('pagination', Pagination).use(store).use(router).mount('#app')
