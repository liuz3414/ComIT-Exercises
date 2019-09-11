let list = document.querySelector('ul');
let item = null;

while((item = list.children.item(0)) != null){
    list.removeChild(item);
}
console.log(list);