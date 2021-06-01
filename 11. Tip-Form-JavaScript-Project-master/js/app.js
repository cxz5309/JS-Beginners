const feedback = document.querySelector('.feedback');
const select = document.querySelector('#input-service');
const inputForm = document.querySelector('form');

let isAnim = false;

const services = [{
    value: 1,
    title: "great - 20%"
}, {
    value: 2,
    title: "good - 10%"
}, {
    value: 3,
    title: "bad - 2%"
}]


function showError(billAmount, numUsers, selectedService) {
    feedback.innerHTML = '';
    let isFeedback = false;

    if (billAmount === "" || billAmount <= "0") {
        feedback.classList.add('showItem', 'alert-danger');
        feedback.innerHTML += `<p>Number of Bill amount must be greater than zero</p>`
        isFeedback = true;
    }

    if (numUsers <= "0") {
        feedback.classList.add('showItem', 'alert-danger');
        feedback.innerHTML += `<p>Number of users must be greater than zero</p>`;
        isFeedback = true;
    }

    if (selectedService === "0") {
        feedback.classList.add('showItem', 'alert-danger');
        feedback.innerHTML += `<p>You must select a Service</p>`
        isFeedback = true;
    }
    return isFeedback;
}

function calculate(billAmount, numUsers, selectedService) {
    let percentTip = '';

    if (selectedService === "1") {
        percentTip = 0.2;
    } else if (selectedService === "2") {
        percentTip = 0.1;
    } else {
        percentTip = 0.02;
    }

    const tipAmount = Number(billAmount) * percentTip;
    const totalAmount = Number(billAmount) + Number(tipAmount);
    const eachPerson = Number(totalAmount) / Number(numUsers);

    return [tipAmount, totalAmount, eachPerson];
}

function onClickCalculate(e) {
    if (isAnim){
        e.preventDefault();
        return;
    }
    e.preventDefault();

    feedback.classList.remove('showItem', 'alert-danger');

    const inputBill = document.querySelector('#input-bill');
    const inputUsers = document.querySelector('#input-users');
    const serviceValue = document.querySelector('#input-service');

    let billAmount = inputBill.value;
    let numUsers = inputUsers.value;
    let selectedService = serviceValue.value;

    const isFeedback = showError(billAmount, numUsers, selectedService);

    if (!isFeedback) {
        const loader = document.querySelector('.loader');
        const resultsDOM = document.querySelector('.results');
        const tipResultsDOM = document.querySelector('#tip-amount');
        const totalAmountDOM = document.querySelector('#total-amount');
        const eachPersonDOM = document.querySelector('#person-amount');

        const results = calculate(billAmount, numUsers, selectedService);
        loader.classList.add('showItem');
        isAnim = true;
        setTimeout(function () {
            isAnim = false;

            loader.classList.remove('showItem');
            tipResultsDOM.textContent = `${results[0].toFixed(2)}`
            totalAmountDOM.textContent = `${results[1].toFixed(2)}`
            eachPersonDOM.textContent = `${results[2].toFixed(2)}`
            resultsDOM.classList.add('showItem');
        }, 2000)
    }
}

function init() {
    for (let i = 0; i < services.length; i++) {
        const option = document.createElement('option');

        option.textContent = services[i].title;
        option.value = services[i].value;
        select.appendChild(option);
    }

    inputForm.addEventListener('submit', onClickCalculate)
}


init();