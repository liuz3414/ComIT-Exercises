let form = document.querySelector('form');
let action = form.action;
let method = form.method;
let enctype = form.enctype;
let name = form.name;

document.querySelector('div').innerText += `${action}\n${method}\n${enctype}\n${name}`;