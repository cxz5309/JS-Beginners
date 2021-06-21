# JS BIGGINER TUTORIAL 
## 28. Analogue Clock Project
  
## 정리

#
## ✅ Canvas API
> https://developer.mozilla.org/ko/docs/Web/API/Canvas_API
> Canvas API는 JavaScript와 HTML &#60;canvas&#62; 엘리먼트를 통해 그래픽을 그리기위한 수단을 제공합니다.  
> 무엇보다도 애니메이션, 게임 그래픽, 데이터 시각화, 사진 조작 및 실시간 비디오 처리를 위해 사용됩니다.  
  
> Canvas API는 주로 2D 그래픽에 중점을 두고 있습니다.  
> WebGL API 또한 &#60;canvas&#62; 엘리먼트를 사용하며, 하드웨어 가속 2D 및 3D 그래픽을 그립니다.
#
## ✅ HTMLCanvasElement.getContext()
> https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement/getContext
> HTMLCanvasElement.getContext() 메소드는 캔버스의 드로잉 컨텍스트를 반환합니다.  
> 컨텍스트 식별자가 지원되지 않을 경우 null을 반환합니다.  
> "2d", 2차원 렌더링 컨텍스트를 나타내는 CanvasRenderingContext2D (en-US) 객체를 생성하게 합니다.
#
## ✅ CanvasRenderingContext2D
> https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
> Canvas API의 일부인 CanvasRenderingContext2D 인터페이스는 &#60;canvas&#62; 요소의 그리기 표면에 대한 2D 렌더링 컨텍스트를 제공합니다.  
> 도형, 텍스트, 이미지 및 기타 개체를 그리는 데 사용됩니다.

## ✅ translate()
## ✅ beginPath()
## ✅ arc()
## ✅ fillStyle
## ✅ fill()
## ✅ createRadialGradient()
## ✅ strokeStyle
## ✅ lineWidth
## ✅ stroke()
## ✅ rotate()
## ✅ fillText()
## ✅ moveTo()
## ✅ lineCap


#
## ✅ 힌트

function drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius*0.15 + "px arial"; //set font at 15% of radius
    ctx.textBaseline = "middle"; //set text alignment to middle
    ctx.textAlign = "center"; //set text alignment to center
    for(num=1; num < 13; num++){ //calculate the print position for each number
        ang = num *Math.PI /6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
    }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour = hour%12;
    //calculate angle of hour hand
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    //make hour hand 50% of canvas's radius
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    //calculate angle of minute hand
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    //make minute hand 80% of canvas's radius
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    //second
    //calculate angle of second hand
    second=(second*Math.PI/30);
    //make second hand 90% of canvas's radius
    drawHand(ctx, second, radius*0.9, radius*0.02);
}
#

#
## ✅ 빠른 html참조 
var canvas = document.getElementById('canvas');
