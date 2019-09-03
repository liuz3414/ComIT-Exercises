window.alert("This program adds all the numbers you input");
let total = 0;

while(window.confirm('continue?')){
    total += window.prompt('Enter a number:');
    console.log('So far the result is: ' + total);
}