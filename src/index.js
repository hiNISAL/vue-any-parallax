import Vue from 'vue';
import App from './App.vue';

import VueAnyParallax from './components/vue-any-parallax/index';

Vue.use(VueAnyParallax);

new Vue({
  el: '#app',
  render: h => h(App)
});
