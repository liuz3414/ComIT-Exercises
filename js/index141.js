// The first item is hotel fee, it's a number, type a value that you like
// The second item is trip fee, it's a number, type a value that you like
// The third item is meals fee, it's a number, type a value that you like

let tripExpenses = [300, 1000, 200];

let budget = tripExpenses.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(`hotel: ${tripExpenses[0]}, trip: ${tripExpenses[1]}, meals: ${tripExpenses[2]}`);
console.log("Total cost: " + budget);