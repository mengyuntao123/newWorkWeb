<!--  -->
<template>
<div>

    <div class="footer">
        <div class="footer_center">
            <ul>
                <li>
                    <router-link :to="{ path: '/index' }">首页</router-link>
                    <span>|</span>
                </li>

                <li>
                    <router-link :to="{ path: '/museum' }">解决方案</router-link>
                    <span>|</span>
                </li>

                <li>
                    <router-link :to="{ path: '/case' }">经典案例</router-link>
                    <span> |</span>
                </li>

                <li>
                    <router-link :to="{ path: '/newsInformation' }">新闻资讯</router-link>
                    <span> |</span>
                </li>

                <li>
                    <router-link :to="{ path: '/about' }">关于我们</router-link>
                    <!-- <span>|</span> -->
                </li>
                
            </ul>


            <div class="email">
                <div class="email_left">
                    <img src="../../static/img/pione.png"/>
                    <span>400-000-0000</span>
                </div>

                <div class="email_right">
                    <img src="../../static/img/email.png"/>
                    <span>systek@126.com</span>
                </div>
            </div>


            <div class="addre">
                <p>公司地址:</p>
                <div class="ceng">
                    <p>北京市海淀区中关村东路66号1号楼21层2507-080(总公司)</p>
                    <p>河南省郑州市高新区大学科技园1号楼1 5层1513(郑州分公司)</p>
                </div>
            </div>

            <img id="ewm" src="../../static/img/ewm.png" />
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
.footer{
    width: 100%;
    height: 3.5rem;
    background: #091928;
    margin-top: .6rem;
}

.footer_center{
    width: 95%;
    margin: 0 auto;
}

.footer_center ul{
    list-style: none; 
    display: flex;
    justify-content: space-around;
    padding-top: .2rem;
}
ul li a{
    font-size: .15rem;
    color: white;
}
.footer_center ul li{
   color: white;
}

.email{
    width: 95%;
    height: .5rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    margin-top: .2rem;
    margin-bottom: .22rem;
}

.email img{
    width: .3rem;
    height: .3rem;
}

.email span{
    font-size: .15rem;
    color:white;
}

.email_left{
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}


.email_right{
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;

}

.addre{
    width: 100%;
    color:white;
    font-size: .15rem;
}


.addre p{
    
    line-height: .25rem;
}


#ewm{
    width: .65rem;
    height: .65rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
</style>