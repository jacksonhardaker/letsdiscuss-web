<template>
  <main class="pageHome flex--col-cs">
    <section class="pageHome--intro">
      <div class="pageHome--introBackground"></div>
      <p class="pageHome--introContent font-h6">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.”</p>
    </section>
    <article-input/>
    <loading-animation class="pageHome--loading" :show="false" :animate="false"/>
    <facebook-login-button v-if="false"/>
    <google-login-button v-if="false"/>
  </main>
</template>

<script>
import FacebookLoginButton from '../buttons/FacebookLoginButton';
import GoogleLoginButton from '../buttons/GoogleLoginButton';
import LoadingAnimation from '../LoadingAnimation';
import ArticleInput from '../input/ArticleInput';

export default {
  name: 'PageHome',
  components: {
    FacebookLoginButton,
    GoogleLoginButton,
    LoadingAnimation,
    ArticleInput
  }
};
</script>

<style lang="scss" scoped>
@import '../../styles/scss/colors.scss';
@import '../../styles/scss/z-index.scss';

.pageHome {
  padding-top: 50px;
  min-height: calc(100vh - 50px);
}

.pageHome--intro {
  width: 500px;
  max-width: calc(100% - 60px);
  position: relative;
  margin-bottom: 60px;
}

.pageHome--introBackground {
  position: absolute;
  width: 90%;
  height: 90%;
  top: 5%;
  left: 5%;
  background-color: $red-light;
  transform: skew(-8deg, -7deg);
}

.pageHome--introContent {
  position: relative;
  z-index: $zIndex-1;
}
</style>

