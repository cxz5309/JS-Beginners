# JS BIGGINER TUTORIAL 
## 15. Course Form Project  
  
    

## 배운 점 정리

#
## ✅ "use strict"
> Strict Mode는 몇가지 면에서 도움이 되는데:
> - 흔히 발생하는 코딩 실수를 잡아내서 예외를 발생시킵니다.
> - 상대적으로 안전하지 않은 액션이 발생하는 것을 방지하거나 그럴 때 예외를 발생시킵니다.  예를 들자면 전역객체들에 접근하려 한다거나 하는 것들이겠지요.
> - 혼란스럽거나 제대로 고려되지 않은 기능들을 비활성화시킵니다.
> - 이 strict mode는 파일 전체에 적용시킬 수도 있고, 아니면 특정한 함수 안에서만 적용시킬 수도 있습니다.

>https://hyeok999.github.io/2019/10/14/javascript-preview-1314/  

+ app2.js 에서는 기본 전역객체를 사용하지 않기 위해 Display, Customer를 클래스처럼 이용하여 prototype 함수로만 이용한다.
+ 또한 document.getElementById('customer-form') 에 바로 이벤트를 연결하는데 이 또한 전역객체를 만들지 않기 위함으로 보임
+ 이 방법을 학습하기 위해 "use strict" 입력 후 동일하게 진행할 예정  
#
## ✅ DOMContentLoaded
> HTML 문서의 생명주기엔 다음과 같은 3가지 주요 이벤트가 관여합니다.
> - DOMContentLoaded 이벤트는 초기 HTML 문서를 완전히 불러오고 분석했을 때 발생합니다. 스타일 시트, 이미지, 하위 프레임의 로딩은 기다리지 않습니다.
> HTML 문서의 생명주기엔 다음과 같은 3가지 주요 이벤트가 관여합니다.
> - DOMContentLoaded – 브라우저가 HTML을 전부 읽고 DOM 트리를 완성하는 즉시 발생합니다. 이미지 파일(<img>)이나 스타일시트 등의 기타 자원은 기다리지 않습니다.
> - load – HTML로 DOM 트리를 만드는 게 완성되었을 뿐만 아니라 이미지, 스타일시트 같은 외부 자원도 모두 불러오는 것이 끝났을 때 발생합니다.
> - beforeunload/unload – 사용자가 페이지를 떠날 때 발생합니다.

>세 이벤트는 다음과 같은 상황에서 활용할 수 있습니다.
> - DOMContentLoaded – DOM이 준비된 것을 확인한 후 원하는 DOM 노드를 찾아 핸들러를 등록해 인터페이스를 초기화할 때
> - load – 이미지 사이즈를 확인할 때 등. 외부 자원이 로드된 후이기 때문에 스타일이 적용된 상태이므로 화면에 뿌려지는 요소의 실제 크기를 확인할 수 있음
> - beforeunload – 사용자가 사이트를 떠나려 할 때, 변경되지 않은 사항들을 저장했는지 확인시켜줄 때
> - unload – 사용자가 진짜 떠나기 전에 사용자 분석 정보를 담은 통계자료를 전송하고자 할 때
- 유니티 라이프 사이클과 비슷한 시스템 찾고있었는데 드디어 찾았음 실무에서 쓰는지는 확인 불가
- document.addEventListener('DOMContentLoaded', function(){}

#
## ✅ https://humahumahuma.tistory.com/122
+ 클래스에서는 querySelector를 많이 쓰고 id는 getElementById를 많이 쓰는 이유
#
## ✅ https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
> - document.getElementById("myBtn").disabled = true;
#
#
## ✅ 빠른 html참조 
> document.getElementById('customer-form')//제출키  
> this.name = document.getElementById('name');  
> this.course = document.getElementById('course');  
> this.author = document.getElementById('author');
> this.customers = document.querySelector('.customer-list');  
> const complete = document.querySelectorAll('.complete');  
> const btn = document.querySelector('.submitBtn');  
> const feedback = document.querySelector('.feedback');  
> const loading = document.querySelector('.loading');  
 ## ✅ 빠른 클래스 참조
> this.classList.remove('complete');  
> this.classList.add('fail');  
> feedback.classList.add('showItem', 'alert', 'alert-success');  
> loading.classList.add('showItem');  
> div.classList.add('col-11', 'mx-auto', 'col-md-6', 'my-3', 'col-lg-4');  
> this.name.classList.remove('complete', 'fail');  
> this.course.classList.remove('complete', 'fail');  
> this.author.classList.remove('complete', 'fail');    