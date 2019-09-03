let numbers = [];
for(let i = 1; i <= 1000; i++){
    numbers.push(i);
}

let newNumbers = numbers.map(get = (number, i) => {
    number += 10;
    console.log("index: "+(i+1)+", original number: "+numbers[i]+", incremented value: " + number);
    i++;
    return number;
});
