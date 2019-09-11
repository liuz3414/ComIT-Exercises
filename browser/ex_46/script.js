let form = document.querySelector('form');
let select = document.querySelector('select');
let option = select.options;

form.onsubmit = function(event){
    event.preventDefault();

    console.log(`${select.options[select.selectedIndex].innerText} has been selected and it has ${option.selectedIndex+1} as id`);
};