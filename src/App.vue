<template>
  <div id="app">
    <router-view/>
    <LoadingAnimation/>
  </div>
</template>

<script>
import LoadingAnimation from './components/LoadingAnimation';

export default {
  name: 'App',
  components: {
    LoadingAnimation
  }
}
</script>