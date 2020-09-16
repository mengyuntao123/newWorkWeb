<!--  -->
<template>
<div>
   
   <div class="travel">
      <div class="zhi">
         <h3>打造一个现代人性化的文博行业</h3>
         <p>Real time update of Sentai's latest consultation</p>
      </div>
   </div>

   <!-- <div class="lr">
       <ul>
           <li><a href="#">公司简介</a></li>
           <li><a href="#">服务优势</a></li>
           <li><a href="#">发展历程</a></li>
           <li><a href="#">专业资质</a></li>
       </ul>
   </div> -->

   <div class="into">
       <h3 style="font-weight:800;">公<span style="border-bottom:3px red solid; display:inline-block; font-weight:800; padding-bottom:.055rem">司简</span>介</h3>
       <p>北京森泰英睿传媒科技有限公司是一家专门从事智慧博物馆智慧景区综合大数据分析的研发企业。公司总部位于北京，与西安电子科技大学合作在西安成立了研发中心,并在河南设立了分公司。</p>
       <p>目前公司已成长为集产、学、研一体化的国家级高新技术企业，双软企业;具有各项国家级资质证书并在十佳文博评选活动中荣获"十佳”荣誉。公司自主研发了智慧博物馆系统和智慧景区系统，系统以大数据、云计算、物联网、互联网、虚拟显示(AR/VR)、人工智能等先进信息技术为基础，为博物馆(景区)实现智慧管理、智慧保护、智慧服务、智慧传播提供全套智慧化信息系统解决文案。</p>
      <div class="bc"><img src="../../static/img/pht/hou.png"/></div> 
   </div>
  

  <div class="nic">
      <h3 style="font-weight:800;">我们的<span style="border-bottom:3px white solid; display:inline-block; font-weight:800; padding-bottom:.055rem">服务</span>与优势</h3>

      <ul>
          <li>
              <img src="../../static/img/pht/hert.png"/>
              <p>一站式解决方案</p>
              <p>搭建各类智慧化、信息化平台，项目涵盖博物馆智慧化所有领域，提供博物馆智慧化全方位服务。</p>
          </li>


          <li>
              <img src="../../static/img/pht/team.png"/>
              <p>专业团队</p>
              <p>公司拥有技术精湛、高学历高素质的青年技术团队与专家组，具有丰富的产品开发经验项目及实施经验。</p>
          </li>

          
      </ul>


      <ul>
          <li>
              <img src="../../static/img/pht/arg.png"/>
              <p>技术领先</p>
              <p>掌握和开创行业各项领先技术，集大数据、云计算、物联网、互联网、虚拟现实(AR/VR) 、人工智能等先进信息技术为一体，务实创新，不断进取。</p>
          </li>


          <li>
              <img src="../../static/img/pht/globa.png"/>
              <p>业务领域全覆盖</p>
              <p>集智慧博物馆、智慧文旅、田野文物保护、大数据采集与输出等各项专业服务于一体，整合各类信息资源，线上线下相结合，打造文博领域生态圈。</p>
          </li>

          
      </ul>
     
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="../../static/img/pht/per.png"/>
            <p>项目规划建设</p>
            <p>为各个合作伙伴提供项目现场评估、信息项目现状详细采集、制定符合符合博物馆现状，体现用户特色的个性化实施方案。</p>
            </div>
        <div class="swiper-slide">
            <img src="../../static/img/pht/sun.png"/>
            <p>中期平台搭建</p>
            <p>公司拥有技术精湛、高学历高素质的青年技术团队与专家组，具有丰富的产品开发经验项目及实施经验。</p>
            </div>
        <div class="swiper-slide">
            <img src="../../static/img/pht/ryu.png"/>
            <p>后期运营管理</p>
            <p>为合作伙伴提供全方位的售后服务与培训服务、系统升级与维护、为博物馆、景区、及各类合作方高效运营保驾护航。</p>
            </div>
    </div>
    <!-- <div class="swiper-button-prev " style="outline:none;"></div> -->
    <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
    <!-- <div class="swiper-button-next " style="outline:none;"></div> -->
    <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
