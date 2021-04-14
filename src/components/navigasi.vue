<template>
  <div class="navigasi">
      <div class="d-none d-lg-flex d-xl-flex d-md-flex justify-content-center py-3">
          <p class="text-center text-uppercase cursor-pointer anim1" @click="back">Alang Institute</p>
          <div class="d-flex text-uppercase mr-auto route">
              <div class="anim2" @click="showlogin = true">
                  <router-link to="/learn">learn</router-link>
              </div>
              <span class="mx-1 anim3"> | </span>
              <div class="anim4"  @click="showlogin = false">
                  <router-link to="/about">about</router-link>
              </div>
              <span class="mx-1 anim5"> | </span>
              <div class="anim6" @click="showlogin = false">
                  <router-link to="/contact">contact</router-link>
              </div>
          </div>
          <div class="boxes" v-show="showlogin">
              <p class="my-auto text-uppercase" @click="goadmin">Masuk</p>
          </div>
          <p class="text-uppercase" v-show="showlogin == false">Pandeglang, {{times}}</p>
      </div>
        <div class="h-100">
            <div class="row justify-content-end py-4 d-blok d-lg-none d-xl-none d-md-none">
                <div ><i @click="showing = true" class='bx bx-menu-alt-right bx-md'></i></div>
            </div>
            <transition tag="div" class="div-slider" :name="showing? 'slideback' : 'slide'">
                <div class="navi position-absolute" v-show="showing">
                    <div class="d-flex py-3 px-3 justify-content-end">
                        <i @click="showing = false" class='bx bx-x bx-md'></i>
                    </div>
                    <ul class="list-unstyled pl-3">
                        <li>
                            <div @click="showing = false">
                                <router-link class="text-uppercase" to="/">Home</router-link>
                            </div>
                        </li>
                        <li>
                            <div @click="showing = false">
                                <router-link class="text-uppercase" to="/learn">learn</router-link>
                            </div>
                        </li>
                        <li>
                            <div @click="showing = false">
                                <router-link class="text-uppercase" to="/about">about</router-link>
                            </div>
                        </li>
                        <li>
                            <div @click="showing = false">
                                <router-link class="text-uppercase" to="/contact">contact</router-link>
                            </div>
                        </li>
                        <li>
                            <div @click="showing = false">
                                <router-link class="text-uppercase" to="/admin">Masuk</router-link>
                            </div>
                        </li>
                    </ul>
                </div>
            </transition>
        </div>
  </div>
</template>

<script>
import TimelineMax from 'gsap';
import moment from 'moment';
export default {
    name: 'Navigasi',
    methods:{
        back(){
            this.showlogin = true;
            return this.$router.push('/', ()=>{});
        },
        goadmin(){
            return this.$router.push('/admin',()=> {});
        },
        gettimes(){
            moment.locale('en');
            this.times = moment().format('h:mm:ss a');
        },
        animasimenu(){
            var an = new TimelineMax();
            an.reversed(!an.reversed());
        },
        halobanget(){
            return console.log("Hallo World apa kabar");
        }
    },
    data(){
        return{
            times: null,
            showlogin: true,
            showing: false
        }
    },
    mounted() {
        setInterval(() => {
            this.gettimes()
        }, 1000);
    }
    
}
</script>

<style lang="scss">
@import '../assets/font/font.scss';
@import '../style.scss';
.navigasi{
    p, .route{
        font-size: 13px;
        font-family: $font-reguler;
    }
    .anim1{
        cursor: pointer;
    }
    .route{
        margin-left: 155px;
        a{
            text-decoration: none;
        }
        a:hover{
            text-decoration: none;
        }
        
    }
    .navi{
        top: 0;
        right: 0;
        z-index: 10;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        ul li a {
            font-size: 35px;
        }
    }
}
</style>