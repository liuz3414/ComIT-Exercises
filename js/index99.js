// Add all even numbers bettwen 0 and 1000 using for statement
// The iteration must break after finding the first 20 even numbers
// Show the result as output

var sum = 0;

for(var i=1;i<=1000;i++){
    if(i%2==0)
        sum+=i;
    if(i/2==20)
        break;
    
}

console.log("Sum of all even numbers bettwen 0 and 1000 is: " + sum);

