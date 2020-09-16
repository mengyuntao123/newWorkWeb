  // 初始化画布
  let ele = document.getElementById('my_canvas');
  ele.width = ele.offsetWidth;
  ele.height = ele.offsetHeight;
  let ctx = ele.getContext('2d');

  // 创建圆点集合数组
  let circles=[];
  let circleCount=35;
  let currentPoint=new currentCircle(0,0);
  // 初始化circleCount个圆
  function init(){
      for(let i=0;i<circleCount;i++){
          circles.push(new circle(random(0,ele.width),random(0,ele.height)));
      }
      draw();
  }
  init();


  window.requestAnimationFrame = window.requestAnimationFrame
                                  || window.mozRequestAnimationFrame
                                  || window.webkitRequestAnimationFrame
                                  || window.msRequestAnimationFrame
                                  || function(callback){
                                      setInterval(callback,16.7)
                                      };

  function random(min,max){
      return min+Math.random()*(max-min);
  }


  // 通过调用draw()方法，实现每一次80个点的位置的变化（看似实在运动）
  function draw(){
      // 清空上一次的画布
      ctx.clearRect(0,0,ele.width,ele.height);

      for(let i=0;i<circles.length;i++){
          circles[i].move(ele.width,ele.height);
          circles[i].drawCircle(ctx);
          for(let j=i+1;j<circles.length;j++){
              circles[i].drawLine(ctx,circles[j]);
          }
      }
      if(currentPoint.x){
          currentPoint.drawCircle(ctx);
          for(let k=0;k<circles.length;k++){
              currentPoint.drawLine(ctx,circles[k]);
          }
      }
      requestAnimationFrame(draw);
  }
  // 鼠标移进
   window.onmousemove= function (event){
      let e = event|| window.event;
      let scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
      let scrollY = document.documentElement.scrollTop || document.body.scrollTop;
      currentPoint.x = e.pageX || e.clientX + scrollX;
      currentPoint.y= e.pageY || e.clientY + scrollY;
  }
  // 鼠标移出
  window.onmouseout = function() {
      currentPoint.x = null;
      currentPoint.y = null;
  }


  function currentCircle(x,y){
     circle.call(this,x,y)
     this.drawCircle=function (ctx){
         ctx.beginPath();
         ctx.arc(this.x,this.y,this.radius,0,360);
         ctx.fillStyle='rgba(255,255,255,0)';
         ctx.fill();
     }
  }

  // 创建圆(构造器函数)
  function circle(x,y){
      this.x=x;
      this.y=y;
      this.radius=random(.8,4);
      // 偏移
      this.speed_x=random(-1,1);
      this.speed_y=random(-1,1);

      // 移动
      this.move=function (width,height){
          this.speed_x=(this.x<width && this.x>0)?this.speed_x:(-this.speed_x);
          this.speed_y=(this.y<width && this.y>0)?this.speed_y:(-this.speed_y);
          this.x+=this.speed_x;
          this.y+=this.speed_y;
      }

      // 画圆
      this.drawCircle=function (ctx){
          ctx.beginPath();
          ctx.fillStyle=`rgba(158, 225, 241, 0.8)`
          ctx.arc(this.x,this.y,this.radius,0,360);
          ctx.fill();
      }

      // 画连线
      this.drawLine=function(ctx,_circle){
          let dx=this.x-_circle.x;
          let dy=this.y-_circle.y;
          let d=Math.sqrt( Math.pow(dx,2) + Math.pow(dy,2) );
          // 勾股定理求距离
          if(d<120){
              ctx.beginPath();
              ctx.moveTo(this.x,this.y);
              ctx.lineTo(_circle.x,_circle.y);
              ctx.strokeStyle='rgba(158, 225, 241, 0.8)';
              ctx.stroke();
          }
      }
  }