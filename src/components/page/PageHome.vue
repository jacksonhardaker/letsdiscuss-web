<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <FacebookLoginButton/>
    <GoogleLoginButton/>
  </div>
</template>

<script>
import FacebookLoginButton from '../buttons/FacebookLoginButton';
import GoogleLoginButton from '../buttons/GoogleLoginButton';

export default {
  name: 'PageHome',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  components: {
    FacebookLoginButton,
    GoogleLoginButton
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
