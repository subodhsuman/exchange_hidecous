import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    otp: null,
    login:'',
    list:[]
  },
  getters: {
    getOtpData(state) {
      return state.otp
    },
    getLogin(state)
    {
      return state.login
    },
    getList(state) {
      return state.list
    }
  },
  mutations: {    
    otpData(state, payload) {
      state.otp = payload
    },
    setLogin(state, payload) {
      state.login = payload
    },
    TiketList(state, payload) {
      state.list = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
