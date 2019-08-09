// Define firstNumber and secondNumber variables
// Assign a numeric value to previous defined variables
// If the first number equals the second number then show the 
//  following message: They are the same number
// If the first number is bigger than the second number then show the 
//  following message: %firstNumber% is bigger than %secondNumber%
// If the second number is bigger than the first number then show the 
//  following message: %secondNumber% is bigger than %firstNumber%

let firstNUmber = 10;
let secondNumber = 20;

if(firstNUmber === secondNumber){
    console.log("They are the same number");
} else if(firstNUmber >= secondNumber){
    console.log(firstNUmber + " is bigger than " + secondNumber);
} else if(firstNUmber <= secondNumber) {
    console.log(secondNumber + " is bigger than " + firstNUmber);
}
