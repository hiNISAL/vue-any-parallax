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

```
<template>
  <div>
    <vap>
      ....
    </vap>

    <custom-name>
      ...
    </custom-name>
  </div>
</template>
```

## Props

- `speed` - the transition duration.
  -  default: 100(ms)

-  `distance` - move distance
  - default: 100

- `reverse` - the offset direction
  - default: true

- `display` - the display of element
  - default: 'block'

- `timingFunction` - the timing-function of transition
  - default: 'cubic-bezier(0.960, 1.005, 0.885, 1.035)'

- `el` - The DOM element witch need bind the `mousemove` event
  - default: window
