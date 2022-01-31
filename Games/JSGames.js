let score = 0;
const molehole = document.querySelectorAll(".molehole");
let interval9;
let startbutton = document.getElementById('start1');
startbutton.addEventListener("click", Start);
function Start(evt) {
    score = 0
    interval9 = setInterval(Play, 2 * 1000)

    /*Play();*/
}
let endbutton = document.getElementById('end1');
endbutton.addEventListener("click", end);
function end(evt) {
    clearInterval(interval9);
}
molehole.forEach.call(molehole,function (el){
    el.addEventListener('click', ScoreUP)
})
let check = false;
function ScoreUP(evt){

    let p = document.getElementById('text_change');
    if (score >= 10){clearInterval(interval9);}
    if (evt.target == molehole[r]){
        if (check) score++;
    }
    check = false;
    p.innerHTML = score;
}
let r;
function Play(){
    check = true;
     r= Math.floor(Math.random()*16);
    molehole[r].style.backgroundColor = "blue";
    setTimeout(ClearBack, 2 * 900);
}
function ClearBack(){
    molehole[r].style.backgroundColor = "gray";
}

const blockPilot = document.querySelectorAll(".blockPilot");
var table = [false, true, false, false,
            false, false, false, false,
            false, false, false, false,
            false, true, false, false]

window.onload = function() {
 for(let i=0;i<16;i++){
     if (table[i] == true) blockPilot[i].style.backgroundColor = "blue";
 }
}
molehole.forEach.call(blockPilot,function (el){
    el.addEventListener('click', ChangeBlock)
})
function ChangeBlock(evt) {
    let id;
    for(let i=0;i<16;i++){
        if (evt.target == blockPilot[i]){id=i; break}
    }
    let posY;
    let posX = id;
    posY = Math.floor(id/4);
    while (posX >=4){
        posX-=4;
    }

    for (let i=0; i<4;i++) {
        if (!table[posY * 4 + i]) {
            table[posY * 4 + i]=true;
            blockPilot[posY * 4 + i].style.backgroundColor = "blue";
        }
        else{
            blockPilot[posY * 4 + i].style.backgroundColor = "gray";
            table[posY * 4 + i]=false;
        }
        if (posX + i * 4 != id) {
            if (!table[posX + i * 4]) {
                table[posX + i * 4] = true;
                blockPilot[posX + i * 4].style.backgroundColor = "blue";
            } else {
                table[posX + i * 4] = false;
                blockPilot[posX + i * 4].style.backgroundColor = "gray";
            }
        }
    }
    let check = true;
    for (let i=0; i<16;i++){
        if (table[i] == false) check = false;
    }
    if (check) {ReArea()}
    check = true;
    for (let i=0; i<16;i++){
        if (table[i] == true) check = false;
    }
    if (check) {ReArea()}

}

function ReArea(){
    table = [false, true, false, false,
        false, false, false, false,
        false, false, false, false,
        false, true, false, false]
    for(let i=0;i<16;i++){
        if (table[i] == true) {blockPilot[i].style.backgroundColor = "blue"} else {blockPilot[i].style.backgroundColor = "gray"};
    }
    alert("Победа!");
}


