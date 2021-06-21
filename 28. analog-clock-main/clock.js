window.onload = function () {
    var middle = document.getElementById('middle');
    var hourMark = document.getElementById('hour');
    var minuteMark = document.getElementById('minute'); 
    var secondMark = document.getElementById('second'); 
    var nums = document.querySelectorAll(".num");
    const left = 600;
    const top = 300;
    const radi = 300;

    init(middle, [hourMark, minuteMark, secondMark], nums);

    //애니메이션을 시작합니다. 
    setInterval(()=>{
        ticktock();
    }, 1000);

    function ticktock(){
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();

        hour = hour % 12;
        hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
        minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
        second=(second*Math.PI/30);
        console.log(second);
        var hourLeft = left + radi * Math.sin(hour);
        var hourTop = top - radi * Math.cos(hour);
        var minuteLeft = left + radi * Math.sin(minute);
        var minuteTop = top - radi * Math.cos(minute);
        var secondLeft = left + radi * Math.sin(second);
        var secondTop = top - radi * Math.cos(second);
        // 위치 이동 
        hourMark.style.left = hourLeft + 'px';
        hourMark.style.top = hourTop + 'px';
        minuteMark.style.left = minuteLeft + 'px';
        minuteMark.style.top = minuteTop + 'px';
        secondMark.style.left = secondLeft + 'px';
        secondMark.style.top = secondTop + 'px';
        hourMark.style.transform = `rotate(${180 * hour / Math.PI}deg)`;
        minuteMark.style.transform = `rotate(${180 * minute / Math.PI}deg)`;
        secondMark.style.transform = `rotate(${180 * second / Math.PI}deg)`;

    }


    function init(middle, eachMarks, numsMark){
        middle.style.position = 'absolute';
        middle.style.left = left + 'px';
        middle.style.top = top + 'px';

        eachMarks.forEach((val) =>{
            val.style.position = 'absolute';
            var allAngle = 0;
            
            var allLeft = left + radi * Math.sin(allAngle);
            var allTop = top - radi * Math.cos(allAngle);
            
            // 위치 이동 
            val.style.left = allLeft + 'px';
            val.style.top = allTop + 'px';
        });

        //숫자 1부터 시작, 1은 최상단에서 시계방향 1칸 움직인상태
        var numAngle = Math.PI /6;
        numsMark.forEach((val) =>{
            val.style.position = 'absolute';
            var numLeft = left + radi * Math.sin(numAngle);
            var numTop = top - radi * Math.cos(numAngle);
            val.style.left = numLeft + 'px';
            val.style.top = numTop + 'px';
            numAngle += Math.PI /6;
        })
    }
};