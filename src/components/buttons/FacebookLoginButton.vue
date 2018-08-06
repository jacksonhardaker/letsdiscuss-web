<template>
    <button v-on:click="login()" class="btn btn--facebook font-sansN7"><i class="fa fa-facebook-square fa-2x"></i> Login <span class="font-sansN4">with</span> Facebook</button>
</template>

<script>
export default {
  name: `FacebookLoginButton`,
  methods: {
    login () {
        console.log('[Attempting to login with Facebook...]');

      this.$store.dispatch('FACEBOOK_AUTH_REQUEST', {}).then((res) => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss">
@import '../../styles/scss/colors.scss';

.btn--facebook {
  background-color: $fb-blue-dark;
  color: $white;
}

.btn--facebook:active {
  background-color: $fb-blue-med;
}

.btn--facebook > .font-sansN4 {
  color: $white-t8;
  margin: 0 0.6ch;
}

.btn--facebook > .fa {
  margin: 0 1ch 0 0;
}
</style>
