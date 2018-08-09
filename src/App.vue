<template>
  <div id="app">
    <router-view class="app" v-bind:class=" { 'blurred': !isAuthenticated }"/>
    <global-loading-animation/>
    <login-overlay/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import GlobalLoadingAnimation from './components/GlobalLoadingAnimation';
import LoginOverlay from './components/LoginOverlay';

export default {
  name: 'App',
  computed: {
      ...mapGetters(
          ['isAuthenticated']
      )
  },
  components: {
    GlobalLoadingAnimation,
    LoginOverlay
  }
}
</script>

<style lang="scss">
.app {
  filter: blur(0);
  transition: filter 0.4s ease-in;
}

.app.blurred {
  filter: blur(5px);
}
</style>
