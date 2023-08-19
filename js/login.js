const joinId = document.getElementById("joinId");
const joinPw = document.getElementById("joinPw");
const joinPwConfirm = document.getElementById("joinPwConfirm");
const joinSubmit = document.getElementById("joinSubmit");
const joinIdCheckMsg = document.getElementById("joinIdCheckMsg");

const loginId = document.getElementById("loginId");
const loginPw = document.getElementById("loginPw");
const loginSubmit = document.getElementById("loginSubmit");


function joinNewMemeber(){
    console.log("joinNewMemeber()");
    if(!joinIdCheck()){
        console.log("joinIdCheck Err");
        return;
    }
    if(!passwordMatchCheck()){
        console.log("passwordMatchCheck Err");
        return; 
    }
    console.log("localStorage()");
    localStorage.setItem(joinId.value, joinPw.value);
}

joinSubmit.addEventListener("submit",joinNewMemeber);

function joinIdCheck() {
    
    event.preventDefault();
    
    const existingId = localStorage.getItem(joinId.value);
    
    if (existingId !== null) {
        
        joinIdCheckMsg.innerText = "이미 존재하는 아이디 입니다";
        joinIdCheckMsg.classList.remove("hidden");
        return false;
    } else {
        
        alert(`${joinId.value} 님 가입을 축하드립니다. 로그인 해주세요 `);
        joinForm.classList.add("hidden");
        return true;
    }
}

function passwordMatchCheck() {
    if (joinPw.value !== joinPwConfirm.value) {
        const pwCheckMsg = document.getElementById("pwCheckMsg");
        pwCheckMsg.innerHTML = "비밀번호가 일치하지 않습니다";
        pwCheckMsg.classList.remove("hidden");
        return false;
    } else {
        pwCheckMsg.classList.add("hidden");
        return true;
    }
}





const joinBtn = document.getElementById("joinBtn");
const loginBtn = document.getElementById("loginBtn");
const joinForm = document.getElementById("joinForm");
const loginForm = document.getElementById("loginForm");
const welcomeMessage = document.getElementById("welcomeMessage");
const logoutBtn = document.getElementById("logoutBtn");


joinBtn.addEventListener("click", function() {
    joinForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    joinId.value ="";
    joinPw.value="";
    joinPwConfirm.value="";
});

loginBtn.addEventListener("click", function() {
    loginForm.classList.remove("hidden");
    joinForm.classList.add("hidden");
});

logoutBtn.addEventListener("click", function() {
    loginForm.classList.remove("hidden");
    welcomeMessage.classList.add("hidden");
    logoutBtn.classList.add("hidden");
    loginBtn.classList.remove("hidden");
    loginForm.classList.add("hidden");
    joinForm.classList.add("hidden");
    loginId.value ="";
    loginPw.value = "";
});

loginSubmit.addEventListener("submit", function(event) {
    event.preventDefault();
    const id = loginId.value;
    const pw = localStorage.getItem(id);
    if (pw && pw === loginPw.value) {
        welcomeMessage.innerText = `${id}님 환영합니다!`;
        welcomeMessage.classList.remove("hidden");
        loginForm.classList.add("hidden");
        loginBtn.classList.add("hidden");
        logoutBtn.classList.remove("hidden");

    } else {
        alert("아이디 또는 비밀번호가 틀렸습니다.");
        loginPw.focus();
    }
});
