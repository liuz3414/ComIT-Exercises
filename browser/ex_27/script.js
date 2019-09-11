let numbers = [];
for(let i = 0; i < 100; i++){
    numbers[i] = i+1;
}

let list = document.createElement('ul');
let item = null;

numbers.forEach(element => {
    item = document.createElement('li');
    item.innerText = `Item ${element}`;
    if(element %2 == 0)
        item.style.color = '#ddd';
    else
        item.style.color = '#eee';
    list.appendChild(item);
});

document.body.appendChild(list);