<!--  -->
<template>
<div>
   
   <div class="travel">
      <div class="zhi">
         <h3>田野文物安全平台建设系统</h3>
         <p>全天候安全可靠的实时监控</p>
      </div>
   </div>

   <div class="platform">
      <h3>田野文物安全平台</h3>
      <p class="trl">田野文物安全平台建设系统根据田野文物保护区的结构、周边环境、用户需求以及国家、地方和行业管理部门发布的有关建设标准，综合运用电子、计算机、自动化控制、互联网、通信、安防等先进的智能化技术，进行智慧安防及导览服务系统的设计， 将技防、人防相结合为田野文物保护提供全面、科学、高效的监测、全方位的保护以及文物价值的传播。</p>
        <ul>
           <li>
              <img src="../../static/img/police.png"/>
              <p>多方位报警</p>
           </li>

           <li>
              <img src="../../static/img/nei.png"/>
              <p>全天监控</p>
           </li>

           <li>
              <img src="../../static/img/contrl.png"/>
              <p>自动化控制</p>
           </li>
        </ul>
       <div class="rtl">
           <img style="width:3rem;height:1.5rem;" src="../../static/img/wu.png"/>
       </div>
       
   </div>


<div class="platform" style="background:url('../../static/img/wg.png'); background-size:100% 100%; width:100% ">
      <h3>安防监控系统</h3>
      <p class="trl" style="width:90%; margin:0 auto;">智能监控系统基于Al智能视觉分析技术的监控跟踪，具有入侵检测、遗留物检测、物品搬移检测等功能模块，可达到性能先进、实用可靠、操作简单、维修方便、故障率低、寿命长、性能价格比合理的多方面安全防范要求。防范达到地上、地下兼顾，白天夜间全日制，全天候，防范严密，常备不懈的效果，最大限度提高安全技术防范能力，确保文物安全。</p>
        <ul>
           <li>
              <img src="../../static/img/newPro.png"/>
              <p>信息运用</p>
           </li>

           <li>
              <img src="../../static/img/fuse.png"/>
              <p>资源融合</p>
           </li>

           <li>
              <img src="../../static/img/spread.png"/>
              <p>智慧传播</p>
           </li>

           <li>
              <img src="../../static/img/data.png"/>
              <p>数据融合</p>
           </li>
        </ul>
         <div class="rtl">
         <img style="width:3rem;height:1.5rem;" src="../../static/img/visualization.png"/>
            
         </div>
        
   </div>




   <div class="platform"  style="width:100%;"> 
      <h3>报警联动</h3>
      <p style="width:90%; margin:0 auto; line-height:.25rem;">智能报警系统设置报警规则依据规则进行视频数据分析，发现异常情况时发出警报，移动端管理员可以通过手机APP与系统云平台服务系统交互，实现与保护区报警联动。</p>
      <ul>
           <li>
              <img src="../../static/img/scenic.png"/>
              <p>广播喊话</p>
           </li>

           <li>
              <img src="../../static/img/shop.png"/>
              <p>视频调看</p>
           </li>

           <li>
              <img src="../../static/img/wch.png"/>
              <p>启动公安报警</p>
           </li>


           <li>
              <img src="../../static/img/prk.png"/>
              <p>地图标识</p>
           </li>
        </ul>

     
        <div class="rtl" style="background:url('../../static/img/skyb.png'); background-size:100% 100%; width:100%;height:2rem;">
             <img style="width:3rem;height:1.5rem;" src="../../static/img/bg-comput.png"/>
         </div>

       
   </div>




   <div class="platform" style="margin-top:.8rem">
      <h3>巡查管理系统</h3>
      <p class="trl">系统按以下业务流程对文物点巡查工作进行监察，使巡查制度得到有效落实。</p>
        <ul>
           <li>
              <img src="../../static/img/opt.png"/>
              <p>巡查计划设定</p>
           </li>

           <li>
              <img src="../../static/img/plan.png"/>
              <p>巡查事件</p>
           </li>

           <li>
              <img src="../../static/img/book.png"/>
              <p>实时监测计划</p>
           </li>
           
           <li>
              <img src="../../static/img/data.png"/>
              <p>数据融合</p>
           </li>

        </ul>

        
         <div class="rtl">
             <img style="width:3rem;height:1.5rem;" src="../../static/img/poli.png"/>
         </div>
       
   </div>



   
   
</div>
</template>

<script>
export default {
data() {
return {

}
},
methods:{

},
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

.travel{
   width: 100%;
   height: 2.5rem;
   background: url("../../static/img/build.png") no-repeat;
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

.platform{
   width: 90%;
   margin: .3rem auto;
   position: relative;
   /* height: 5.3rem; */
}

.platform h3{
   text-align: center;
   font-size: .23rem;
   margin-bottom: .12rem;
   padding-top: .16rem;
}

.platform .trl{
   width: 95%;
   text-align: justify;
   text-indent: 2em;
   line-height: .25rem;
   padding-top: .12rem;

}

.platform  ul{
   display: flex;
   margin-bottom: .12rem;
   justify-content: center;
}

.platform li{
   width: 25%;
   height: 1rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}

.platform li img{
   width: .5rem;
   height: .5rem;
   margin-bottom: .06rem;
}

.platform li p{
   font-size: .13rem;
}

.bng{
   width: 100%;
   height: 2.5rem;
   background: url("../../static/img/bg_phon.png");
   background-size: 100% 100%;

}

.bng p{
   font-size: .13rem;
   margin-left: .12rem;
}

.rtl{
   width:100%;
   display: flex;
   justify-content: center;
   margin-bottom: .8rem;
}


.rtl img{
   margin-top: .3rem;
}
</style>