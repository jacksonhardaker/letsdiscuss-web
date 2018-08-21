<template>
    <header class="pageHeader">
      <div class="pageHeader--loggedIn flex--row-sc" v-if="isAuthenticated">
        <person-avatar :picture="personPicture" :name="personName"/>
        <span v-if="showAlias" class="font-h4">=</span>
        <person-avatar v-if="showAlias" :picture="aliasPicture" :name="aliasName"/>
        <button v-on:click="logout()" class="pageHeader--logoutBtn btn font-button">Logout</button>
      </div>
      <div class="pageHeader--loggedOut flex--row-ec" v-if="!isAuthenticated">
        <button v-on:click="login()" class="btn font-button">Login</button>
      </div>
    </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import PersonAvatar from './icons/PersonAvatar';

export default {
  name: 'PageHeader',
  computed: {
    ...mapGetters(['currentPerson', 'currentAlias', 'isAuthenticated']),
    personPicture() {
      return this.currentPerson ? this.currentPerson.picture : '';
    },
    personName() {
      return this.currentPerson ? this.currentPerson.name : '';
    },
    aliasPicture() {
      return this.currentAlias ? this.currentAlias.pictureUrl : '';
    },
    aliasName() {
      return this.currentAlias ? this.currentAlias.name : '';
    },
    showAlias() {
      return this.$router.currentRoute.meta.showAlias;
    }
  },
  methods: {
    ...mapActions({
      logout: 'logout',
      login: 'showLoginModal'
    })
  },
  components: {
    PersonAvatar
  }
};
</script>

<style lang="scss" scoped>

.pageHeader--loggedIn, .pageHeader--loggedOut {
  height: 60px;
  width: 100%;
}

.pageHeader--logoutBtn {
  margin: 0 0 0 auto;
}
</style>
