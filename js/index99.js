// Add all even numbers bettwen 0 and 1000 using for statement
// The iteration must break after finding the first 20 even numbers
// Show the result as output

let sum = 0;

for(let i = 1; i <= 1000; i++){
    if(i % 2 === 0)
        sum += i;
    if(i / 2 === 20)
        i = 10000; // exit loop
}

console.log("Sum of all even numbers bettwen 0 and 1000 is: " + sum);