</div>
</div>
<div style="height:2.3rem;"></div>


 <div class="zhuan">
     <h3 style="font-weight:800;">专<span style="border-bottom:3px red solid; display:inline-block; font-weight:800; padding-bottom:.055rem">业资</span>质</h3>

   <Bannert></Bannert>
 </div>

</div>
</template>

<script>
import Swiper from 'swiper'
import Bannert from "./bannert"
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
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
        },
           });


var swiper1 = new Swiper(".swiper-container1", {
             loop:true,
             slidesPerView : 3,
        // slidesPerGroup : 3,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
        },
           });
},
components:{
    Bannert
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

.travel{
   width: 100%;
   height: 2.5rem;
   background: url("../../static/img/pht/cfy.png") no-repeat;
   background-size: 100% 100%;
}

.zhi{
   color:white;
   width: 100%;
   height: 1.5rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

}

.zhi h3{
   padding-top: .13rem;
   padding-bottom: .12rem;
}


.lr{
    width:95%;
    margin: 0 auto;
}

.lr ul{
    width:95%;
    margin: 0 auto;
    /* border: 1px red solid; */
    display: flex;
    justify-content: space-between;
    align-items: center;
 
}


.lr ul li{
    width: .8rem;
    height: .3rem;
    
  
    border-bottom: .02rem red solid;
    text-align: center;
    margin-left: .08rem;
    line-height: .3rem;
}

.lr li a{
    color: black;

}

.into{
    width: 95%;
    margin: 0 auto;
}

.into h3{
    font-size: .2rem;
    text-align: center;
    font-weight: 600;
    margin-top: .3rem;
    margin-bottom: .12rem;

}


.into p{
    width: 95%;
    margin: 0 auto;
    text-indent: 2em;
    text-align: justify;
    line-height: .25rem;
}

.bc{
    width: 3rem; 
    height: 2rem;
    margin: .3rem auto;
}

.bc img{
    width: 100%;
    height: 100%;
}

.nic{
    width: 100%;
    background: #187cc8;
    color:white;
    height: 7.2rem;
    position: relative;
}

.nic h3{
    text-align: center;
    font-size: .2rem;
    /* font-weight: 600; */
    padding-top: .2rem;
    padding-bottom: .3rem;
}

.nic ul{
    width: 93%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: .2rem;
}


.nic li{
    width: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.nic li img{
    width: .5rem;
    height: .5rem;
}

.nic li p{
    text-align: justify;
    padding-top: .12rem;
    padding-bottom: .13rem;
    line-height: .2rem;
}



.swiper-container{
    width: 93%;
    margin: 0 auto;
    height: 3rem;
    position: absolute;
    top: 6.6rem;
    left: 50%;
    transform: translateX(-50%);


}


.swiper-container .swiper-wrapper{
    width: 100%;
}


.swiper-container .swiper-slide {
    width: 1.8rem !important;
    height: 2rem !important;
}

.swiper-container .swiper-slide img{
    width: 1.6rem;
    height: 1.2rem;
}



.swiper-container .swiper-slide p{
    font-size: .15rem;
    width: 1.5rem;
    text-align: center;
    margin-top: .12rem;
    margin-bottom: .06rem;
    line-height: .2rem;
    color:black;
    
}


.swiper-container .swiper-slide p:nth-child(3){
    font-size: .15rem;
}

.swiper-container{
    --swiper-theme-color: #ff6600;/* 设置Swiper风格 */
    --swiper-navigation-color: red;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 30px;/* 设置按钮大小 */
  }











  .zhuan{
      width: 100%;
      background: rgba(0,0,0,0);
      height: 2rem;
  }
  .zhuan h3{
      margin-top: .3rem;
      margin-bottom: .5rem;
      text-align: center;
  }
</style>