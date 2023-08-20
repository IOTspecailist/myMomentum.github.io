
const images = ["j1.jpg","j2.jpg","j3.jpg","j4.jpg", "j5.jpg","angel01.png","angel01.png","car01.png","devil01.png","dog01.png","panda01.png"];
const selectedImg = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${selectedImg}')`;


const logo = document.getElementById('logo');
const iframe = document.getElementById('right_default_page');
let isIframeVisible = true;

logo.addEventListener('click', function() {
    if (isIframeVisible) {
        // iframe 숨기기
        iframe.style.display = 'none';
        isIframeVisible = false;
    } else {
        // iframe 보여주기
        iframe.style.display = 'block';
        isIframeVisible = true;
    }
});
