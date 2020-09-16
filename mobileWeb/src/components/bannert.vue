<!--  -->
<template>
<div>
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="../../static/img/one.png"/>
            </div>
       
        <div class="swiper-slide">
            <img src="../../static/img/2.jpg"/>
            </div>
        <div class="swiper-slide">
            <img src="../../static/img/3.jpg"/>
            </div>
        <div class="swiper-slide">
            <img src="../../static/img/5.jpg"/>
            </div>
         <div class="swiper-slide">
            <img src="../../static/img/5.jpg"/>
            </div>
    </div>
   
</div>
</div>
</template>

<script>
import Swiper from 'swiper'
export default {
data() {
return {

}
},
methods:{

},
mounted() {
var swiper = new Swiper(".swiper-container", {
             autoplay:true,
             loop:true,
             slidesPerView : 2,
        // slidesPerGroup : 3,
            //   navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
           });
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

.swiper-container{
    width: 93%;
    margin: 0 auto;
    height: 1.2rem;

}


.swiper-container .swiper-wrapper{
    width: 100%;
}


.swiper-container .swiper-slide {
    width: 1.8rem !important;
    height: 1.2rem !important;
}

.swiper-container .swiper-slide img{
    width: 1.6rem;
    height: 1.2rem;
}


.swiper-container{
    --swiper-theme-color: #ff6600;/* 设置Swiper风格 */
    --swiper-navigation-color: balck;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 30px;/* 设置按钮大小 */
  }

</style>