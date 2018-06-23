# vue-any-parallax
Simple parallax component for vue

## 安装 Install

`npm i vue-any-parallax -S`

## 使用 Usage

```
import Vue from 'vue';
import App from './App.vue';

// import
import VueAnyParallax from 'vue-any-parallax';

// use
Vue.use(VueAnyParallax);

// if you need custom the component name, you can:
Vue.use(VueAnyParallax, {
  name: 'custom-name'
});

new Vue({
  el: '#app',
  render: h => h(App)
});

```
