# JS BIGGINER TUTORIAL 
## 17. Budget Application Project
  
    

## 배운 점 정리

#
## ✅ class
> Class는 객체를 생성하기 위한 템플릿입니다. 클래스는 데이터와 이를 조작하는 코드를 하나로 추상화합니다. 자바스크립트에서 클래스는 프로토타입을 이용해서 만들어졌지만 ES5의 클래스 의미와는 다른 문법과 의미를 가집니다.  
> Class는 사실 "특별한 함수"입니다. 함수를 함수 표현식과 함수 선언으로 정의할 수 있듯이 class 문법도 class 표현식 and class 선언 두 가지 방법을 제공합니다.  
+ js에서 oop 사용하는 것이 프로젝트 주 목적이라고 한다.

# 
## ✅ Constructor (생성자)
> constructor 메서드는 class 로 생성된 객체를 생성하고 초기화하기 위한 특수한 메서드입니다.  "constructor" 라는 이름을 가진 특수한 메서드는 클래스 안에 한 개만 존재할 수 있습니다. 만약 클래스에 여러 개의 constructor 메서드가 존재하면 SyntaxError 가 발생할 것입니다.
> 
> constructor는 부모 클래스의 constructor를 호출하기 위해 super 키워드를 사용할 수 있습니다.

#
## ✅ Field 선언
> public과  private 필드 선언은 자바스크립트 표준화 위원회에 실험적 기능 (stage 3)  TC39 로 제안되어있습니다.  
> 현재 이를 지원하는 브라우져는 제한적인 상태입니다만, Babel 과 같은 build 시스템을 사용한다면 이 기능을 사용해볼 수 있습니다.

> - public 필드 선언  
> height = 0;  
> constructor(height) {  
>   this.height = height;  
> }

> - private 필드 선언  
> #height = 0;  
> constructor(height, width) {  
>   this.#height = height;  
> }
+ "현재 이를 지원하는 브라우져는 제한적인 상태입니다만,"
#
## ✅ Array.prototype.reduce()
> reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.  

> [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {  
>   return accumulator + currentValue;  
> });  

#
## ✅ Array.prototype.filter()
> filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.  

> arr.filter(callback(element[, index[, array]])[, thisArg])

#
## ✅ id 생성 문제 해결
+  삽입과 삭제가 자유로운 상태에서 id 생성법

#
#
## ✅ 빠른 html참조 
> this.budgetFeedback = document.querySelector(".budget-feedback");
> this.expenseFeedback = document.querySelector(".expense-feedback");
> this.budgetForm = document.getElementById("budget-form");
> this.budgetInput = document.getElementById("budget-input");
> this.budgetAmount = document.getElementById("budget-amount");
> this.expenseAmount = document.getElementById("expense-amount");
> this.balance = document.getElementById("balance");
> this.balanceAmount = document.getElementById("balance-amount");
> this.expenseForm = document.getElementById("expense-form");
> this.expenseInput = document.getElementById("expense-input");
> this.amountInput = document.getElementById("amount-input");
> this.expenseList = document.getElementById("expense-list");

> const budgetForm = document.getElementById('budget-form');
> const expenseForm = document.getElementById('expense-form');
> const expenseList = document.getElementById('expense-list');
#
## ✅ 빠른 클래스 참조
> self.budgetFeedback.classList.remove('showItem');
> this.balance.classList.remove('showGreen', 'showBlack');
> this.balance.classList.add('showRed');
> this.balance.classList.remove('showRed', 'showBlack');
> this.balance.classList.add('showGreen');
> div.classList.add('expense');
> if (event.target.parentElement.classList.contains('edit-icon')){
> }else if (event.target.parentElement.classList.contains('delete-icon')){



