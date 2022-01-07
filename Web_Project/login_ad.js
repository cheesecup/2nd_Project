var imgArray = new Array();
imgArray[0] = "image/0.jpg";
imgArray[1] = "image/1.jpg";
imgArray[2] = "image/2.jpg";

var obTimeOut;

var nImgCnt = 0;

function rotateImg() {
    nImgCnt++;

    if (nImgCnt < imgArray.length) {
        document.getElementById("imgId").src = imgArray[nImgCnt];
        obTimeOut = setTimeout("rotateImg()", 3000);
    } else if (nImgCnt >= imgArray.length) {
        nImgCnt = 0;
        document.getElementById("imgId").src = imgArray[nImgCnt];
        obTimeOut = setTimeout("rotateImg()", 3000);
    } else {
        clearTimeout(obTimeOut);
    }
}

function startAnimation() {
    obTimeOut = window.setTimeout(rotateImg,3000);
}

window.onload = startAnimation;

