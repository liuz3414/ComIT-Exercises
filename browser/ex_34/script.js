let firstButton = document.querySelector('firstButton');
let secondButton = document.querySelector('secondButton');
let greeting = function(){
    window.alert('we\'re using as firstButton event listener');
};

firstButton.addEventListener('click', greeting);
secondButton.onclick = function(){
    firstButton.removeEventListener('click', greeting);
};