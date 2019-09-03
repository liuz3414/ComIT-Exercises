const element = document.querySelector('a');

if(element.hasAttribute('class')){
    element.classList.add('blue');
}else{
    element.setAttribute('class', 'red');
}