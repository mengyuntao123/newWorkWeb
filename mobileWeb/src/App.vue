<template>
  <div id="app">
    <Header v-show="!(path==='/videor')" ></Header>
   
    <router-view/>
    <Footer v-show="!(path==='/videor')"></Footer>
  </div>
</template>

<script>
import Header from "../src/components/header"
import Footer from "../src/components/footer"
import Re from "../static/res"
export default {
  name: 'App',
  data(){
     
     return{
       path:""
     }
  },
  mounted(){
    Re.recRem();
    window.onresize=Re.recRem;
    this.path=this.$route.path;
    // console.log(this.path)
  },
  watch:{
    $route(to,from){
      // console.log(this.path)
      this.path=to.path;

    }
  },
  components:{
    Header,
    Footer
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: "Microsoft YaHei";
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
