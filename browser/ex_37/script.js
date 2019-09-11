let body = document.querySelector('body');
let key = null;

body.addEventListener('keypress', function(event){
    key = String.fromCharCode(event.charCode);
    console.log(`You pressed the  key with the ${key} code`);
});