<template>
  <div class="home" data-scroll-container>
      <h1 class="ai text-uppercase logo">ai</h1>
      <div class="top container" data-scroll-section>
        <h1 class="anim w-auto" data-scroll data-cursor-hover>learn anything, <br> from everywhere <br> and accelerate future</h1>
        <div class="inl">
            <p class="text-uppercase mt-4 desc1" data-scroll>we believe everyone has the capacity to be creative, <br> study case is a place where people develop their own potential</p>
            <p class="text-uppercase desc2" data-scroll>want to learn <span id="typeit" data-cursor-hover></span></p>
        </div>
      </div>
      <cursor-fx />
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
    padding-top: 30px;
    h1{
        font-family: $font-perpetua;
        text-transform: uppercase;
        line-height: 50px;
        font-size: 60px;
    }
    .top{
        margin-top: 90px;
        p{
            font-family: $font-reguler;
            font-size: 14px;
            margin-left: 5px;
        }
        #typeit{
            color: $red;
            font-family: $font-bold;
        }
    }
    .ai{
        color: $primary;
        position: fixed;
        bottom: 20px;
        left: 20px;
        font-family: $font-perpetua;
    }
}
</style>
