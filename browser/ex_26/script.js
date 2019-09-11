let name = ['a','b','c','d','e','f','g','h','i','j'];
let list = document.createElement('ul');
let item = null;

name.forEach(element => {
    item = document.createElement('li');
    item.innerText = element;
    list.appendChild(item);
});

document.body.appendChild(list);