import Vue from 'vue';
import App from './App.vue';
import _ from 'lodash';
import $ from 'jquery';

import './plugins';
import routes from './routes';
import Icon from 'vue-awesome/icons';
import EventBus from "./EventBus";

Vue.component('icon', Icon);

window.$ = $;
require('./assets/css/main.css');

Vue.config.productionTip = false;

Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function() {
      return EventBus;
    }
  }
});

export default new Vue({
  router: routes,
  render: h => h(App)
}).$mount('#app')
