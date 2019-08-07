// Show the following output using while:
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *

const max = Number.MAX_SAFE_INTEGER;
const ROW_NUM = 15; // number of rows to be printed, range from 0 to MAX_SAFE_INTEGER

for(var curr_line = ROW_NUM; curr_line > 0; curr_line--){

    if(ROW_NUM < 0){
        // Pritn error message, exit program
    }
    const n_lgst = find_N_Largest_Odd_Num(curr_line);
    const line_content = get_line_content(n_lgst);
    console.log(line_content);
}

// Input line size, return line content with stars
function get_line_content(length){
    var content = "";
    if(length < 0){
        // Pritn error message, exit program
    } else {
        // Combining stars for content
        for(var i=1;i<=length;i++){
            content += "*";
        }
    }
    return content;
}

// Find N largest number less than MAX_SAFE_INTEGER
function find_N_Largest_Odd_Num(N){
    for(var i = 1; i <= max; i++){
        // Find N largest
        if(N == 1){
            return i;
        }
        // If i is an odd number
        if(i % 2 == 0){
            N--;
        }
    }
}