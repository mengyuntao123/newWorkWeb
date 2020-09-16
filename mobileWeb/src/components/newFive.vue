<!--  -->
<template>
<div>
   
   <div class="travel">
      <div class="zhi">
         <h3>实时更新森泰最新资讯</h3>
         <p>Real time update of Sentai's latest consultation</p>
      </div>
   </div>

   <div class="article">
       <h3>喜报！——
            北京森泰英睿签约二里头夏都遗址博物馆
        </h3>

       <p style="font-size:.13rem;text-indent:0em;">上传时间:2019年05月17日</p>
       <p>2019年5月17日，二里头夏都遗址博物馆智慧化信息平台项目的承接单位尘埃落定，北京森泰英睿传媒科技有限公司获此殊荣。</p>

       <!-- <div class="lgk">
           <img src="../../static/img/pht/dgh.png"/>
       </div> -->
       <p>二里头夏都遗址博物馆项目占地208亩，建设规模3.1万平方米，总投资6.3亿元，计划于2019年10月建成，届时将成为全国大遗址保护、展示和利用的示范区，中国早期国家形成和发展研究展示中心，夏商周断代工程和中华文明探源工程研究、展示基地，在文博行业具有里程碑式的的意义。</p>
       <p>此时二里头遗址博物馆智慧化信息平台包括：云服务平台/数字资源综合管理平台/文化智慧化管理系统/综合业务协同管理系统/智慧票务管理系统/智慧导览系统等系统的系统集成及硬件安装。智慧化平台搭建完成以后，将向公众提供智慧化的公共服务。</p>
       <div class="lgk">
           <img src="../../static/img/newCNMX/tp2.png"/>
       </div>
       <p>二里头遗址博物馆智慧化信息平台，将充分利用物联网/云计算/大数据/移动互联/人工智能等信息技术，通过对遗址和文物信息的数字化采集/加工/存储/管理和利用，实现文物数据的永久保存和多样化应用；通过公众信息的采集/应用和大数据分析，为公众提供线上线下多渠道的服务平台，公众能够方便快捷/优质高效地获取文物相关的知识，使文化历史信息的传播效能最大化。从而充分实现博物馆科学研究/社会教育/公众服务的职能。</p>

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

.article{
    width:90%;
    margin: 0 auto;
}

.article h3{
    font-size: .2rem;
    font-weight: 600;
    margin-top: .2rem;
    margin-bottom: .12rem;
}

.article p{
    text-indent: 2em;
    text-align: justify;
    line-height: .25rem;
    margin-top: .12rem;
}

.lgk{
    width: 2.5rem;
    height: 1.5rem;
    margin: 0 auto;
    margin-top: .2rem;
    margin-bottom: .12rem;
}

.lgk img{
    width: 100%;
    height: 100%;
}
</style>