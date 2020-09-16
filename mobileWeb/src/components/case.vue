<!--  -->
<template>
<div>
   
   <div class="travel">
      <div class="zhi">
         <h3>一起了解森泰的经典历程</h3>
         <p>Learn about Sentai's brilliant history togethe</p>
      </div>
   </div>

  <div class="cat">
      <h3>经典案例</h3>

      <div class="btn">
          <p :class="{ 'active': !isActive }" @click="handleClick">博物馆</p>
          <p :class="{ 'active': isActive }" @click="handleClickOne">景区</p>
      </div>
  </div>

  <div class="liy">
      <ul v-show="!hidde">
          <li >
              <img src="../../static/img/pht/tp13.png" />
              <p>二里头夏都遗址博物馆</p>
          </li>

          <li >
              <img src="../../static/img/pht/tp12.png" />
              <p>河南博物院</p>
          </li>

          <li >
              <img src="../../static/img/pht/tp14.jpg" />
              <p>陕西历史博物馆</p>
          </li>


          <li >
              <img src="../../static/img/pht/tp10.png" />
              <p>苏州博物馆</p>
          </li>


          <li >
              <img src="../../static/img/pht/tp6.png" />
              <p>伪满皇宫博物院</p>
          </li>

          <li >
              <img src="../../static/img/pht/tp15.jpg" />
              <p>郑州博物馆</p>
          </li>

          <li >
              <img src="../../static/img/pht/tp1.png" />
              <p>新郑市旅游文物局</p>
          </li>

          <li >
              <img src="../../static/img/pht/tp2.png" />
              <p>洛阳博物馆</p>
          </li>

          <li >
              <img src="../../static/img/pht/tp3.png" />
              <p>开封博物馆</p>
          </li>
      </ul>

      <ul v-show="hidde">
          <li>
              <img src="../../static/img/pht/jq1.jpg" />
              <p>殷墟</p>
          </li>

          <li>
              <img src="../../static/img/pht/jq2.jpg" />
              <p>云台山</p>
          </li>

          <li>
              <img src="../../static/img/pht/jq3.jpg" />
              <p>神农山</p>
          </li>

          <li>
              <img src="../../static/img/pht/jq4.jpg" />
              <p>白云山</p>
          </li>

          <li>
              <img src="../../static/img/pht/jq5.jpg" />
              <p>老界岭</p>
          </li>

          <li>
              <img src="../../static/img/pht/jq6.jpg" />
              <p>老君山</p>
          </li>

          <li>
              <img src="../../static/img/pht/jq7.jpg" />
              <p>鸡冠洞</p>
          </li>

          <li>
              <img src="../../static/img/pht/jq8.jpg" />
              <p>南阳恐龙遗址园</p>
          </li>

          <li>
              <img src="../../static/img/pht/jq9.jpg" />
              <p>尧山</p>
          </li>
      </ul>
  </div>
   
</div>
</template>

<script>
export default {
data() {
return {
     isActive:true,
     hidde:false,
     litArr:[
         {img:"../../static/img/pht/tp13.png",name:"二里头夏都遗址博物馆"},
         {img:"../../static/img/pht/tp12.png",name:"河南博物院"},
         {img:"../../static/img/pht/tp14.jpg",name:"陕西历史博物馆"},
         {img:"../../static/img/pht/tp10.png",name:"苏州博物馆"},
         {img:"../../static/img/pht/tp6.png",name:"伪满皇宫博物院"},
         {img:"../../static/img/pht/tp15.jpg",name:"郑州博物馆"},
         {img:"../../static/img/pht/tp1.png",name:"新郑市旅游文物局"},
         {img:"../../static/img/pht/tp2.png",name:"洛阳博物馆"},
         {img:"../../static/img/pht/tp3.png",name:"开封博物馆"}
     ],
     sceArr:[
         {img:"../../static/img/pht/jq1.jpg",name:"殷墟"},
         {img:"../../static/img/pht/jq2.jpg",name:"云台山"},
         {img:"../../static/img/pht/jq3.jpg",name:"神农山"},
         {img:"../../static/img/pht/jq4.jpg",name:"白云山"},
         {img:"../../static/img/pht/jq5.jpg",name:"老界岭"},
         {img:"../../static/img/pht/jq6.jpg",name:"老君山"},
         {img:"../../static/img/pht/jq7.jpg",name:"鸡冠洞"},
         {img:"../../static/img/pht/jq8.jpg",name:"南阳恐龙遗址园"},
         {img:"../../static/img/pht/jq9.jpg",name:"尧山"}
     ]
}
},
methods:{
     handleClick(){
         this.isActive=!this.isActive;
         this.hidde=!this.hidde;
     },
     handleClickOne(){
         this.isActive=!this.isActive;
         this.hidde=!this.hidde;
     }
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
   background: url("../../static/img/pht/ceng123.png") no-repeat;
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


.cat{
    width: 100%;
    padding-top: .2rem;
}

.cat h3{
    text-align: center;
    font-size: .21rem;
    font-weight: 600;
}

.btn{
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .2rem auto;
}

.active{
    background: #cfcfcf !important;
}

.btn p{
    width: .9rem;
    height: .38rem;
    background: #ff2931;
    color: white;
    border-radius: .06rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.liy{
    width: 95%;
    margin: 0 auto;
    
}

.liy ul{
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}


.liy ul li{
    width: 1.5rem;
    height: 1.3rem;
    /* border: 1px red solid; */
    margin-top: .06rem;
}

.liy li img{
    width: 100%;
    height: .9rem;
}

.liy li p{
    font-size: .15rem;
    margin-top: .12rem;
    text-align: center;
}

</style>