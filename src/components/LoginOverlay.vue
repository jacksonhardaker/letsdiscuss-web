<template>
    <section v-if="showLoginOverlay" class="loginOverlay flex--col-cc">
        <button v-on:click="hideLoginModal()" class="loginOverlay--closeBtn btn btn--large">X</button>
        <facebook-login-button/>
        <google-login-button/>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import FacebookLoginButton from './buttons/FacebookLoginButton';
import GoogleLoginButton from './buttons/GoogleLoginButton';

export default {
  name: 'LoginOverlay',
  props: ['showLoginOverlay'],
  methods: {
    ...mapActions({
      hideLoginModal: 'hideLoginModal'
    })
  },
  components: {
    FacebookLoginButton,
    GoogleLoginButton
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/scss/colors.scss';
@import '../styles/scss/z-index.scss';

.loginOverlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: $zIndex-9--overlay;
  background-color: $black-t4;
}

.loginOverlay--closeBtn {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
