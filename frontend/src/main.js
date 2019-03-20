import Vue from 'vue';
import Resource from 'vue-resource';
import Vuex from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCreditCard, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCreditCard, faShoppingBasket)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

import App from './components/App.vue';
import router from './router';

Vue.use(Resource);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    activeCanteen: null,
    canteens: null
  },
  mutations: {
    setCanteens (state, canteens) {
      state.canteens = canteens
    },
    setActiveCanteen (state, canteen) {
      state.activeCanteen = canteen
    }
  }
})

const app = new Vue({
  components: {
    App
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')