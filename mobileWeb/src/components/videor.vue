<!-- myt -->
<template>
<div class="bg"> 
    <p class="rt" @click="skip">跳过</p>
    <div class="vedio_wra">
    <video  controls autoplay="autoplay"  id="video">
    <source src="../../static/img/propa.mp4" type="video/mp4">
        </video>
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
  skip(){
    console.log(this.$router)
    this.$router.push({path:"./index"})
  }
},
mounted() {

var that=this;
document.getElementById('video').addEventListener("ended", ()=> {
          // 跳转
        //  console.log(that.$router) 
        this.$router.push({path:"./index"})
    }, true);
},

beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:black')
  },

beforeDestroy () {
    document.querySelector('body').setAttribute('style', 'background:#fff')
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
html,body{
  width: 100%;
  height: 100%;
}
.bg{
      width:100%;
      height: 100%;
      background: url("../../static/img/skyb.png") no-repeat;
  }
.vedio_wra{
    width:3.2rem;
    height:2rem;
    /* margin: 0 auto; */
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    outline: none;
}
 video{
    width:100%;
    height:100%;
    margin: 0 auto;
    outline: none;
}
.rt{
    width: .6rem;
    height:.3rem;
    color: white;
    border: 1px #cccccc solid;
    border-radius:.1rem;
    font-size: .16rem;
    outline: none;
    text-align: center;
    line-height: .3rem;
    /* background:rgba(red, green, blue, .6); */
    /* background: #cccccc; */
    position: absolute;
    top: .2rem;
    left: 2.9rem;
} 
</style>