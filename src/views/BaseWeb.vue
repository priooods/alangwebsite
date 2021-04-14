<template>
  <div id="baseweb" v-bind:class="themes" @click="changeTheme">
    <Navigasi class="navigasi"/>
    <router-view class="view" :colors="coloring" />
  </div>
</template>

<script>
import Navigasi from '@/components/navigasi';
export default {
    name: "BaseWeb",
    components: {Navigasi},
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
@import '../style.scss';
body{
  margin: 0;
  padding: 0;
}
.view,.navigasi{
  padding-left: 30px;
  padding-right: 30px;
}
.navigasi{
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1;
  right: 0px;
}

.c-scrollbar_thumb {
    // background-color: var(sty) !important;
    opacity: 1 !important;
    width: 6px !important;
    border-radius: 0 !important;
}
</style>