import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
 
  linkExactActiveClass:"active",
  routes: [
    
    {
      path: '/',
      redirect:"/index"
    },
  
    {
      path: '/index',
      name: 'index',
      component: ()=>import("../components/index")
    },

    {
      path: '/travel',
      name: 'travel',
      component: ()=>import("../components/travel")
    },

    {
      path: '/culturalRelics',
      name: 'culturalRelics',
      component: ()=>import("../components/culturalRelics")
    },

    {
      path: '/guid',
      name: 'guid',
      component: ()=>import("../components/guid")
    },

    {
      path: '/museum',
      name: 'museum',
      component: ()=>import("../components/museum")
    },

    {
      path: '/about',
      name: 'about',
      component: ()=>import("../components/about")
    },

    {
      path: '/case',
      name: 'case',
      component: ()=>import("../components/case")
    },

    {
      path: '/newsInformation',
      name: 'newsInformation',
      component: ()=>import("../components/newsInformation")
    },


    {
      path: '/bannert',
      name: 'bannert',
      component: ()=>import("../components/bannert")
    },


    {
      path: '/newFirst',
      name: 'newFirst',
      component: ()=>import("../components/newFirst")
    },

    {
      path: '/newTwo',
      name: 'newTwo',
      component: ()=>import("../components/newTwo")
    },

    {
      path: '/newThree',
      name: 'newThree',
      component: ()=>import("../components/newThree")
    },


    {
      path: '/newFour',
      name: 'newFour',
      component: ()=>import("../components/newFour")
    },
    {
      path: '/newFive',
      name: 'newFive',
      component: ()=>import("../components/newFive")
    },

    {
      path: '/videor',
      name: 'videor',
      component: ()=>import("../components/videor")
    },
    
  ]
})



