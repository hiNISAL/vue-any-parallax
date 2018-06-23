import VueAnyParallax from './vue-any-parallax.vue';

const Component = {
  install: function (Vue, options = {}) {
    const name = options.name || VueAnyParallax.name;

    Vue.component(name, VueAnyParallax);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Component);
}

export default Component;
