<template>
  <div id="app" v-bind:class="themes" @click="changeTheme">
    <Navigasi class="fixed md:relative top-0 left-0 right-0 bg-nav z-50"></Navigasi>
    <router-view :colors="coloring" class="min-h-screen"/>
  </div>
</template>

<script>
import Navigasi from '@/components/navigasi';
export default {
  name: 'App',
  components: { Navigasi },
  data(){
    return{
      activeOption: {
        red: 'theme-red',
        dark: 'theme-dark',
        green: 'theme-green',
        white: 'theme-white',
        pink: 'theme-pink',
        soft: 'theme-soft',
      },
      themes: 'theme-dark',
      coloring: '#A6D1C9'
    }
  },
  methods:{
    changeTheme: function(){
      switch (this.themes) {
        case 'theme-red':
          this.themes = 'theme-dark';
          this.coloring = "#A6D1C9";
          break;
        case 'theme-dark':
          this.themes = 'theme-green';
          this.coloring = "#fafaf6";
          break;
        case 'theme-green':
          this.themes = 'theme-white';
          this.coloring = "#222831";
          break;
        case 'theme-white':
          this.themes = 'theme-pink';
          this.coloring = "#282B29";
          break;
        case 'theme-pink':
          this.themes = 'theme-soft';
          this.coloring = "#E83C38";
          break;
        case 'theme-soft':
          this.themes = 'theme-red';
          this.coloring = "#E83C38";
          break;
      }
    }
  }
}
</script>
<style lang="scss">
@import '@/style.scss';
.c-scrollbar_thumb {
    width: 1px !important;
    border-radius: 0 !important;
}
</style>