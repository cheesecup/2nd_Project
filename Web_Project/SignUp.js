// 아이디 중복확인
function idcheckfn() {
    var input_id = document.getElementById("input_id");
    if(input_id.value === 'admin123') {
        alert('해당 아이디가 존재합니다.');
    } else {
        alert('해당 아이디를 사용할 수 있습니다.');
    }
}

// 비밀번호 일치 확인
function pwcheckfn() {
    var input_pw = document.getElementById('input_pw');
    var pw_check = document.getElementById("pw_check");
    var pw_check_alert = document.getElementById('pw_check_alert');
    if(input_pw.value != '' && pw_check.value != '') {
        if(input_pw.value === pw_check.value) {
            pw_check_alert.innerHTML='* 비밀번호가 서로 일치합니다.';
            pw_check_alert.style.color='blue';
        } else {
            pw_check_alert.innerHTML='* 비밀번호가 서로 다릅니다.';
            pw_check_alert.style.color='red';
        }
    }
}

// 가입하기 유효성 검사
function validationfn() {

    var terms_agree = document.getElementById("terms_agree").checked;
    var info_agree = document.getElementById("info_agree").checked;
    var refund_agree = document.getElementById("refund_agree").checked;
    if(!terms_agree || !info_agree || !refund_agree) {
        alert('필수항목에 동의해 주세요');
        return terms_agree.focus();
    }

    var input_name = document.getElementById('input_name');
    if(input_name.value === '') {
        alert('이름을 입력해주세요.');
        return input_name.focus();
    }
    var valid_name = /^[가-힝]{2,20}$/;
    if(!valid_name.test(input_name.value)) {
        alert('이름 형식이 틀렸습니다.');
        return input_name.focus();
    }

    var input_id = document.getElementById('input_id');
    if(input_id.value === '') {
        alert('아이디를 입력해주세요.');
        return input_id.focus();
    }
    var vaild_id = /^[a-z0-9]{4,12}$/;
    if(!vaild_id.test(input_id.value)) {
        alert('아이디는 4~12자의 영문,숫자 조합으로 입력해주세요.');
        return input_id.focus();

    }

    var input_pw = document.getElementById('input_pw');
    if(input_pw.value === '') {
        alert('비밀번호를 입력해주세요.');
        return input_pw.focus();

    }
    var valid_pw = /^(?=.*[a-zA-Z])(?=.*[~!@#$%^*+=-_])(?=.*[0-9]).{8,20}$/;
    if(!valid_pw.test(input_pw.value)) {
        alert('비밀번호는 8~15자 영문 대/소문자,숫자,특수문자 조합으로 입력해주세요.');
        return input_pw.focus();

    }
    var pw_check = document.getElementById("pw_check");
    if(pw_check.value === '') {
        alert('비밀번호 확인을 해주세요');
        return pw_check.focus();

    }

    var input_email = document.getElementById("input_email");
    var input_emailadd = document.getElementById("input_emailadd");
    if(input_email.value === '' || input_emailadd.value === '') {
        alert('이메일을 입력해주세요');
        return input_email.focus();

    }
    var valid_email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])$/i;
    var valid_emailadd = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //대소문자 구분 안함
    if(!valid_email || !valid_emailadd) {
        alert('이메일을 잘못 입력했습니다.');
        return input_email.focus();

    }

    var input_phone = document.getElementById("input_phone");
    if(input_phone.value === '') {
        alert('휴대폰번호를 입력해주세요');
        return input_phone.focus();

    }
    var valid_phone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if(!valid_phone) {
        alert('휴대폰번호를 잘못 입력했습니다');
        return input_phone.focus();
    }

    alert('회원가입이 되셨습니다.');
    document.signup_form.action = "Header_Footer.html"
    document.signup_form.submit();
}
