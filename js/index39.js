// Define a firstName variable and assign your name as it's value
// Define a lastName variable and assign your last name as it's value
// Show the following output:
// My first name is %firstName% and it is %nameCharacters% characters long
// My last name is %lastName% and it is %lastNameCharacters% characters long
// The character difference between my first name and last name is %charsDiff%
// My first name is longer than my last name: true or false

let firstName = "Zhipeng";
let lastName = "Liu";
let nameCharacters = firstName.length;
let lastNameCharacters = lastName.length;
let charsDiff = (nameCharacters > lastNameCharacters) ? 
    nameCharacters-lastNameCharacters : lastNameCharacters-nameCharacters;
console.log(`My first name is ${firstName} and it is ${nameCharacters} characters long`);
console.log(`My last name is ${lastName} and it is ${lastNameCharacters} characters long`);
console.log(`The character difference between my first name and last name is ${charsDiff}`);
console.log("My first name is longer than my last name: ", nameCharacters > lastNameCharacters);
