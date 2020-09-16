layui.use('element', function(){
    var element = layui.element;
    element.init();
}); 

$(window).scroll(function(){
    var stance=$(this).scrollTop();
    var heightAn=$(".big").height()
    // console.log(stance,heightAn)
//    console.log($(".big").height()) 
if(stance>632){
    // console.log(123)
    $(".layui-nav").addClass("chang");
    
    $(".layui-nav .layui-nav-item a").css("color","black");
    $(".layui-nav .layui-nav-child a").css("color","#333");

    $(".layui-nav img").attr("src","./img/lo.png");
    // $(".layui-nav-more").css("border-top-color","black");
    // $(".layui-nav .layui-nav-mored").css("display","none")
    
}else{


    $(".layui-nav").removeClass("chang");
    $(".layui-nav .layui-nav-item a").css("color","rgba(255,255,255,.7)");
    $(".layui-nav .layui-nav-child a").css("color","#333");
    $(".layui-nav img").attr("src","./img/logo.png")
}

})