let element = document.querySelector('li');
element.setAttribute('class', 'orange');
let nextElement = null;

while((nextElement = element.nextElementSibling) != null){
    nextElement.setAttribute('class', 'orange');
    element = nextElement;
}

// element -> last element
// next    -> null
let prevElement = null;
let i = 1;
while((prevElement = element.previousElementSibling) != null){
    if(i == 2)
        prevElement.setAttribute('class', 'red');
    if(i == 4)
        prevElement.setAttribute('class', 'green');
    element = prevElement;
    i++;
}