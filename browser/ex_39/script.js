let firstButton = document.getElementById('firstButton');
let div = document.querySelector('div');
let paragraph = null;
let counter = 0;

firstButton.ondblclick = function(){
    counter++;
    console.log(counter);
    paragraph = document.createElement('p');
    paragraph.innerText = `counter: ${counter}`;
    div.appendChild(paragraph);
};
