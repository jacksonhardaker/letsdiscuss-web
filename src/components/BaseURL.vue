<template>
    <span>
        {{domain}}
    </span>
</template>

<script>
export default {
  name: 'BaseURL',
  props: ['src'],
  computed: {
    domain() {
      return this.src ? new URL(this.src).hostname : '';
    }
  }
};
</script>
