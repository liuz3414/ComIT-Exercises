let username = window.prompt('Please input user name:');
let password = window.prompt('Please input password:');
console.log(`Welcome ${username}`);
setTimeout(function(){
    let result = window.confirm('Do you still want to be logged?');
}, 10000);

if(result)
    console.log('%username% your session has been restored');
else
    console.log('%username% your session has expaired');