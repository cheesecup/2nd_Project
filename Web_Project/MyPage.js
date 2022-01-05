/* 선택박스 css 변경 함수 */
function init() { //클릭시 test() 함수 실행
    var listfn = document.getElementsByClassName("listfn");

    listfn[4].classList.add("list_clicked");

    for(var i=0; i<listfn.length; i++) {
        listfn[i].addEventListener("click", changeColor);
    }
}
init();

// 클릭시 색상 변경
function changeColor(event) { 
    var listfn = document.getElementsByClassName("listfn");

    if(event.target.classList[1] === "list_clicked") {
        event.target.classList.add("list_clicked");
    } else {
        for(var i=0; i<listfn.length; i++) {
            listfn[i].classList.remove("list_clicked");
        }
        event.target.classList.add("list_clicked");
    }
}

// 표 클릭시 내용 변경
function textfn(text_num) {
    var inner_text = document.getElementsByClassName("inner_text");
    for (var i=0; i<inner_text.length; i++) {
        inner_text[i].style.display = 'none';
    }
    switch(text_num) {
        case '0':
            inner_text[0].style.display = 'block';
            break;
        case '1':
            inner_text[1].style.display = 'block';
            break;
        case '2':
            inner_text[2].style.display = 'block';
            break;
        case '3':
            inner_text[3].style.display = 'block';
            break;
        case '4':
            inner_text[4].style.display = 'block';
            break;
    }
}

// 접수 숫자 클릭시 내용 변경
function listfn(list_num) {
    var listfn = document.getElementsByClassName("listfn");
    var inner_text = document.getElementsByClassName("inner_text");

    for (var i=0; i<inner_text.length; i++) {
        listfn[i].classList.remove("list_clicked");
        inner_text[i].style.display = 'none';
    }

    switch(list_num) {
        case '0':
            listfn[0].classList.add("list_clicked");
            inner_text[0].style.display = 'block';
            break;
        case '1':
            listfn[1].classList.add("list_clicked");
            inner_text[1].style.display = 'block';
            break;
        case '2':
            listfn[2].classList.add("list_clicked");
            inner_text[2].style.display = 'block';
            break;
        case '3':
            listfn[3].classList.add("list_clicked");
            inner_text[3].style.display = 'block';
            break;
    }
}

// 비밀번호 일치 확인
function pwcheckfn() {
    var input_pw = document.getElementById('modify_pw1');
    var pw_check = document.getElementById("modify_pw2");
    var pw_check_alert = document.getElementById('pw_check_alert');
    if(modify_pw1.value != '' && modify_pw2.value != '') {
        if(modify_pw1.value === modify_pw2.value) {
            pw_check_alert.innerHTML='* 비밀번호가 서로 일치합니다.';
            pw_check_alert.style.color='blue';
        } else {
            pw_check_alert.innerHTML='* 비밀번호가 서로 다릅니다.';
            pw_check_alert.style.color='red';
        }
    }
}




