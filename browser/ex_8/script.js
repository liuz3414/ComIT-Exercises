window.alert("This program adds all the numbers you input");

let total = 0;
let counter = 0;

while(window.confirm('continue?')){
    total += window.prompt('Enter a number:');
    counter++;
}

console.log(`The final result is: ${total}`);
console.log(`The user input ${counter} numbers`);
console.log(`The average is: ${total/counter}`);