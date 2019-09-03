const header1 = document.querySelector('h1');
const division = document.querySelector('div');

if(header1.hasAttribute('class'))
    header1.classList.add('striked');
else
    header1.setAttribute('class', 'bold');

if(division.hasAttribute('class'))
    division.classList.add('striked');
else
    division.setAttribute('class', 'bold');

division.removeAttribute('name');