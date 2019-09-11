let form = document.querySelector('form');
let checkBox = document.querySelector('input');
let selectedElement = null;

form.onsubmit = function(event){
    selectedElement = document.querySelector('input:checked');
    event.preventDefault();
    if(selectedElement == null){
        window.alert('Please at least select a superheroe');
    }else{
        // for(let i = 0; i < checkBox.length; i++){
            
        // }
    }
};