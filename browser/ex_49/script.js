let form = document.querySelector('form');
let username;
let password;

form.onsubmit = function(){
    form.preventDefault();
    username = form.elements[0].value;
    password = form.elements[1].value;
    if(username === 0 || password === 0){
        document.getElementById('errors').setAttribute('class', 'error');
        window.alert('Please input a username and password');
    }
};