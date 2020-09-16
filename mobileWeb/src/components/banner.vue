<template>
<div>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../static/img/pht/tp1.png"/></div>
        <div class="swiper-slide"><img src="../../static/img/pht/tp2.png"/></div>
        <div class="swiper-slide"><img src="../../static/img/pht/tp3.png"/></div>
    </div>
   
</div>

 <div class="swiper-pagination" slot="pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
</div>
</template>
 
<script>
import Swiper from 'swiper'
export default {
  name: 'HelloWorld',
   
  data () {
    return {
     
    }
  },
  computed: {  
    
  }, 
  mounted () {  
   
   var swiper = new Swiper(".swiper-container", {
               autoplay:true,
               direction: "horizontal",
               loop:true,
               slidesPerView: 1,
               spaceBetween: 30,
               mousewheel: true,
               pagination: {
                   el: '.swiper-pagination',
                   clickable:true,
               },

            //    navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            //   },
           });
  }   
}
</script>
 

<style   scoped>
@import 'swiper/css/swiper.min.css' ;
.swiper-container{
    width: 95%;
    margin: 0 auto;
    /* border:1px red solid; */
    height: 1.9rem;
}

 .swiper-slide{
     width: 100% ;
     height: 1.9rem;
     /* border: 1px blue solid; */
     margin: 0 auto;
 
 }

.swiper-slide img{
    width: 100%;
    height: 100%;
    border-radius: .06rem;
}
.swiper-pagination{
    left: 50%;
    transform: translateX(-50%);
    margin-top: .06rem;
}

.swiper-pagination-clickable >>>.swiper-pagination-bullet{
     margin-left: .06rem;
}
</style>