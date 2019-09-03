const firstPerson = {
    info : ["Donald", "Trump", "The White House", 46]
};

const secondPerson = {
    info : ["Elisabeth", "II", "Beckingham Palace", 50]
};

let info1 = firstPerson.info.reduce(function(a, b){
    return a.concat(", " + b);
});

let info2 = secondPerson.info.reduce(function(a, b){
    return a.concat(", " + b);
});

console.log(info1);
console.log(info2);