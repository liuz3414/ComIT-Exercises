let link = document.querySelector('a');
let counter = 1;
let color = null;

link.onmouseover = function(){
    if(counter == 1){
        color = 'red';
    }else if(counter == 2){
        color = 'blue';
    }else if(counter == 3){
        color = 'green';
    }else if(counter == 4){
        color = 'gray';
    }else if(counter > 4){
        color = 'white';
    }
    console.log(color);
    link.style.color = color;
    counter++;
};

link.onmouseout = function(){
    console.log(`The link background color is: ${color}`);
}