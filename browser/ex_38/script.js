let div = document.querySelector('div');
let body = document.querySelector('body');
let paragraph = null;
let key = null;

body.addEventListener('keypress', function(event){
    key = String.fromCharCode(event.charCode);
    paragraph = document.createElement('p');
    paragraph.innerText = `You pressed the  key with the ${key} code`;
    div.appendChild(paragraph);
});

