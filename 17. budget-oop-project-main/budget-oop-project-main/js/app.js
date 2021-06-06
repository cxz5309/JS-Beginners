class UI{

  constructor(){
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");

    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");

    this.expenseForm = document.getElementById("expense-form");
    this.expenseTitleInput = document.getElementById("expense-input");
    this.expenseValInput = document.getElementById("amount-input");

    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balanceAmount = document.getElementById("balance-amount");
    
    this.balance = document.getElementById("balance");
    
    this.expenseList = document.getElementById('expense-list');

    this.bugetNum = 0;
    this.expenseSum = 0;
    this.balanceNum = 0;
    this.allExpense=[];
    //id값을 고유하도록 하기 위해 사용
    this.removeCnt = 0;
  }

  addListener = function (){
    this.budgetForm.addEventListener('submit', (event)=>{
      event.preventDefault();
      //한글입력은 html단에서 막은듯
      this.addBudget(this.budgetInput.value);      
      this.chkBalance();
      this.changeText();
      this.clearAllinputText();
      console.log(this.allExpense);
      this.saveStat();
    });

    this.expenseForm.addEventListener('submit', (event)=>{
      event.preventDefault();
      //아래 순서 바뀌면 안됨 비동기 처리 고려
      this.addExpances(this.expenseTitleInput.value, this.expenseValInput.value);
      this.chkBalance();
      this.changeText();
      this.createListHTML(this.allExpense.length - 1 + this.removeCnt);
      this.clearAllinputText();
      console.log(this.allExpense);
      this.saveStat();
    });
    
    this.expenseList.addEventListener('click', (event)=>{
      if (event.target.parentElement.classList.contains('edit-icon')){
        this.editExpense(event.target.parentElement);
        this.saveStat();
      }else if (event.target.parentElement.classList.contains('delete-icon')){
        this.deleteExpense(event.target.parentElement);
        this.saveStat();
      }
    })
  }

  addBudget = function(val){
    this.bugetNum = Number(val);
    this.showElart(this.budgetFeedback, val);
  }

  addExpances = function(title, val){
    let cnt =  this.allExpense.length + this.removeCnt;
    this.allExpense.push({
      id: cnt,
      title: title,
      value: Number(val)
    });
    this.showElart(this.expenseFeedback, val, title);
  }

  chkBalance = function(){
    this.expenseSum = this.allExpense.reduce((sum, cur) => {
      sum += cur.value;
      return sum;
    }, 0);

    this.balanceNum = this.bugetNum - this.expenseSum;
  }

  changeText = function(){
    this.budgetAmount.innerText = this.bugetNum;
    this.expenseAmount.innerText = this.expenseSum;
    this.balanceAmount.innerText = this.balanceNum;
    this.balancedFontColor(this.balanceNum);
  }

  clearAllinputText = function(){
    this.budgetInput.value = '';
    this.expenseTitleInput.value = '';
    this.expenseValInput.value = '';
  }

  balancedFontColor = function(num){
    if(num<0) {
      this.balance.classList.remove('showBlack', 'showGreen');
      this.balance.classList.add('showRed');
    }
    else if (num>0){
      this.balance.classList.remove('showBlack', 'showRed');
      this.balance.classList.add('showGreen');
    }
    else {
      this.balance.classList.add('showBlack');
      this.balance.classList.remove('showGreen', 'showRed');
    }
  }

  showElart = function(feedbackHTML, val, title){
    if(Number(val)<0 || val==='' || title ===''){
      feedbackHTML.classList.add('showItem');
      feedbackHTML.innerHTML = `<p>value cannot be empty or negative</p>`;
      setTimeout(()=>{
        feedbackHTML.classList.remove('showItem');
      }, 3000);
    }
  }

  createListHTML = function(expenseIdx){
    let tmp = this.allExpense.filter((val)=>{
      return val.id == expenseIdx;
    })[0];
    console.log(tmp);
    this.expenseList.innerHTML += `
    <div class="expense-item d-flex justify-content-between align-items-baseline">
      <h6 class="expense-title mb-0 text-uppercase list-item">- ${tmp.title}</h6>
      <h5 class="expense-amount mb-0 list-item">$${tmp.value}</h5>
      <div class="expense-icons list-item">
        <a href="#" class="edit-icon mx-2" data-id="${tmp.id}">
          <i class="fas fa-edit"></i>
        </a>
        <a href="#" class="delete-icon" data-id="${tmp.id}">
          <i class="fas fa-trash"></i>
        </a>
      </div>
    </div>
    `
  }
    
  editExpense = function(element){
    let id = element.dataset.id;
    let info = element.parentElement.parentElement;

    // console.log(info.childNodes);
    // console.log(info.childNodes[1]);
    // console.log(info.childNodes[3]);
    let listedExpense = this.allExpense.filter((val)=>{
      return val.id == id;
    });
    console.log(listedExpense);
    this.expenseTitleInput.value = listedExpense[0].title;
    this.expenseValInput.value = listedExpense[0].value;

    //제거와 동일
    this.expenseList.removeChild(info);
    this.allExpense = this.allExpense.filter((val)=>{
      return val.id != id;
    });
    this.removeCnt++;

    this.chkBalance();
    this.changeText();
  }

  deleteExpense = function(element){
    let id = element.dataset.id;
    let info = element.parentElement.parentElement;

    this.expenseList.removeChild(info);
    this.allExpense = this.allExpense.filter((val)=>{
      return val.id != id;
    });
    this.removeCnt++;

    this.chkBalance();
    this.changeText();
    this.clearAllinputText();
  }
  saveStat = function(){
    localStorage.setItem('bugetNum', this.bugetNum);
    localStorage.setItem('expenseSum', this.expenseSum);
    localStorage.setItem('balanceNum', this.balanceNum);
    localStorage.setItem('removeCnt', this.removeCnt);
    localStorage.setItem('allExpense', JSON.stringify(this.allExpense));
  }
  loadStat = function(){
    let tmp = localStorage.getItem('bugetNum');
    this.bugetNum = tmp === null || tmp === 'undefined' ? 0 : Number(tmp);

    tmp = localStorage.getItem('expenseSum');
    this.expenseSum = tmp === null || tmp === 'undefined' ? 0 :  Number(tmp);

    tmp = localStorage.getItem('balanceNum');
    this.balanceNum = tmp === null || tmp === 'undefined' ? 0 :  Number(tmp);

    tmp = localStorage.getItem('removeCnt');
    this.removeCnt = tmp === null || tmp === 'undefined' ? 0 :  Number(tmp);

    tmp = JSON.parse(localStorage.getItem('allExpense'));
    this.allExpense = tmp === null || tmp === 'undefined' ? [] : tmp;

    this.chkBalance();
    this.changeText();
    
    for(let i = 0; i<this.allExpense.length; i++){
      this.createListHTML(this.allExpense[i].id);
    }
    localStorage.clear();
    console.log("this.bugetNum" + this.bugetNum);
    console.log("this.expenseSum" + this.expenseSum);
    console.log("this.balanceNum" + this.balanceNum);
    console.log("this.removeCnt" + this.removeCnt);
    console.log(this.allExpense);
  }
}

document.addEventListener('DOMContentLoaded', function(){
  const ui = new UI();
  ui.loadStat();
  ui.addListener();
})