<template>
  <div class="hello">
   <div class="audio">
     
     <div class="innovate">
       <p>打造智慧文博生态圈</p>
       <h3>智慧引领   技术创新</h3>
       <p>理念创新 / 勤于思考 / 实在耕耘 / 科技先导</p>
      <div class="handle" @click="handleAuClick">
        <p>
          <img src="../../static/img/rightarro.png" />
          <span>公司简介</span>
        </p>
        
      </div>
     </div>


     <div>
  
     
     </div>
   </div>

   <div class="charac">
     <h3>我们的<span style="border-bottom:3px red solid; display:inline-block; font-weight:800; padding-bottom:.055rem">产品</span>特点</h3>
     <div class="more">
        <div class="more_ct">
          <div class="use">
          <img src="../../static/img/tre.png"/>
          <p>多领域应用</p>
          </div>
          <p class="rty">集智慧博物馆、智慧文旅、田野</p>
          <p class="rty">文物保护、大数据采集与输出等各项专业服务于一体,整合</p> 
          <p class="rty">各类信息资源，线上线下相结合，打造文博领域生态圈。</p> 
        </div>
     </div>


     
   </div>

    <div class="char-more">
       <div class="more">
        <div class="more_ct">
          <div class="use">
          <img src="../../static/img/zhuan.png"/>
          <p>现代化设计</p>
          </div>
          <p class="rty">采用现代化机器承载设备，方便操作简单易用，后期维护更新快，故障率低。</p>
        </div>
     </div>



     <div class="more">
        <div class="more_ct">
          <div class="use">
          <img src="../../static/img/arrol.png"/>
          <p>智能操作</p>
          </div>
          <p class="rty">建设"智慧导览系统"，”票务管理系统"、"客流监测管理系统"、"智慧导览系统"、"智慧停车管理系统"、"博物馆网站"、给你带来全新的智慧化体验。</p>
        </div>
     </div>
     </div>


    <div class="skyBlue">
      <img src="../../static/img/comuh.png"/>
      <div class="skTop"></div>
    </div>


   <div class="resolve">
      <h3 style="font-weight:800;">解<span style="border-bottom:3px red solid; display:inline-block; font-weight:800; padding-bottom:.055rem">决方</span>案</h3>
      <div class="resolt_ct">
         <h3>"e导览" 智慧导览</h3>
         <p>综合应用多种现代化科学技术;以观众为主体、以助力博物馆实现服务观众数量最大化以及智慧化为目标;在租赁、导览、数据提供等多方面领先的与创新的新一代智慧导览系统。</p>
        <div class="arrow">
          <router-link to='/guid' >more</router-link>
          
          <img src="../../static/img/index/ar.png"/>
        </div>

        <div class="ff">
        <img src="../../static/img/index/iPhone.png"/>
        </div>
       
      </div>



      
      <div class="resolt_ct">
         <h3>智慧博物馆</h3>
         <p>运用智能传感、物联网、云计算、大数据、移动通讯等信息技术，搭建信息化基础平台，构建博物馆各要素之间的双向多元的信息交互和远程控制与管理，提升博物馆文物保护、研究、管理和公众服务的能力，为博物馆全面实现智慧化提供一站式解决方案。</p>
        <div class="arrow">
          <router-link to='/museum'>more</router-link>
         
          <img src="../../static/img/index/ar.png"/>
        </div>

        <div class="ff">
        <img src="../../static/img/index/docuble.png"/>
        </div>
       
      </div>



      <div class="resolt_ct">
         <h3>智慧文旅平台</h3>
        <p>采用全数字高清网络摄像头，结合智能导播技术，实现全天候实时直播景区风景，监控景区安全。</p>
        <div class="arrow">
          <router-link to='/travel'>more</router-link>
          
          <img src="../../static/img/index/ar.png"/>
        </div>

        <div class="ff">
        <img src="../../static/img/index/secon.png"/>
        </div>
       
      </div>




      <div class="resolt_ct">
         <h3>田野文物安全平台建设系统</h3>
         <p>采用适合野外工作的4G、5G 网络传输信号，配合高清智能视频设备及地波微触动探测技术，报警联动，实现对遗址区全方位安全监测与保护。</p>
        <div class="arrow">
          <router-link to='/culturalRelics'>more</router-link>
         
          <img src="../../static/img/index/ar.png"/>
        </div>

        <div class="ff">
        <img src="../../static/img/index/byg.png"/>
        </div>
       
      </div>
   </div>
   


    <div class="swiper">
      <h3 style="font-weight:800;">最<span style="border-bottom:3px red solid; display:inline-block; font-weight:800; padding-bottom:.055rem">新消</span>息</h3>

      <div class="el">
        <p>北京森泰英睿签约二里头夏都遗址博物馆</p>
        <p>发布时间:2019-05-17</p>
      </div>



      <Bannery></Bannery>


     <p style="width:85%;margin:.6rem auto; font-size:.15rem;line-height:.25rem ">二里头夏都遗址博物馆项目占地208亩，建设规模3.1万平方米，总投资6.3亿元，计划于2019年10月建成，届时将成为全国大遗址保护、展示和利用的示范区，中国早期国家形成和发展研究展示中心，商周断代工程和中华文明探源工程研究、展示基地，在文博行业具有里程碑式的的意义......</p>
    </div>
    
  </div>
