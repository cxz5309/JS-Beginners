# JS BIGGINER TUTORIAL 
## 21. Random Person AJAX Project
  
## 정리

#
## ✅ "callback"
> https://ktko.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EC%BD%9C%EB%B0%B1Callback%EA%B3%BC-%EB%B9%84%EB%8F%99%EA%B8%B0
> 콜백함수는 주로 함수 내부의 처리결과값을 함수 외부로 내보낼 때 사용한다.  
> 
문제 요구사항
1. 데이터를 가져 오는 함수
2. 데이터를 DOM에 출력하는 데 사용되는 함수
마지막 함수는 물론 이벤트 리스너에 대한 콜백으로 사용되었습니다.

#
## ✅ ajax.onload
#
## ✅ ajax.onerror
#
## ✅ ajax.readyState
#
## ✅ ajax.responseText
#
## ✅ ajax.onerror
#
## ✅ ajax.send
#
## ✅ Is onload equal to readyState==4 in XMLHttpRequest?
> 같음. onload는 XMLHttpRequest 2에 추가되었지만 onreadystatechange는 처음부터 있었음.  
> 그러나 onerror 핸들러가 일반적으로 트리거되는 경우 (일반적으로 네트워크 연결 문제)   onreadystatechange 이벤트 핸들러도 readyState == 4로 트리거됩니다.   
> 따라서 onerror를 사용하고 최신 브라우저를 대상으로하는 경우 onreadystatechange를 사용하지 말고 대신 onload를 사용해야합니다.   
#
## ✅ 빠른 html참조 
const btn = document.getElementById("btn");
document.getElementById("first").textContent = first;
document.getElementById("last").textContent = last;
document.getElementById("street").textContent = street.name + " " + street.number;
document.getElementById("phone").textContent = phone;
document.getElementById("email").textContent = email;
document.getElementById("photo").src = large;