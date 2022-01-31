let checkopenmess = false;
let messbutton = document.getElementById('mess');
messbutton.addEventListener("click", openMess);
function openMess(evt){
    if (checkopenmess) {
        document.getElementById(1).style.display = "none";
        checkopenmess = false;
    }
    else{
        checkopenmess = true;
        document.getElementById(1).style.display = "block";
    }
}
let message = [];
let maxid=0;
if(localStorage.length>0){
    maxid=localStorage.getItem('id');
    messagebefore();
}
function messagebefore(){
    for(i=1; i<=localStorage.getItem('id'); i++){
        addMessageStor(localStorage.getItem(i));
    }
}
function addMessageStor(text){
    const chat = {
        text,
        id: Date.now()
    }
    message.push(chat);
    const list = document.querySelector('.messages');
    list.insertAdjacentHTML('beforeend',
        `<p class="message-item" data-key="${chat.id}">
            <span>${chat.text}</span>
        </p>`
    );
}
function addMessage(text){
    const chat = {
        text,
        id: Date.now()
    }
    maxid++;
    localStorage.setItem('id', maxid);
    localStorage.setItem(maxid, chat.text);
    message.push(chat);
    const list = document.querySelector('.messages');
    list.insertAdjacentHTML('beforeend',
        `<p class="message-item" data-key="${chat.id}">
            <span>${chat.text}</span>
        </p>`

    );

}
const form = document.querySelector('.message-form');
form.addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('.typedMessage');

    const text = input.value.trim();

    if(text !== ''){
        addMessage(text);
        input.value = '';
        input.focus();

    }
});