<template>
  <div>
    <div :style="style" class="vap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vap',
  props: {
    speed: {
      default: 100,
      type: Number
    },
    distance: {
      default: 100,
      type: Number
    },
    reverse: {
      default: true,
      type: Boolean
    },
    display: {
      default: 'block',
      type: String
    },
    el: {
      default: () => window
    },
    timingFunction: {
      default: 'cubic-bezier(0.960, 1.005, 0.885, 1.035)',
      type: String
    },
    use: {
      default: undefined,
      type: Boolean
    }
  },
  data() {
    return {
      style: {
        transition: 'all .3s',
        transform: ''
      }
    };
  },
  mounted() {
    this.style.transition = `${ this.speed / 1000 }s ${ this.timingFunction }`;
    this.style.display = this.display;
    this.bind();
  },
  methods: {
    bind() {
      this.el.addEventListener('mousemove', e => {
        if (!this.use) return;
        const { clientX, clientY } = e;

        let wRate = -((clientX / document.documentElement.clientWidth) - 0.5);
        let hRate = -((clientY / document.documentElement.clientHeight) - 0.5);

        if (!this.reverse) {
          wRate = -wRate;
          hRate = -hRate;
        }

        this.style = Object.assign(this.style, {
          transform: `translate3d(${ wRate * this.distance }px, ${ hRate * this.distance }px, 0)`
        });

      });
    }
  }
}
</script>

<style>
  .vap {
    
  }
</style>
