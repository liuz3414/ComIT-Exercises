let numbers = [];
for(let i = 1000; i >= 1; i--){
    numbers.push(i);
}

let even = numbers.filter(function(number){
    return number % 2 === 0;
});

let odd = numbers.filter(function(number){
    return number % 2 != 0;
});

even.forEach(function(num, i) {
    if(i<10){
        console.log(num);
        i++;
    }
});

odd.forEach(function(num, i){
    if(i<20){
        console.log(num);
        i++;
    }
});