import Vue from 'vue';
import App from './App.vue';

import VueAnyParallax from './components/vue-any-parallax/index';
// import VueAnyParallax from 'vue-any-parallax';

Vue.use(VueAnyParallax);

new Vue({
  el: '#app',
  render: h => h(App)
});
