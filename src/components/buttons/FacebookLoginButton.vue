<template>
    <button v-on:click="login()" class="btn btn--fixed-w-wide btn--facebook font-sansN7"><i class="fa fa-facebook-square fa-2x"></i> Login <span class="font-sansN4">with</span> Facebook</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: `FacebookLoginButton`,
  methods: {
    ...mapActions({
      login: 'facebookLogin'
    })
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
