let elementH1 = document.querySelector('h1');
let title = elementH1.innerText;

let elementP = document.querySelector('p');
let paragraph = elementP.innerText;

elementH1.innerText = paragraph;
elementP.innerHTML = title;
