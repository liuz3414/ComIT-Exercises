const ROW_NUM = 5; // number of rows to be printed, must be >= 0
let line_content = "";
let curr_row = ROW_NUM;
let currColumn = ROW_NUM;

// let line = "*******";
// lineMax = line.length;
// while(lineMax > 0){
//     let newLine = line.substr(0, lineMax);
//     console.log(newLine);
//     lineMax--;
// }

console.log("Row number: " + ROW_NUM);
while(curr_row >= 1){
    currColumn = curr_row;
    while(currColumn >= 1){
        line_content += "*";
        currColumn--;
    }
    console.log(line_content);
    line_content = "";
    curr_row--;
}

if(ROW_NUM < 0){
    console.log("row number must be >= 0");
}