<template>
    <div class="articleInput">
        <div class="articleInput--content flex--col-cc">
            <label class="articleInput--label font-overline">Start the Discussion</label>
            <input class="articleInput--text-input font-h5" v-model="articleUrl" type="text"/>
            <button v-on:click="submit()" class="btn font-button">Start the discussion</button>
            <loading-animation class="articleInput--loading" :show="loading" :animate="loading"/>
        </div>
        <login-overlay :showLoginOverlay="showLogin"/>
    </div>
</template>

<script>
import LoadingAnimation from '../LoadingAnimation';
import FacebookLoginButton from '../buttons/FacebookLoginButton';
import GoogleLoginButton from '../buttons/GoogleLoginButton';
import LoginOverlay from '../LoginOverlay';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ArticleInput',
  data: function() {
    return {
      articleUrl: '',
      loading: false,
      showLogin: false
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapActions({
      showLoginModal: 'showLoginModal',
      hideLoginModal: 'hideLoginModal',
      submitNewArticle: 'submitNewArticle'
    }),
    submit() {
      this.loading = true;

      if (!this.isAuthenticated) {
        console.log(
          '[Not logged it, so cannot submit article... Logging in...]'
        );
        this.showLoginModal();
      } else {
        console.log('[Logged in, so submitting article...]');

        this.submitNewArticle(this.articleUrl);
      }
    }
  },
  watch: {
    isAuthenticated(newVal, oldVal) {
      if (newVal === true && this.loading) {
        // this.loading = false;
        this.submit();
      }
    }
  },
  components: {
    LoadingAnimation,
    LoginOverlay
  }
};
</script>

<style lang="scss" scoped>
@import '../../styles/scss/colors.scss';

.articleInput--content {
  position: relative;
  width: 400px;
  height: 140px;
  border: 1px solid $black-t4;
}

.articleInput--label {
  background-color: $white;
  position: absolute;
  top: -7px;
}

.articleInput--text-input {
  border: none;
  border-bottom: 1px solid $black-t2;
  width: 80%;
  outline: 0;
  margin-bottom: 20px;
}

.articleInput--loading {
  position: absolute !important;
}
</style>
