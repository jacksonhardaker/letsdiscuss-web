<template>
    <button v-on:click="login()"  class="btn btn--fixed-w-wide btn--google font-sansN7"><i class="fa fa-google fa-2x"></i> Login <span class="font-sansN4">with</span> Google</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: `GoogleLoginButton`,
  methods: {
    ...mapActions({
      login: 'googleLogin'
    })
  }
};
</script>

<style lang="scss">
@import '../../styles/scss/colors.scss';

.btn--google {
  background-color: $gp-red;
  color: $white;
}

.btn--google:active {
  background-color: $gp-grey-light;
}

.btn--google > .font-sansN4 {
  color: $white-t8;
  margin: 0 0.6ch;
}

.btn--google > .fa {
  margin: 0 1ch 0 0;
}
</style>
