"use strict";

(function () {
    document.addEventListener('DOMContentLoaded', function () {
        //모든 객체 받아오고
        const disp = new Display();
        
        disp.init();
        disp.addListener();
    })
})()

function Display() {
    this.name = document.getElementById('name');
    this.course = document.getElementById('course');
    this.author = document.getElementById('author');
    this.imgNum = 0;
    this.checkBool = false;

    this.customerList = document.querySelector('.customer-list');
    this.submitBtn = document.querySelector('.submitBtn ') //제출키  
    this.form = document.getElementById('customer-form');

    this.feedback = document.querySelector('.feedback');
    this.loading = document.querySelector('.loading');
}

Display.prototype.addListener = function(){

    this.name.addEventListener('input', (event) => {
        this.checkAll(this.name, this.course, this.author);
    });
    this.course.addEventListener('input', (event) => {
        this.checkAll(this.name, this.course, this.author);
    });
    this.author.addEventListener('input', (event) => {
        this.checkAll(this.name, this.course, this.author);
    });
    this.name.addEventListener('blur', this.checkClear);
    this.course.addEventListener('blur', this.checkClear);
    this.author.addEventListener('blur', this.checkClear);

    this.form.addEventListener ('submit', (event)=>{
        event.preventDefault();
        if(!this.checkBool){
            console.log("checkBool");
            return;
        }
        
        this.feedback.classList.add('showItem', 'alert', 'alert-success');
        this.loading.classList.add('showItem');
        
        setTimeout(() =>{
            this.addCustomer(this.customerList, this.feedback, this.loading);
        }, 3000);
    })
}

Display.prototype.addCustomer = function(customerList, feedback, loading){
    this.imgNum = (++this.imgNum) % 5;
    let htmlDiv = Display.prototype.makeCustomerHTML(this.imgNum, 
        this.name.value, this.course.value, this.author.value);
    
    customerList.innerHTML += htmlDiv;

    feedback.classList.remove('showItem', 'alert', 'alert-success');
    loading.classList.remove('showItem');

    this.init();
}

Display.prototype.init = function(){
    this.checkBool = false;
    this.name.classList.remove('complete');
    this.name.classList.remove('fail');
    this.course.classList.remove('complete');
    this.course.classList.remove('fail');
    this.author.classList.remove('complete');
    this.author.classList.remove('fail');

    this.name.value = "";
    this.course.value = "";
    this.author.value = "";

    this.submitBtn.disabled = true;
}

Display.prototype.makeCustomerHTML = function (imgNum, name, course, author) {
    return `<!-- single customer -->
    <div class="col-11 mx-auto col-md-6 col-lg-4 my-3">
     <div class="card text-left">
      <img src="./img/cust-${imgNum}.jpg" class="card-img-top" alt="">
      <div class="card-body">
       <!-- customer name -->
       <h6 class="text-capitalize ">
        <span class="badge badge-warning mr-2">name :</span>
        <span id="customer-name"> ${name}</span>
       </h6>
       <!-- end of customer name -->
       <!-- customer name -->
       <h6 class="text-capitalize my-3">
       <span class="badge badge-success mr-2">course :</span>
       <span id="customer-course">${course}</span>
        </h6>
       <!-- end of customer name -->
       <!-- customer name -->
       <h6 class="text-capitalize">
        <span class="badge badge-danger mr-2">author :</span>
        <span id="course-author"> ${author}</span>
       </h6>
       <!-- end of customer name -->
      </div>
     </div>

     <!-- single customer -->`;
}

Display.prototype.checkAll = function(n, c, a){
    this.submitBtn.disabled = true;
    if(n.value.length === 0 ||c.value.length === 0 || a.value.length === 0){
        this.checkBool = false;
        return false;
    }
    this.submitBtn.disabled = false;
    this.checkBool = true;
    return true;
}

Display.prototype.checkClear = function(){
    if(this.value.length === 0){
        this.classList.remove('complete');
        this.classList.add('fail');
        return;
    }
    this.classList.add('complete');
    this.classList.remove('fail');
}
