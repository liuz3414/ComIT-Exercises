let firstButton = document.querySelector('firstButton');
firstButton.addEventListener('click', function(){
    window.alert('You clicked an event listened element');
});

firstButton.addEventListener('mouseover', function(){
    firstButton.textContent = 'Mouse over';
});