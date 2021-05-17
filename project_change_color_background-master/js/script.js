btn = document.querySelector(".btn.btn-outline-secondary");

const color = ['red', 'blue', ]
btn.addEventListener('click', changeBackground);

function changeBackground(){
    
    var r = parseInt(Math.random() * 256);
    var g = parseInt(Math.random() * 256);
    var b = parseInt(Math.random() * 256);

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}