</template>

<script>
import Bannery from "./banner.vue"
export default {
  name: '',
  data () {
    return {
        
    }
    
  },
 
 methods:{
   handleAuClick(){
    this.$router.push({path:"./videor"})
   }
 },
  components:{
    Bannery
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello{
  width: 100%;
}
.audio{
   width:100%;
   height: 2.3rem;
   background: url("../../static/img/index/ro.png") no-repeat;
   background-size: 100% 100%;
   display: flex;
   /* align-items: center; */
   z-index: -1;
}

.innovate{
  width: 100%;
  height: 1.3rem;
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: .3rem;font-size: .16rem;
}

.innovate h3{
  font-size: .22rem;
  margin-top: .12rem;
  margin-bottom: .12rem;
}

.handle{
  width:1rem;
  height: .3rem;
  background: #ff2931;
  border-radius: .2rem;
  border: .02rem solid white;
  margin-top: .08rem;
}

.handle p{
  width: 95%;
  height: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.handle p img{
  width: .12rem;
  height: .15rem;
}

.handle p span{
  font-size: .12rem;
  margin-left: .06rem;
}

.charac{

  width: 66%;
  margin: 0 auto;
}

.charac h3{
  font-size: .2rem;
  font-weight: bold;
  text-align: center;
  margin-top: .5rem;
  margin-bottom: .3rem;

}



.use{
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: .06rem;
  margin-bottom: .06rem;

}

.use img{
  width: .45rem;
  /* height: .5rem; */
  margin-top: .12rem;
  margin-bottom: .1rem;

}

.use p{
  margin-bottom: .2rem;
  font-weight: 600;
}
.rty{
  width: 90%;
  margin: 0 auto;
  font-size: .15rem;
  line-height: .2rem;
  text-align: center;
  
}
.char-more{
  width: 95%;
  margin: .3rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
}
.char-more .more{
  width: 50%;
}

.skyBlue{
  width: 100%;
  position: relative; 
  height: 1rem;
  background: #091928;
  margin-top: 1.6rem;
}

.skyBlue img{
  width: 2.3rem;
  height: 1.3rem;
  position: absolute;
  top: -16%;
  left: 50%;
  transform: translate(-50%,-50%);
}


.resolve{
  width: 100%;
}


.resolve h3{
  text-align: center;
  font-weight: 600;
  margin-top: .5rem;
  margin-bottom: .3rem;
 
}


.resolt_ct{
  width: 90%;
  margin: 0 auto;
}

.resolt_ct h3{
  font-weight: 500;
  margin-top: .1rem;
  margin-bottom: .12rem;
}

.resolt_ct p{
  width: 86%;
  margin: 0 auto;
  font-size: .15rem;
  line-height: .25rem;
}

.arrow{
  width: 21%;
  height: .2rem;
  margin: .12rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: .16rem;
}


.arrow a{
  color: #ff2931;
}

.arrow img{
  width: .2rem;
  height: .15rem;
}

.ff{
  width: 3.5rem;
  height: 2.5rem;
  margin: 0 auto;
}

.ff img{
  width: 100%;
  height: 100%;
}


.swiper{
  width: 100%;

}

.swiper h3{
  text-align: center;
  font-weight: 600;
  margin-top: .5rem;
  margin-bottom: .3rem;
}
.el{
  width: 95%;
  margin: 0 auto;
}


.el p:nth-child(1){
  
  
  font-weight: 600;
}
.el p:nth-child(2){
  margin-top: .12rem;
  font-size: .13rem;
  margin-bottom: .12rem;
}
</style>
