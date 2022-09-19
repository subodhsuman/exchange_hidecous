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

// SweetAlert
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Swal from "sweetalert2";

// Mixins
const mixins = {
  methods: {
    async success(msg) {
      await Swal.fire({
        position: "top-end",
        icon:     "success",
        title:     msg,
        toast:     true,
        showConfirmButton: false,
        timer:     1500,
      });
    },
    async failed(msg) {
      await Swal.fire({
        position: "top-end",
        icon:     "error",
        title:     msg,
        toast:     true,
        showConfirmButton: false,
        timer:     1500,
      });
    },
  },
};




createApp(App).component(Skeletor.name, Skeletor).use(VueSweetalert2).mixin(mixins).component('pagination', Pagination).use(store).use(router).mount('#app')
0