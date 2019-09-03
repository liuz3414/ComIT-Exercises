// let numbers = [1,2,3,4,5];

let numbers = [1,2,3,4,5,6,7,8,9];

let add = numbers.reduce(function(add, number) {
    return add + number;
});

console.log(add);