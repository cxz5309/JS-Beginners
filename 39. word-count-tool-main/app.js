let button = document.getElementById('btn')

let word = document.getElementById('str');
let outputDiv = document.getElementById('output');

init = function (){
    button.addEventListener('click', ()=>{
        outputDiv.innerHTML = `<h1>${word.value.length}</h1>`;
    })
}

document.addEventListener('DOMContentLoaded', init);
