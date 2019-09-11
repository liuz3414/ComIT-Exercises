let html = document.querySelector('html');

html.addEventListener('click', function(event){
    console.log(`Click possition: x-axis: ${event.pageX}, y-axis: ${event.pageY}`);
});