<template>
  <div class="navigasi">
      <div class="d-none d-lg-flex d-xl-flex d-md-flex justify-content-center py-3">
          <p class="text-center text-uppercase cursor-pointer anim1" @click="back">Alang Institute</p>
          <div class="d-flex-inline text-uppercase mr-auto route">
              <router-link to="/learn" class="anim2">learn</router-link>
              <span class="mx-1 anim3"> | </span>
              <router-link to="/about" class="anim4">about</router-link>
              <span class="mx-1 anim5"> | </span>
              <router-link to="/contact" class="anim6">contact</router-link>
          </div>
      </div> 
  </div>
</template>

<script>
export default {
    name: 'Navigasi',
    methods:{
        back(){
            return this.$router.push('/');
        },
    },
    mounted() {
      this.animation();  
    },
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
    p:hover, span{
        cursor: pointer;
    }
    .route{
        margin-left: 155px;
        a{ color: $primary; }
        a.active{ color: $red; }
        a:hover{
            color: $red;
            text-decoration: none;
        }
        
    }
    .eng{
        color: $red;
    }
}
</style>