<!--  -->
<template>
<div class="header">

    <div class="header_ct">
        <img class="logo" src="../../static/img/lo.png" alt="">
        <img class="tabrl" @click="handleClick" src="../../static/img/tabel.png"/>
    </div>

    <div class="lyr">
        
        <ul @click="hjk" v-show="adie" class="animated fadeInLeft" >
            <li><router-link to="/index" exact>首页</router-link></li>
            <li><router-link to='/museum' exact>智慧博物馆</router-link></li>
            <li><router-link to='/travel' exact>智慧文旅文化</router-link></li>
            <li><router-link to='/guid' exact>智慧导览系统</router-link></li>
            <li><router-link to='/culturalRelics' exact>田野文物安全</router-link></li>
            <li><router-link to='/case' exact>经典案例</router-link></li>
            <li><router-link to='/newsInformation' exact>新闻资讯</router-link></li>
            <li><router-link to='/about' exact>关于我们</router-link></li>   
        </ul>
    </div>
</div>
</template>

<script>
export default {
data() {
return {
   adie:false
}
},
methods:{
 
 hjk(){
     this.adie=!this.adie
 },

 handleClick(){
     this.adie=!this.adie
 }
},
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
@import "../../static/animate";
.header{
    width: 100%;
    height: .8rem;
    position: relative;
}


.header_ct{
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.logo{
    width:1.6rem;
    height: .6rem;
}

.tabrl{
    width: .5rem;
    height: .5rem;
}
.lyr ul{
    z-index: 999;
    position: absolute;
    top: .8rem;
    background: rgba(255, 255,255, 1);
    /* border-radius: .12rem; */
    box-shadow: 2px 1px 6px 3px rgba(32, 33, 36, .2);
}


.lyr ul li{
    width: 2rem;
    /* border: 1px red solid; */
    border-top:1px rgba(0, 0,0, .3) solid;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
    
}


.lyr li a{
    width: 1.2rem;
    /* border: 1px red solid; */
    height: .3rem;
    color: black ;
    display: inline-block;
}

.active{
    color:red !important;
}
</style>