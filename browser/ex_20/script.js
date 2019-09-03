const list = document.querySelector('ul');
const listChildren = list.children;
console.log(list.children);
const secondChild = listChildren[1];
secondChild.setAttribute('class', 'green');
const forthChild = listChildren[3];
forthChild.setAttribute('class', 'red');

console.log(secondChild.parentElement);
secondChild.parentElement.setAttribute('class', 'orange');


