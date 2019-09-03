let currNUm = 0;
let sum=0;

do{
    sum+=currNUm;
    console.log("partial result: " + sum);
    currNUm++;
} while(currNUm <= 1000);

console.log("Final sum: " + sum);