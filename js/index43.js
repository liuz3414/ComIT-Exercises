let name = "game of thrones";
let firstChar = name.charAt(0);
// let secondChar = name.charAt(1000); // Return '' if index is too large
let secondChar = name.charAt(5);
let thirdChar = name.charAt(8);

let result = firstChar.concat(secondChar.concat(thirdChar)).toUpperCase();
console.log("The final result is: " + result);
