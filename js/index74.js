// Show the following output using while:
// *
// ***
// *****
// *******
// *********
// ***********
// *************

const max = Number.MAX_SAFE_INTEGER;
const ROW_NUM = 10;     // Number of rows to be printed, range from 0 to MAX_SAFE_INTEGER
let curr_line_length = 1; // N
let n_lgst_odd = 0;     // N largest odd number from (0, MAX_INT)
let line_content = "";  // Content for each line

if(ROW_NUM < 0){
    console.log("row number must be >= 0");
}

while(curr_line_length < ROW_NUM){
    n_lgst_odd = find_N_Largest_Odd_Num(curr_line_length);
    line_content = get_line_content(n_lgst_odd);
    console.log(line_content);
    curr_line_length++;
}

// Input line length, return line content with stars
function get_line_content(length){
    let content = "";
    if(length < 0){
        console.log("Invalid line content.");
        return null;
    }
    // Combining stars for content
    let i = 1;
    while(i <= length){
        content += "*";
        i++;
    }
    return content;
}

// Find N largest number less than MAX_SAFE_INTEGER
function find_N_Largest_Odd_Num(N){
    let currNum = 1;
    while(currNum <= max){
        // If i is an odd number
        if(currNum % 2 != 0){
            N--;
        }
        // Find N largest
        if(N === 0){
            return currNum;
        }
        currNum++;
    }
}