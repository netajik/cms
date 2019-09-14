import Vue from 'vue';
import './plugins/fontawesome'
import App from './App.vue';
import _ from 'lodash';
import $ from 'jquery';

import './plugins';
import routes from './routes';
import Icon from 'vue-awesome/icons';

Vue.component('icon', Icon);

window.$ = $;
require('./assets/css/main.css');

Vue.config.productionTip = false;

export default new Vue({
  router: routes,
  render: h => h(App)
}).$mount('#app')
