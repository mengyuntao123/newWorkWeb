export default{
    recRem(){
        var c_w=document.documentElement.clientWidth||document.body.clientWidth;
        var s_w=375;
        document.getElementsByTagName('html')[0].style.fontSize=(c_w/s_w)*100+'px';
    }
}