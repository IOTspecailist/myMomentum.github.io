const clockTitle = document.querySelector(".jsClock");



function asdf(){
    
    let realTime = new Date();
    const years = realTime.getFullYear();
    const months = realTime.getMonth()+1;
    const days = realTime.getDate();
    const hours = realTime.getHours();
    const minutes = realTime.getMinutes();
    const seconds = realTime.getSeconds();    
    clockTitle.innerHTML = `${years}년`;
    clockTitle.innerHTML += `${months}월`;
    clockTitle.innerHTML += `${days}일`;
    clockTitle.innerHTML += `${hours}시`;
    clockTitle.innerHTML += `${minutes}분`;
    clockTitle.innerHTML += `${seconds}초`;
}


asdf();
setInterval(asdf, 1000);