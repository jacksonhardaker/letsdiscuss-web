<template>
    <header class="pageHeader shadow-1" v-if="isAuthenticated">
      <person-avatar :picture="personPicture" :name="personName"/>
      <span class="font-h4">=</span>
      <person-avatar :picture="aliasPicture" :name="aliasName"/>
      <button v-on:click="logout()" class="btn font-button">Logout</button>
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
    }
  },
  methods: {
    ...mapActions(['logout'])
  },
  components: {
    PersonAvatar
  }
};
</script>

<style lang="scss" scoped>
.pageHeader {
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
