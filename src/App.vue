<template>
  <div id="app">
    <router-view/>
    <GlobalLoadingAnimation/>
  </div>
</template>

<script>
import GlobalLoadingAnimation from './components/GlobalLoadingAnimation';

export default {
  name: 'App',
  components: {
    GlobalLoadingAnimation
  }
}
</script>