
let sendButton = document.getElementById('send');
let resetButton = document.getElementById('reset');
let form = document.getElementById('form');
let nameBox = document.getElementById('name');
let emailBox = document.getElementById('email');
let messageBox = document.getElementById('message');

const msgLimit = 100;
let savedItem;

init = ()=>{    
    savedItem = JSON.parse(getLocalStorage());
    if(savedItem === 'undefined' || savedItem === null) savedItem = [];

    form.addEventListener('submit', (event)=>{
        event.preventDefault();
    })

    sendButton.addEventListener('click', ()=>{
        //자동 삭제 기능 추가
        autoRemove(savedItem, msgLimit);

        savedItem.push(makeMessage());
        localStorage.setItem('allMessages', JSON.stringify(savedItem));
    });

    resetButton.addEventListener('click', ()=>{
        nameBox.value = "";
        emailBox.value = "";
        messageBox.value = "";
    });
}

autoRemove = (arr, limit) =>{
    if(arr.length > limit)
        arr.shift();
}

makeMessage = ()=>{
    const newName = nameBox.value;
    const newEmail = emailBox.value;
    const newMessage = messageBox.value;
    const newDate = Date().toLocaleString();
    return {
        name : newName,
        email : newEmail,
        message : newMessage,
        date : newDate
    }
}
getLocalStorage = () =>{
    let allMessages = localStorage.getItem('allMessages');
    return allMessages;
}

document.addEventListener("DOMContentLoaded", init);