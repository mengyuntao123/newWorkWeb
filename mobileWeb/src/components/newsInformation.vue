<!--  -->
<template>
<div>
   
   <div class="travel">
      <div class="zhi">
         <h3>实时更新森泰最新资讯</h3>
         <p>Real time update of Sentai's latest consultation</p>
      </div>
   </div>

  <div class="newInfor">
      <h3 style="font-weight:800;">新<span style="border-bottom:3px red solid; display:inline-block; font-weight:800; padding-bottom:.055rem">闻资</span>讯</h3>
      <ul>
          <li>
            <router-link to="/newFirst">
              <img src="../../static/img/pht/tp9.png"/>
              <p class="first">"曲高亦和众——第二届世界古都论坛在洛阳举行"</p>
              <p class="two">继10月19日二里头夏都遗址博物馆开馆之后，20日由中国博物馆协会、中国文物报社、洛阳市文.</p>
              <div class="nei">
                  <span>原创内容</span>
                  <span>2019-10-25</span>
              </div>
              </router-link>
              
          </li>

          <li>
               <router-link to="/newTwo">
              <img src="../../static/img/newCNMX/22.png"/>
              <p class="first">我和二里头有个约会——热烈祝贺二里头夏都遗址博物馆开馆</p>
              <p class="two">作为国家“十三五”重大文化工程的河南洛阳二里头夏都遗址博物馆，历经两年多的建设，终于在无数人的期盼与瞩目中于2019年10月19日正式开馆.</p>
              <div class="nei">
                  <span>原创内容</span>
                  <span>2019-10-21</span>
              </div>
               </router-link>
          </li>


          <li>
               <router-link to="/newThree">
              <img src="../../static/img/newCNMX/bn15.jpg"/>
              <p class="first">"智慧博物馆与博物馆信息化建设" 亮相洛阳博物馆发展论坛</p>
              <p class="two">2018年9月27日，以“传承与创新——数字时代下的博物馆”为主题的博物馆发展论坛在洛阳市召开。由森泰科技自主设计研发的“e导览智慧导览”.</p>
              <div class="nei">
                  <span>原创内容</span>
                  <span>2018-09-27</span>
              </div>
               </router-link>
          </li>


          <li>
               <router-link to="/newFour">
              <img src="../../static/img/newCNMX/bn14.jpg"/>
              <p class="first">"e导览"智慧导览系统获"第四届全国十佳文博技术产品及服务奖"</p>
              <p class="two">2018年8月21日，由文物保护装备产业化及应用协同工作平台和中国文物报社主办、华协国际.</p>
              <div class="nei">
                  <span>原创内容</span>
                  <span>2018-08-23</span>
              </div>
               </router-link>
          </li>


          <li>
               <router-link to="/newFive">
              <img src="../../static/img/newCNMX/tp1.png"/>
              <p class="first">森泰承接二里头夏都遗址博物馆智慧化信息平台项目</p>
              <p class="two">5月17日，洛阳市政府采购中心受洛阳市文物局委托，就二里头遗址博物馆智慧化信息平台项目进行竞争性磋商采购.</p>
              <div class="nei">
                  <span>原创内容</span>
                  <span>2018-05-17</span>
              </div>
               </router-link>
          </li>
      </ul>
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
   background: url("../../static/img/pht/ceng.png") no-repeat;
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



.newInfor{
    width: 90%;

    margin: 0 auto;
}

.newInfor h3{
    font-size: .21rem;
    font-weight: 600;
    text-align: center;
    margin-top: .12rem;
    margin-bottom: .12rem;
}
.newInfor ul{
    width: 95%;
    margin: 0 auto;
}
.newInfor ul li{
    width: 90%;
    background: white;
    box-shadow: 2px 1px 6px 3px rgba(32, 33, 36, .2);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:.2rem .2rem .2rem .2rem; 
    margin-top: .19rem;   
}


.newInfor li a{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.newInfor li .first{
    font-size: .16rem;
    font-weight: 600;
    padding-bottom: .12rem;
    line-height: .25rem;
    color:black;
}

.newInfor li .two{
    font-size: .13rem;
    color:#959ba6;
    padding-bottom: .2rem;
    line-height: .25rem;
}
.newInfor li img{
    width: 2.3rem;
    height: 1.3rem;
    padding-top: .12rem;
    padding-bottom: .2rem;
}


.nei{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.nei span{
    display: inline-block;
    font-size: .13rem;
    color:#959ba6 ;
}
</style>