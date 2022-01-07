// 동일정보 자동완성 버튼
function sameinfofn() {
    // 사용자가 입력한 변수
    var name_n = document.getElementById("name_n").value;
    var mobile_n = document.getElementById("mobile_n").value;
    var address1 = document.getElementById("address1").value;
    var address2 = document.getElementById("address2").value;
    var address3 = document.getElementById("address3").value;

    // 자동완성 버튼 클릭 시 입력되는 변수
    var name_d = document.getElementById("name_d");
    var mobile_d = document.getElementById("mobile_d");
    var address4 = document.getElementById("address4");
    var address5 = document.getElementById("address5");
    var address6 = document.getElementById("address6");

    name_d.value = name_n;
    mobile_d.value = mobile_n;
    address4.value = address1;
    address5.value = address2;
    address6.value = address3;

}

function pay_complete() {

    var form = document.pay_check;

    event.preventDefault(); 
    if( !form.agree.checked) {
        alert('회원정보 사용에 동의해주세요')
        return false;
    }

    if(form.name_n.value == '') {
        alert('명의자의 이름을 입력해주세요');
        form.name_n.focus();
        return false;
    }

    if(form.mobile_n.value == '') {
        alert('명의자의 휴대폰 번호를 입력해주세요')
        form.mobile_n.focus();
        return false;
    }
    //휴대폰 번호는 숫자만 유효성검사 정규표현식 
    var mobile_n = document.getElementById("mobile_n");
       var telReg = /^[0-9]+/
       if( !telReg.test(mobile_n.value) ){
           alert('휴대폰 번호에 숫자만 입력해 주세요');
           mobile_n.focus();
           return false;
       }

    if(form.jb_num1.value == '') {
        alert('주민등록번호 앞의 6자리를 입력해주세요')
        form.jb_num2.focus();
        return false;
    }
    //주민등록번호는 숫자만 유효성검사 정규표현식 
    var jb_num1 = document.getElementById("jb_num1");
    var telReg = /^[0-9]+/
    if( !telReg.test(jb_num1.value) ){
        alert('주민등록번호에 숫자만 입력해 주세요');
        jb_num1.focus();
        return false;
     }

    if(form.jb_num2.value == '') {
        alert('주민등록번호 뒤의 7자리를 입력해주세요')
        form.jb_num2.focus();
        return false;
    }
     //주민등록번호는 숫자만 유효성검사 정규표현식 
     var jb_num2 = document.getElementById("jb_num2");
     var telReg = /^[0-9]+/
     if( !telReg.test(jb_num2.value) ){
         alert('주민등록번호에 숫자만 입력해 주세요');
         jb_num2.focus();
         return false;
     }

    if(form.address1.value == '') {
        alert('주민등록상 우편번호를 입력해주세요')
        form.address1.focus();
        return false;
    }

    if(form.address3.value == '') {
        alert('주민등록상 상세주소를 입력해주세요')
        form.address1.focus();
        return false;
    }

    if(form.email1.value == '') {
        alert('이메일주소를 입력해주세요')
        form.address1.focus();
        return false;
    }

    if(form.email2.value == '') {
        alert('도메인을 입력해주세요')
        form.address1.focus();
        return false;
    }

   

    if(form.name_d.value == '') {
        alert('배송받는 분 이름을 입력해주세요');
        form.name_d.focus();
        return false;
    }

    if(form.mobile_d.value == '') {
        alert('배송받는 분 휴대폰 번호를 입력해주세요');
        form.mobile_d.focus();
        return false;
    }
    //휴대폰 번호는 숫자만 유효성검사 정규표현식 
    var mobile_d = document.getElementById("mobile_d");
       var telReg = /^[0-9]+/
       if( !telReg.test(mobile_d.value) ){
           alert('휴대폰 번호에 숫자만 입력해 주세요');
           mobile_d.focus();
           return false;
       }

    if(form.address4.value == '') {
        alert('배송지 우편번호를 입력해주세요');
        form.address4.focus();
        return false;
    }

    if(form.address6.value == '') {
        alert('배송지 상세주소를 입력해주세요');
        form.address6.focus();
        return false;
    }

    if(form.yes2.checked) {
        alert('리스로 구매하실 분은 상담 후 결제를 이용해주세요')
        return false;
    }

    alert('결제가 완료 되었습니다.');
    document.pay_check.action = "main_login.html";
    document.pay_check.submit();

}


 //------------------즉시 결제 끝---------------------//


function talk_complete() {

    var form = document.pay_check;

    event.preventDefault(); 
    if( !form.agree.checked) {
        alert('회원정보 사용에 동의해주세요')
        return false;
    }

    if(form.name_n.value == '') {
        alert('명의자의 이름을 입력해주세요');
        form.name_n.focus();
        return false;
    }

    if(form.mobile_n.value == '') {
        alert('명의자의 휴대폰 번호를 입력해주세요')
        form.mobile_n.focus();
        return false;
    }
    //휴대폰 번호는 숫자만 유효성검사 정규표현식 
    var mobile_n = document.getElementById("mobile_n");
    var telReg = /^[0-9]+/
       if( !telReg.test(mobile_n.value) ){
           alert('휴대폰 번호에 숫자만 입력해 주세요');
           mobile_n.focus();
           return false;
       }

    if(form.jb_num1.value == '') {
        alert('주민등록번호 앞의 6자리를 입력해주세요')
        form.jb_num1.focus();
        return false;
    }
     //주민등록번호는 숫자만 유효성검사 정규표현식 
     var jb_num1 = document.getElementById("jb_num1");
     var telReg = /^[0-9]+/
     if( !telReg.test(jb_num1.value) ){
         alert('주민등록번호에 숫자만 입력해 주세요');
         jb_num1.focus();
         return false;
     }

    if(form.jb_num2.value == '') {
        alert('주민등록번호 뒤의 7자리를 입력해주세요')
        form.jb_num2.focus();
        return false;
    }
      //주민등록번호는 숫자만 유효성검사 정규표현식 
      var jb_num2 = document.getElementById("jb_num2");
      var telReg = /^[0-9]+/
      if( !telReg.test(jb_num2.value) ){
          alert('주민등록번호에 숫자만 입력해 주세요');
          jb_num2.focus();
          return false;
      }

    if(form.address1.value == '') {
        alert('주민등록상 우편번호를 입력해주세요')
        form.address1.focus();
        return false;
    }

    if(form.address3.value == '') {
        alert('주민등록상 상세주소를 입력해주세요')
        form.address1.focus();
        return false;
    }

    if(form.email1.value == '') {
        alert('이메일주소를 입력해주세요')
        form.address1.focus();
        return false;
    }

    if(form.email2.value == '') {
        alert('도메인을 입력해주세요')
        form.address1.focus();
        return false;
    }

    document.pay_check.action = "main_login.html";
    document.pay_check.submit();
}