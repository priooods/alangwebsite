<template>
  <div class="contact" data-scroll-container>
      <div class="d-md-flex px-5">
          <div class="isi position-relative">
              <p class="text-uppercase mt-5 anim">for any enquiry <br>or just to say <span>hello</span> <br> reach out <a class="here" href="#" data-cursor-hover>here</a></p>
              <div class="line lr mt-5 w-auto"></div>
              <div class="d-flex justify-content-end my-5 ctc">
                  <h6 data-cursor-hover class="anim">info <br>@alanginstitute.com <br>(+61) 897 3748 2</h6>
                  <h6 class="mx-auto anim" data-cursor-hover>4213 Pandeglang <br> Banten (IND)<br>(+61) 897 3748 2</h6>
                  <h6 data-cursor-hover class="anim"><a href="#">Facebook</a><br><a href="">Youtube</a><br><a href="">Instagram</a></h6>
              </div>
              <div class="line ll mt-5 w-auto"></div>
              <div class="bc position-absolute">
                <h6 class="anim">we're always keen to hear <br> from other creative minds. <br>drop us a line at <br><span data-cursor-hover>career@alanginstitute.com</span></h6>
                <h5 class="position-absolute text-uppercase" id="circlekecil">want to join the crew ? want to join the crew ? want to join the crew ? want to join the crew ? want to join the crew ? </h5>
              </div>
          </div>
      </div>
      <h3 id="circlebesar">contact&nbsp;us&nbsp;contact&nbsp;us&nbsp;contact&nbsp;us&nbsp;contact&nbsp;us&nbsp;contact&nbsp;us&nbsp;contact&nbsp;us&nbsp;contact&nbsp;us&nbsp;contact&nbsp;us&nbsp;</h3>
      <cursor-fx :color="colors" :color-hover="colors"/>
  </div>
</template>

<script>
import LocomotiveScroll from '@/plugin/locomotive.js';
import Animasi from '@/plugin/animasicontact.js';
import CircleType from 'circletype';
export default {
  mixins: [LocomotiveScroll,Animasi],
  mounted() {
    this.circlefull();
    this.circle();
  },
  props:{
      colors: String
  },
  methods:{
    circle(){
      new CircleType(document.getElementById('circlekecil')).radius(200);
    },
    circlefull(){
      new CircleType(document.getElementById('circlebesar'));
    },
  }
}
</script>

<style lang="scss">
@import '@/assets/font/font.scss';
@import '../style.scss';
#circlebesar{
  font-family: $font-reguler;
  text-transform: uppercase;
  font-size: 80px;
  right: 45%;
  position: absolute;
  top: 80%;
  animation: animate 60s infinite linear;
}
.contact{
  .isi{
      margin-left: 206px;
      width: 650px;
      height: 100vh;
      padding-top: 30px;
      p{
          font-family: $font-perpetua;
          font-size: 28px;
          line-height: 26px;
          a{
              text-decoration: none;
              line-height: 0.50;
          }
      }
      .ctc{
        width: 530px;
        h6,a{
            font-family: $font-reguler;
            font-size: 13px;
            
            line-height: 16px;
            text-transform: uppercase;
        }  
        a:hover{
            text-decoration: none;
        }
      }
      .bc{
          bottom: 0px;
          right: 0px;
          h6{
              text-transform: uppercase;
              font-family: $font-reguler;
              font-size: 13px;
              line-height: 16px;
              span{
                font-family: $font-bold;
              }
          }
          #circlekecil{
            font-family: $font-bold;
            left: 50%;
            font-size: 18px;
            top: 150%;
            animation: animate 30s infinite linear;
          }
          
      }
  }
  @keyframes animate {
    0%{
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100%{
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
}
</style>