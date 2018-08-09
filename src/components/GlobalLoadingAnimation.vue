<template>
  <div class="global-loading">
    <loading-animation :show="show" :animate="animate"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LoadingAnimation from './LoadingAnimation';

function delayAnimation() {
  const delay = this.showLoadingAnimation ? 0 : 400;

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(this.showLoadingAnimation), delay);
  });
}

export default {
  name: 'GlobalLoadingAnimation',
  computed: {
    ...mapGetters({
      showLoadingAnimation: 'showLoadingAnimation'
    }),
    show() {
      return this.showLoadingAnimation;
    }
  },
  asyncComputed: {
    animate: {
      async get() {
        return await delayAnimation.call(this);
      },
      watch() {
        this.showLoadingAnimation;
      }
    }
  },
  components: {
    LoadingAnimation
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/scss/z-index.scss';

$dimensions--loading: 100px;

.global-loading {
  position: fixed;
  top: calc(50vh - #{$dimensions--loading});
  left: calc(50% - #{$dimensions--loading});
  z-index: $zIndex-8--loadingAnimation;
}
</style>

