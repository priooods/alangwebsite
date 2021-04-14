<template>
  <div class="home" data-scroll-container>
      <h1 class="ai text-uppercase logo">ai</h1>
      <div class="top w-100 row" data-scroll-section>
        <h1 class="anim w-100 col-12" data-scroll data-cursor-hover>learn anything, <br class="d-none d-md-flex d-lg-flex d-xl-flex"> from everywhere <br> and accelerate future</h1>
        <div class="inl col-12">
            <p class="text-uppercase mt-4 desc1" data-scroll>we believe everyone has the capacity to be creative, <br> study case is a place where people develop their own potential</p>
            <p class="text-uppercase desc2" data-scroll>want to learn <span id="typeit" data-cursor-hover></span></p>
        </div>
      </div>
      <cursor-fx :color="colors" :color-hover="colors"/>
  </div>
</template>

<script>
import LocomotiveScroll from '@/plugin/locomotive.js';
import Animasi from '@/plugin/animasihome.js';
import TypeIt from 'typeit';
export default {
  name: 'Home',
  mixins: [LocomotiveScroll,Animasi],
  mounted(){
      this.type();
  },
  props:{
      colors: String
  },
  methods: {
      type(){
        new TypeIt("#typeit", {
            speed: 120,
            startDelay: 8000,
            loop: true
        })
        .type("Design", {delay: 2000})
        .delete(6, {delay: 600})
        .type("Math", {delay: 2000})
        .delete(4, {delay: 600})
        .type("physics", {delay: 2000})
        .delete(7, {delay: 600})
        .type("biology", {delay: 2000})
        .delete(7, {delay: 600})
        .type("farming", {delay: 2000})
        .delete(7, {delay: 600})
        .type("entrepreneur", {delay: 2000})
        .go();
      }
  },
}
</script>
<style lang="scss">
@import '@/assets/font/font.scss';
@import '../style.scss';
.home{
    padding-top: 120px;
    h1{
        font-family: $font-perpetua;
        text-transform: uppercase;
        line-height: 50px;
        font-size: 60px;
        max-width: 100%;
    }
    .top{
        p{
            font-family: $font-reguler;
            font-size: 14px;
            margin-left: 5px;
        }
        #typeit{
            font-family: $font-bold;
        }
    }
    .ai{
        position: fixed;
        bottom: 20px;
        left: 20px;
        font-family: $font-perpetua;
    }
}
@media (max-width: 700px){
    .home{
        padding-top: 100px !important;
        h1{
            line-height: 40px;
            font-size: 50px;
        }
    }
    .ai{
        visibility: hidden;
    }
}
</style>
