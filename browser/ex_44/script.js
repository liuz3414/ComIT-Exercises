let form = document.querySelector('form');
let username = form.elements[0];
let password = form.elements[1];
let button = form.elements[2];

username.value = 'morty';
password.value = '12345';

button.onclick = function(){
    window.alert(`username:${username.value}, passord:${password.value}`);
};