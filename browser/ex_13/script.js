let seconds = window.prompt('Please enter the amount of seconds wou want stay');

let id = setInterval(function(id){
    if(seconds == 0){
        clearInterval(id);
    }else{
        console.log(counter + "s left.");
        seconds--;
    }  
}, 1000);