// Show the 9 times table from 1 to 10 using while

let line = "";
let currRow = 1;
let currColumn = 1;
console.log("===================== 9x9 Times Table======================");
while(currRow <= 9){
    currColumn = 1;
    while(currColumn <= 9){
        line += `${currRow}x${currColumn}=${currRow*currColumn} `;
        currColumn++;
    }
    console.log(line);
    line = "";
    currRow++;
}