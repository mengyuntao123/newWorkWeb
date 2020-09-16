<!--  -->
<template>
<div>
   
   <div class="travel">
      <div class="zhi">
         <h3>"e导览"智慧导览系统</h3>
         <p>传播历史文化</p>
      </div>
   </div>

   <div class="platform" >
      <h3>"E导览"智慧导览系统</h3>
      <p class="trl" style="margin:0 auto; width:90%;">
         "e导览”智慧导览系统以用户手机和移动终端导览器为载体，以物联网和本地化服务为基础，综合应用无线近程定位。 /GIS/NR展示/云计算/大数据技术，结合智能设备的加速度感应器陀螺仪等多种传感器的应用，全面实现以游客为主体，具备自动感知，在互联数据分析等智慧博物馆特征的新一代智慧导览模式。</p>
        
       <div class="rtl">
           <img style="width:3rem;height:1.5rem;" src="../../static/img/twh.png"/>
       </div>
       
   </div>


<div class="platform" style="background:url('../../static/img/coy.png'); background-size:100% 100%; width:100% ">
      <h3>不一样的导览体验</h3>
      <p class="trl" style="margin:0 auto; width:90%;">"E导览"智慧导览器具有导览模式多样化，以解决不同导览方式需求问题，成功实现了人工导览，深度解析文物背后的故事，全程自动随性讲解，媲美人工讲解，无需手动操作，根据游客的行为分析判断观众是否对文物感兴趣，从而激活讲解。导览器能推荐最任参观，游客路线。显示各项公众服务设施，提示已参观的游览地点。</p>
        <ul>
           <li>
              <img src="../../static/img/jiang.png"/>
              <p>自动导览</p>
           </li>

           <li>
              <img src="../../static/img/yan.png"/>
              <p>虚拟导览</p>
           </li>

           <li>
              <img src="../../static/img/langu.png"/>
              <p>多种语言</p>
           </li>

           <li>
              <img src="../../static/img/san.png"/>
              <p>实时查看</p>
           </li>
        
        
        </ul>


        <ul>
           <li>
              <img src="../../static/img/fenxi.png"/>
              <p>智能分析行为</p>
           </li>

           <li>
              <img src="../../static/img/hery.png"/>
              <p>贴心服务</p>
           </li>
        </ul>


         <div class="rtl">
         <img style="width:3rem;height:1.5rem;" src="../../static/img/by.png"/>
            
         </div>
        
   </div>




   <div class="platform" > 
      <h3>不一样的租赁与支付模式</h3>
     

       

        <p class="trl">"E导览"智慧导览系统具备防丢失追踪功能，采用身份证人像识别的方式，实现了无押金租贷模式和导览器智能的管理，导览器租金支付支持现金，微信。支付宝等多种支付方式，既方便了观众也提高了博物馆工作人员的效率。</p>  
        
     
        
       <div class="rtl">
         <img style="width:2rem;height:1.5rem;" src="../../static/img/py.png"/>
            
         </div>
        <!-- <img style="width:2.6rem;height:1.3rem; position: absolute; left:50%; transform: translateX(-50%);" src="../../static/img/nl.png"/> -->
   </div>




<!-- background:url('../../static/img/bgca.png'); -->
    <div class="platform" style=" background-size:100% 100%; height:4rem;width:100%; margin:0 auto">
      <h3>助力博物馆,实现博物馆公众服务最大化</h3>
      <p class="trl" style="margin:0 auto; width:90%;">
         "E导览”智慧导览系统平台不为单一博物馆设计，而是一个旅游行业应用的通用模板软件，为博物馆提供数据积累与成果应用，适合范围广，满足不同博物馆个性化需求，解决博物馆临展、特展难题。</p>
        
       <div class="rtl">
           <img style="width:3rem;height:1.5rem;" src="../../static/img/monke.png"/>
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
   background: url("../../static/img/bgr.png") no-repeat;
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
   /* position: relative; */
   /* height: 5.3rem; */
}

.platform h3{
   text-align: center;
   font-size: .21rem;
   margin-bottom: .12rem;
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