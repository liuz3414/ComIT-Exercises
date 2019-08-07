// Use while structure to only show even numbers between 0 and 100 as output

let currNUm = 0;
let sum = 0;

while(currNUm<=100) {

    if(currNUm % 2 == 0){
        sum+= currNUm;
        console.log("partial result: " + sum);
    }
    currNUm++;
}
console.log("Final sum: " + sum);