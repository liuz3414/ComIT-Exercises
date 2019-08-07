// Use while structure to sum numbers between 0 and 1000
// Show the partial result as output too

let currNUm = 0;
let sum=0;
while(currNUm <= 1000){
    sum+=currNUm;
    console.log("partial result: " + sum);
    currNUm++;
}
console.log("Final sum: " + sum);