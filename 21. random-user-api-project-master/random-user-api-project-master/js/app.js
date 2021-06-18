

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const street = document.getElementById("street");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const photo = document.getElementById("photo");

function UI(){
    this.btn = document.getElementById("btn");

}

UI.prototype.addListener = function(){
    this.btn.addEventListener("click", () =>{
        this.getRandomPerson(this.dataLoad);
    });
}

UI.prototype.setContent = function (firstText, lastText, streetText, phoneText, emailText, largeImg){

    firstName.innerText = firstText;
    lastName.innerText = lastText;
    street.innerText = streetText.name + " " + streetText.number;
    phone.innerText = phoneText;
    email.innerText = emailText;
    photo.src = largeImg;
}

UI.prototype.getRandomPerson = function(callback){
    const httpRequest = new XMLHttpRequest();
    const url = `https://randomuser.me/api/`;
    if(!httpRequest){
        window.alert("에러1");
    }
    
    httpRequest.onreadystatechange = () =>{
        try{
            //Loading -> DONE으로 넘어갈 경우에만 에러 체크
            if(httpRequest.readyState === XMLHttpRequest.DONE){
                if(httpRequest.status !== 200){
                    window.alert("에러3");
                }
            }
        }
        catch{
            window.alert("에러5");
        }
    }
    httpRequest.open("GET", url, true);
    const self = this;
    httpRequest.onload = function(){
        callback(httpRequest.responseText, self.setContent);
    }
    httpRequest.onerror = this.errorAlert;
        
    httpRequest.send();
}

UI.prototype.errorAlert = function(){
    window.alert("에러2");
}

UI.prototype.dataLoad = function(response, callback){
    data = JSON.parse(response).results[0];
    callback(data.name.first, data.name.last, data.location.street, data.phone, data.email, data.picture.large);
}

function init(){
    const ui = new UI();
    ui.addListener();
}

document.addEventListener('DOMContentLoaded', init());