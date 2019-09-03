let color = window.prompt('Please choose & input one of the following colors: green, blue or red');

const element = document.querySelector('a');

if(color == 'green'||color == 'blue'||color == 'red'){
    element.classList.add(color);
}