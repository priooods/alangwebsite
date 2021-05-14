<template>
    <div class="home" data-scroll-container>
        <h1 class="ai z-10 hidden md:block fixed bottom-4 left-12 text-6xl uppercase logo">ai</h1>
        <div class="md:h-screen md:pt-32 pt-20 md:mx-10 md:px-2 px-2" data-scroll-section>
            <h1 class="anim uppercase md:text-7xl text-3xl md:w-3/6 w-full -mt-1" data-scroll data-cursor-hover>belajar apapun</h1>
            <h1 class="anim uppercase md:text-7xl text-3xl md:w-3/6 w-full -mt-1" data-scroll data-cursor-hover>dari mana saja</h1>
            <h1 class="anim uppercase md:text-7xl text-3xl md:w-5/6 w-full -mt-1" data-scroll data-cursor-hover>untuk masa depan hebat</h1>
            <div class="md:ml-1">
                <p class="uppercase desc1 text-xs mt-4" data-scroll>kami percaya setiap orang memiliki kapasitas untuk menjadi kreatif, <br> Study case merupakan cara efektif untuk setiap orang mengembangkan potensinya</p>
                <p class="uppercase desc2 text-xs mt-3" data-scroll>cari tahu tentang <span class="font-semibold" id="typeit" data-cursor-hover></span></p>
            </div>
        </div>
        <div class="content">
            <div class="md:h-auto md:pl-28 md:pr-10 px-2 md:mt-0 mt-32" data-scroll-section>
                <div class="md:flex justify-end w-full relative" id="news">
                    <div data-scroll data-scroll-sticky data-scroll-target="#news" class="md:top-12 h-auto left-0 md:absolute">
                        <p class="uppercase text-3xl md:text-7xl title md:w-1/5" data-scroll data-cursor-hover>news</p>
                        <div class="line w-full md:hidden block mt-1"></div>
                    </div>
                    <div class="md:w-4/5 md:h-screen w-full md:mt-0 mt-5">
                        <div data-scroll>
                            <p class="uppercase md:text-sm text-xs">Berita untuk kamu</p>
                            <div class="line mt-2 w-full hidden md:block"></div>
                            <div class="mt-10 text-center w-full">
                                <p class="text-xs">News Not Found</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-auto md:pl-28 md:pr-10 px-2 program md:mt-40 mt-32" data-scroll-section>
                <p class="uppercase text-3xl md:text-7xl title md:w-1/5" data-scroll data-cursor-hover>program</p>
                <div class="line mt-2 w-full"></div>
                <div class="md:flex justify-start h-auto">
                    <div class="md:w-2/6 md:p-14 md:my-0 my-8">
                        <h6 class="font-semibold text-xs uppercase">Pilih berbagai program kami yang kamu suka dan kamu butuhkan. kapanpun dan dimanapun kami siap membantu kamu</h6>
                        <h6 class="font-semibold text-xs uppercase md:mt-5">Hubungi kami untuk tahu lebih jauh dari setiap program kami. Kami selalu stay untuk kamu kapanpun</h6>
                    </div>
                    <div class="md:w-4/6 h-auto">
                        <div class="md:border-r border-b border-t md:border-t-0 md:border-l md:px-6 py-6 px-2 bgs">
                            <div class="flex justify-end w-full" >
                                <h5 class="uppercase mr-auto md:text-2xl title">partnership</h5>
                                <i class='bx bx-arrow-back bx-sm bx-rotate-180 my-auto'></i>
                            </div>
                        </div>
                        <div class="md:border-r border-b md:border-l bgs  md:px-6 py-6 px-2">
                            <div class="flex justify-end w-full" >
                                <h5 class="uppercase mr-auto md:text-2xl title">podcast</h5>
                                <i class='bx bx-arrow-back bx-sm bx-rotate-180 my-auto'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-32 md:pl-28 md:pr-10 px-2 footer md:mt-32 mt-20" data-scroll-section>
                <div class="md:flex justify-start" data-scroll>
                    <div>
                        <p class="uppercase text-xs">bersama kita kembangkan potensi diri yang selama ini tertidur dan ceritakan penjalanan hebat mu dimasa depan</p>
                        <p class="font-bold mt-2 text-xs">Alang Institute</p>
                    </div>
                    <div class="my-auto ml-auto flex">
                        <p class="font-bold text-xs uppercase" data-cursor-hover>pergi ke labs</p>
                        <i class='bx bx-right-arrow-alt ml-2' data-cursor-hover></i>
                    </div>
                </div>
            </div>
        </div>
        <cursor-fx ref="cursor" class="md:block hidden" :color="colors" :color-hover="colors"/>
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
            startDelay: 5000,
            loop: true
        })
        .type("Design", {delay: 2000})
        .delete(6, {delay: 600})
        .type("sains", {delay: 2000})
        .delete(5, {delay: 600})
        .type("programming", {delay: 2000})
        .delete(11, {delay: 600})
        .type("mental health", {delay: 2000})
        .delete(13, {delay: 600})
        .type("berkebun", {delay: 2000})
        .delete(8, {delay: 600})
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
    h1, .title{
        font-family: $font-perpetua;
    }
}
</style>
