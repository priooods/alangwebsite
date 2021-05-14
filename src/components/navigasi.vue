<template>
  <div class="navigasi">
        <div class="md:flex hidden stiky h-auto top-0 left-0 right-0 justify-end md:py-3 px-10 anim-web">
            <div class="md:flex uppercase relative hidden mr-auto">
                <router-link class="left flex justify-start" to="/learn">
                    <div class="rounded my-auto mr-2 h-1 w-1 opacity-0"></div>
                    <p data-cursor-hover class="uppercase mr-auto cursor-pointer text-xs">labs</p>
                </router-link>
                <router-link class="left md:mx-3 flex" to="/about">
                    <div class="rounded my-auto mr-2 h-1 w-1 opacity-0"></div>
                    <p data-cursor-hover class="uppercase mr-auto my-auto cursor-pointer text-xs">about</p>
                </router-link>
                <router-link class="left flex" to="/contact">
                    <div class="rounded my-auto mr-2 h-1 w-1 opacity-0"></div>
                    <p data-cursor-hover class="uppercase mr-auto cursor-pointer text-xs">contact</p>
                </router-link>
            </div>
            <router-link to="/"><p class="uppercase title text-xs no-underline cursor-pointer md:ml-0 ml-2 my-auto">Alang Institute</p></router-link>
            <p class="uppercase hidden md:block time ml-auto text-xs">Pandeglang, {{times}}</p>
        </div>
        <div class="md:hidden block py-2 bg-nav z-30 bg-menu">
            <div class="flex justify-start">
                <router-link to="/"><p class="uppercase title cursor-pointer md:ml-0 ml-2 my-auto">Alang Institute</p></router-link>
                <div class="icons ml-auto my-auto px-2"><i class='bx bx-menu-alt-right'></i></div>
            </div>
        </div>
        <div class="min-h-screen md:hidden absolute z-20 xs:-left-96 -left-full w-full layer-menu bg-nav bg-menu">
            <div class="text-xs uppercase mt-6 ml-3 menu-mobile">
                <div class="closed">
                    <router-link to="/learn" class="flex" exact>
                        <p class="font-semibold text-3xl my-auto">labs</p>
                        <div class="rounded-full my-auto ml-4 h-2 w-2 opacity-0"></div>
                    </router-link>
                </div>
                <div class="closed">
                    <router-link to="/about" class="flex mt-3">
                        <p class="font-semibold text-3xl my-auto">about</p>
                        <div class="rounded-full my-auto ml-4 h-2 w-2 opacity-0"></div>
                    </router-link>
                </div>
                <div class="closed">
                    <router-link to="/contact" class="flex mt-3">
                        <p class="font-semibold text-3xl my-auto">contact</p>
                        <div class="rounded-full my-auto ml-4 h-2 w-2 opacity-0"></div>
                    </router-link>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import { Expo, TimelineMax } from "gsap";
import moment from 'moment';
import $ from 'jquery';
export default {
    name: 'Navigasi',
    props:{
      colors: String
    },
    methods:{
        gettimes(){
            moment.locale('en');
            this.times = moment().format('h:mm a');
        },
        animationMenu: function () {
            const tl = new TimelineMax();
            tl.fromTo(".anim-web .left, .anim-web .title, .anim-web .time", { y: -90 }, { duration: 2, stagger: 0.8, y: 0, ease: Expo.easeInOut});
        },
        animationMenuMobile: function () {
            const tl = new TimelineMax();
            tl.fromTo(".navigasi .bg-nav .title, .navigasi .bg-nav .icons", { y: -90 }, { duration: 2, stagger: 0.8, y: 0, ease: Expo.easeInOut});
        },
        menumobileanim(){
            const tl = new TimelineMax({paused: true});
            tl.to('.layer-menu', 1, { left: '0%', ease: Expo.easeInOut});
            tl.staggerFrom(".layer-menu .menu-mobile .closed",1,{ opacity: 0, x: -250, ease: Expo.easeOut }, 0.3);
            tl.reverse();
            $(document).on('click',".navigasi .icons", function(){
                tl.reversed(!tl.reversed());
            });
            $(document).on('click',".navigasi .title", function(){
                tl.reversed(!tl.reversed());
            });
            $(document).on('click',".menu-mobile .closed", function(){
                tl.reversed(!tl.reversed());
            });
        },
    },
    data(){
        return{
            times: null,
        }
    },
    mounted() {
        this.gettimes();
        this.animationMenuMobile();
        this.menumobileanim();
        this.animationMenu();
    }
    
}
</script>

<style lang="scss">
@import '../assets/font/font.scss';
@import '../style.scss';
.navigasi{
    p, .route{
        font-family: $font-reguler;
    }
}
a.active{
  .rounded{
    opacity: 1;
  }
  .rounded-full{
    opacity: 1;
  }
}
</style>