const ROW_NUM = 5; // number of rows to be printed, must be >= 0
let line_content = "";
let curr_row = 1;
let currColumn = 1;

console.log("Row number: " + ROW_NUM);
while(curr_row <= ROW_NUM){
    currColumn = 1;
    while(currColumn <= curr_row){
        line_content += "*";
        currColumn++;
    }
    console.log(line_content);
    line_content = "";
    curr_row++;
}

if(ROW_NUM < 0){
    console.log("row number must be >= 0");
}