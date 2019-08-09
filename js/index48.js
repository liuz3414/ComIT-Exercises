// Declare a message variable and assign the following value: 3.14 it's a great number but 42 it's the answer to life.
// Declare a pi variable, get 3.14 value from the message variable and transform it into a decimal number type value
// Declare a answerToLife variable, get 42 value from the message variable and transform it into a integer number type value
// Declare a result value and assign the result of adding pi and answerToLife values
// Show the result variable value and name as output (use console.log(variable name, variable value))
// Show the following output: 45.14 is the result of adding pi and answerToLife
// Concatenate the strings and transform 45.14 (result value) from number to string using toString method

let message = "3.14 it's a great number but 42 it's the answer to life."

let pi;
let index1 = message.indexOf("3.14");
if(index1!=-1){
    pi = parseFloat(message.substring(index1, index1+4));
    console.log("Pi: " + pi);
}else{
    pi = -1;
    console.log("3.14 not in the string");
}

let answerToLife;
let index2 = message.indexOf("42");
if(index2!=-1){
    answerToLife = parseInt(message.substring(index2, index2+2));
    console.log("Answer to life: " + answerToLife);
}else{
    answerToLife = -1;
    console.log("42 not in the string");
}

let result = pi + answerToLife;
console.log(result.toString() + " is the result of adding pi and answerToLife");
