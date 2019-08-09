// Write a program that will show the first 10 Fibonacci sequence numbers
const n = 10;

// Starting with 0, 1, ...
// f1, f2, f --> -1, 1, 0(1st), .....
let f1 = -1;
let f2 = 1;
let f = 0;
let curr = 1;
let result = `The first ${n} Fibonacci sequence numbers: [`;
    
while(curr <= n){
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    if(curr === n)
        result += f;
    else
        result += f + ", ";
    curr++;
}
result += "]";

console.log(result);
