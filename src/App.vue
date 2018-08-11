<template>
  <div id="app">
    <page-header/>
    <router-view class="app" v-bind:class=" { 'blurred': showLoginOverlay }"/>
    <global-loading-animation/>
    <login-overlay :showLoginOverlay="showLoginOverlay"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import PageHeader from './components/PageHeader';
import GlobalLoadingAnimation from './components/GlobalLoadingAnimation';
import LoginOverlay from './components/LoginOverlay';

export default {
  name: 'App',
  computed: {
      ...mapGetters(
          ['isAuthenticated', 'displayLoginModal']
      ),
      showLoginOverlay() {
        return this.displayLoginModal || !this.isAuthenticated && !this.$router.currentRoute.meta.guest;
      }
  },
  components: {
    GlobalLoadingAnimation,
    LoginOverlay,
    PageHeader
  }
}
</script>

<style lang="scss">
.app {
  filter: blur(0);
  transition: filter 0.4s ease-in;
}

.app.blurred {
  filter: blur(3px);
}
</style>
