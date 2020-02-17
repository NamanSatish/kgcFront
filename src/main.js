import Vue from 'vue';
import App from './App.vue';
import Router from './router';
import BootstrapVue from 'bootstrap-vue';
import Notifications from 'vue-notification';
import Vuex from 'vuex';
import VueCrypt from 'vue-crypt'
import VueFormGenerator from 'vue-form-generator'
import FormBuilder from 'v-form-builder';


import 'vue-form-generator/dist/vfg.css'
import 'vue-good-table/dist/vue-good-table.css'
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'es6-promise/auto';
import 'vue-form-generator/dist/vfg.css'

import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.component('FormBuilder', FormBuilder);
Vue.use(VueFormGenerator)
Vue.use(VueAxios, axios);
Vue.use(VueCrypt)
Vue.use(BootstrapVue);
Vue.use(Notifications);
Vue.use(Vuex);

import { store } from './store/store.js';

Vue.config.productionTip = false
new Vue({
  router: Router,
  store,
  render: h => h(App),
}).$mount('#app')
