<template>
  <div class="about" data-scroll-container>
      <div class="tops" data-scroll-section>
        <h2 data-scroll><span class="sp">we are</span></h2>
        <h2 data-scroll><span class="sp">alang institute, </span></h2>
        <h2 data-scroll><span class="sp">holding hands together </span></h2>
        <h2 data-scroll><span class="sp">advancing the city of</span></h2>
        <h2 data-scroll><span class="sp">Pandeglang with us</span></h2>
        <h2 data-scroll><span class="sp">right now</span></h2>
      </div>
      <div class="top-mid mt-5 row" data-scroll-section>
          <div class="col-md-4">
              <ul class="list-unstyled">
                  <li></li>
              </ul>
          </div>
      </div>
      <cursor-fx />
  </div>
</template>

<script>
import LocomotiveScroll from '@/plugin/locomotive.js';
import {gsap,Expo} from 'gsap';
export default {
  name: 'About',
  mounted(){
      this.anim();
  },
  methods:{
      anim(){
          let tl = new gsap.timeline();
          tl.to('.sp',{y: '0%',duration: 1.8, stagger: 0.5, ease: Expo.ease});
      }
  },
  mixins: [LocomotiveScroll],
}
</script>

<style lang="scss">
@import '@/assets/font/font.scss';
@import '../style.scss';
.about{
    padding-top: 30px;
    .tops{
        margin-top: 70px;
        h2{
            font-family: $font-perpetua;
            font-size: 85px;
            background-color: $background;
            line-height: 67px;
            text-transform: uppercase;
            overflow: hidden;
            span{
                display: inline-block;
                transform: translateY(100%);
            }
        }
    }
}
</style>
