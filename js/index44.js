// Define a text variable and assign the following value: HELLO
// Define a result variable
// Get each char from the text variable and revert the text assigning it to the result variable
// At the end you should be able to show the following text: OLLEH
// Once you reverted the text, transform it to lowercase
// Show the final output: the final result is: olleh
// It kind of sound spanish, right?.. ole!!! (lol)

let hello = "HELLO";
let result = (hello.charAt(4)+hello.charAt(3)+hello.charAt(2)+hello.charAt(1)+hello.charAt(0)).toLowerCase();
console.log("The final result is: "+result);
