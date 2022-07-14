import { createStore } from 'vuex'

export default createStore({
  state: {
    otp: null,
    login:''
  },
  getters: {
    getOtpData(state) {
      return state.otp
    },
    getLogin(state)
    {
      return state.login
    }
  },
  mutations: {    
    otpData(state, payload) {
      state.otp = payload
    },
    setLogin(state, payload) {
      state.login = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
