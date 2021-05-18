let screen = document.querySelector(".screen");
let clearBtn = document.querySelector(".btn-clear");
let equalBtn = document.querySelector(".btn-equal");
let numBtns = document.querySelectorAll(".btn.btn-grey");
let calBtns = document.querySelectorAll(".btn.btn-yellow");

function onCalculateBtnClick(e){
    //according to the W3C DOM Level 2 Event model
    //let targetText = event.target.dataset.num
    //But of course, IE is different, so the vanilla JavaScript way of handling this is
    e = e || window.event;
    let targetText = e.target || e.srcElement || e;
    if (targetText.nodeType == 3) targetText = targetText.parentNode; // defeat Safari bug

    let text = targetText.dataset.num;
    if(screen.value.includes('.') && text === '.'){
      return;
    } 
    screen.value += text;
}

function onClearBtnClick(){
  screen.value = '';
}

function onEqualBtnClick(){
  let tmpText = calculate(screen.value);
  screen.value = tmpText;
}

function calculate(text){
  try{
    return Function('"use strict";return (' + text + ')')();
  }
  catch(e){
    return '';
  }
}


function init(){
  numBtns.forEach(btn =>{
    btn.addEventListener("click", onCalculateBtnClick);
  });
  calBtns.forEach(btn =>{
    btn.addEventListener("click", onCalculateBtnClick);
  });
  
  clearBtn.addEventListener("click", onClearBtnClick);
  equalBtn.addEventListener("click", onEqualBtnClick);
}


init();