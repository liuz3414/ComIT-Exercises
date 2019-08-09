// Define a playerName variable with the following value: Patrik Laine is lame
// Define a teams variable with the following value: New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins
// Define a message variable with the following value: Winnipeg is the best Canadian city, Go Winnipeg
// Use the slice method to get the following words or phrases from the previous variables:
// Patrik Laine is
// jets
// the best
// , Go
// Use a template variable to create the final result
// Change the first jets character to be Capitalized
// Create all the variables that you might need to accomplish this objective
// The final output must be: PATRIK LAINE is the best Jets player, Go Jets!!

let playerName = "Patrik Laine is lame";
let teams = "New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins";
let message = "Winnipeg is the best Canadian city, Go Winnipeg";

let s1 = playerName.slice(playerName.indexOf("Patrik Laine is"), playerName.indexOf("Patrik Laine is")+15);
let s2 = teams.slice(teams.indexOf("jets"), teams.indexOf("jets")+4);
s2 = s2.charAt(0).toUpperCase() + s2.slice(1, s2.length);
let s3 = message.slice(message.indexOf("the best"), message.indexOf("the best")+8);
let s4 = message.slice(message.indexOf(", Go"), message.indexOf(", Go")+4);

console.log(`${s1} ${s3} ${s2} player${s4} ${s2}!!`);