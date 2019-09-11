let link = document.querySelector('a');
link.addEventListener('click', function(event){
    event.preventDefault();
    console.log('This link doesn\'t send us to a differen page as we\'re preventing the default behaviour');
});