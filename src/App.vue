<template>
  <div id="app">
    <Navigasi class="navigasi"/>
    <router-view class="view"/>
  </div>
</template>

<script>
import {TimelineMax, Expo} from 'gsap';
import Navigasi from '@/components/navigasi';
export default {
  name: 'App',
  components:{Navigasi},
  mounted(){
        this.animation();
        this.check();
  },
  methods:{
      animation(){
          TimelineMax.to(".contact", 1,{
              left: 0,
              ease: Expo.easeInOut
          });
          // tl.staggerForm(".cls > div", 0.8,{
          //     y: 100,
          //     opacity: 0,
          //     ease: Expo.easeInOut
          // }, "0.1","-=0.4");
          // tl.reverse();
      },
      check(){
        console.log("Hallo");
      }
  }
}
</script>


<style lang="scss">
@import '@/style.scss';
body{
  margin: 0;
  padding: 0;
}
#app{
  background: $background;
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
  background-color: $accent !important;
  opacity: 1 !important;
  width: 6px !important;
  border-radius: 0 !important;
}
</style>
