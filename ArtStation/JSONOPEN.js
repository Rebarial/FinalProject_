fetch('JsDok.json').then((result) => {
    result.json().then((result) =>{
        addIMG(result.firstImg);
        addIMG(result.secImg);
    })

})

function addIMG(link){
    let nextImg = document.createElement('img');
    nextImg.src = link;
    nextImg.classList.add("arts");
    let body = document.querySelector('div.board');
    body.append(nextImg);

}