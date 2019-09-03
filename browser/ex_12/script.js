let counter = 0;

let id = setInterval(function(){
    console.log(counter + " seconds has passed.");
    counter++;
}, 1000);

clearInterval(id);