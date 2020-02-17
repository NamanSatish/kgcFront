import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
      pdfInfo:"",
    },
    mutations:{
      change_pdfInfo(state,payload){
        state.pdfInfo = payload;
      },
    },
    getters: {
      pdfInfo: state => state.pdfInfo,
    }
})
export default store