const amount = document.querySelector('#amount');
const interest_rate = document.querySelector('#interest_rate');
const months = document.querySelector('#months');
const result = document.querySelector('#payment');

function computeLoan(){
    let amountTxt = Number(amount.value);
    let interest_rateTxt = Number(interest_rate.value);
    let monthsTxt = Number(months.value);

    let interest = (amountTxt * (interest_rateTxt * 0.01)) / monthsTxt;
    let resultTxt = ((amountTxt / monthsTxt) + interest);

    resultTxt = resultTxt.toString().replace(/\B(?=(\d{3})+(?\d))/g, ","); 
    result.innerText = `Monthly Payment = ${resultTxt}` 
}