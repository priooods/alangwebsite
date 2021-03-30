<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>


<style lang="scss">
@import '@/style.scss';
body{
  margin: 0;
  background: $background;
  padding: 0;
}
</style>
