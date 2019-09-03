let numbers = [];
for(let i = 1; i <= 1000; i++){
    numbers.push(i);
}

let partVal = 0;
for(let j = 1; j <= numbers.length; j++){
    partVal += numbers[j];
}
if(partVal == 500500)
    console.log("Good job!!!");
else
    console.log("Take a look to see if something is wrong");