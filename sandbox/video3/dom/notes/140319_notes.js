


document.querySelector('button').addEventListener('click', function(event){
    console.log(event);
    event.target.textContent = 'The button was clicked.';
});