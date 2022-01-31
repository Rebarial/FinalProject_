let Timer = document.getElementById('TimerS');
let T = 5*60;
let timerbutton = document.getElementById('timer');
timerbutton.addEventListener("click", StartTimer);
function StartTimer(evt){
    T = 5*60;
    TimerProcess();
    interval1 = setInterval(TimerProcess, 1 * 10)
}

function TimerProcess(){
    T--;
    let Sec = Math.floor(T/60);
    let milSec = T%60;
    Timer.innerText = `${Sec}.${milSec}`
    if (T<1) {clearInterval(interval1);
        document.location.href = "../index.html";}

}