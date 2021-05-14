<template>
  <div class="contact min-h-screen" data-scroll-container>
      <div class="md:flex justify-center block md:px-0 px-2"  data-scroll-section>
          <div class="w-full md:w-3/6 md:mt-20 md:pt-0 relative">
              <p data-scroll class="uppercase anim md:text-lg pt-20 md:pt-0 md:mt-8">untuk setiap pertanyaan atau<br> katakan <a class="here" href="#" data-cursor-hover>hallo</a> kepada kami</p>
              <div class="line lr mt-10 w-auto mb-10"></div>
              <div class="grid md:grid-cols-3 grid-cols-2 md:gap-1 gap-2 ctc">
                  <h6 data-cursor-hover data-scroll class="anim text-xs uppercase">info@alanginstitute.com <br> (+62) 813 9849 8822</h6>
                  <h6 data-scroll class="anim text-xs uppercase">4213 Pandeglang, Banten (IND)<br>(+62) 896 4381 6568</h6>
                  <h6 data-scroll class="anim text-xs uppercase">
                    <a href="https://www.facebook.com/priooods/">Facebook</a><br>
                    <a href="#" class="my-2">Youtube</a><br>
                    <a href="https://www.instagram.com/priooods/">Instagram</a></h6>
              </div>
              <div class="line ll w-auto mt-10"></div>
              <div class="bc h-full relative">
                <div class="md:absolute relative md:bottom-4 right-0">
                  <h6 data-scroll class="anim uppercase md:static absolute top-52 right-0 text-xs">kami selalu ingin mendengar <br> semua pikiran kreatif kamu <br>hubungi kami <br><span data-cursor-hover>career@alanginstitute.com</span></h6>
                  <h5 data-scroll class="uppercase absolute md:left-0 left-52 right-0 md:-top-28 top-14" id="circlekecil">bergabung dengan kami ? bergabung dengan kami ? bergabung dengan kami ? bergabung dengan kami ? bergabung dengan kami ? </h5>
                </div>
              </div>
          </div>
      </div>
      <cursor-fx class="md:block hidden" :color="colors" ref="cursor" :color-hover="colors" disabled/>
  </div>
</template>

<script>
import LocomotiveScroll from '../plugin/locomotive.js';
import Animasi from '@/plugin/animasicontact.js';
import CircleType from 'circletype';
export default {
  mixins: [LocomotiveScroll,Animasi],
  mounted() {
    this.circle();
  },
  props:{
      colors: String
  },
  methods:{
    circle(){
      new CircleType(document.getElementById('circlekecil')).radius(100);
    },
  }
}
</script>

<style lang="scss">
#circlekecil{
  animation: animate 30s infinite linear;
}
@keyframes animate {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>