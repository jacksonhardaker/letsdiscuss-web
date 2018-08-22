<template>
  <main class="pageHome flex--col-cs">
    <section class="pageHome--intro">
      <div class="pageHome--introBackground"></div>
      <blockquote class="pageHome--introContent font-h6">So we might do well to ease up on “as a” — on the urge to underwrite our observations with our identities. <q>For me,</q> Professor Spivak once tartly remarked, <q>the question ‘Who should speak’ is less crucial than ‘Who will listen?’</q>
      <p>- Kwame Anthony Appiah</p></blockquote>
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
  background-color: $green;
  transform: skew(-8deg, -7deg);
}

.pageHome--introContent {
  position: relative;
  z-index: $zIndex-1;
}
</style>

