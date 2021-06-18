const jokeDIV = document.querySelector('#display-joke');

const httpRequest = new XMLHttpRequest();
const url = `https://api.chucknorris.io/jokes/random`;
function UI(){
    this.image = document.querySelector('img');
    this.button = document.querySelector('#get-joke');
}

UI.prototype.addListener = function(){
    this.button.addEventListener('click', makeJoke);
};

function makeJoke(){

    if(!httpRequest) {
        alert('XMLHTTP 인스턴스를 만들 수가 없습니다.');
        return false;
    }
    console.log(httpRequest);
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', url);
    httpRequest.send();
}

/*
통신 에러 (서버가 다운되는 상황 등) 상황에서, status 필드를 접근하려 하면 
onreadystatechange 메서드에서 예외에러를 발생 시킬 것입니다. 
이러한 문제를 예방하기 위해서 if...then 구문을 try…catch 구문으로 감싸주세요.
*/
function alertContents() {
    console.log(httpRequest);

    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            let joke = JSON.parse(httpRequest.responseText).value;
            jokeDIV.innerHTML = joke;
        } else {
            alert('요청에 문제가 발생했습니다.');
        }
    }
}

function init(){
    const ui = new UI();
    ui.addListener();
}

window.addEventListener('DOMContentLoaded', init)
