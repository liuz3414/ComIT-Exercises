let list = document.querySelector('ul');
let item = null;

while((item = list.children.item(list.childElementCount-1)) != null){
    list.removeChild(item);
}
console.log(list);