let input = null;
let list = document.createElement('ul');
let item = null;
let listSize = 0;

while((input = window.prompt('Please input your name:')) != null){
    listSize++;
    item = document.createElement('li');
    item.innerText = input;
    if(listSize %2 == 0)
        item.style.color = '#ddd';
    else
        item.style.color = '#eee';
    list.appendChild(item);
    document.body.appendChild(list);
}



