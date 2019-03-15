

document.querySelector('button').addEventListener('click', function(event){
    console.log('Clicked');
    console.log(event);
    event.target.textContent = 'New Text  !!!';
});




























// document.querySelector('button').addEventListener('click', function(event){
//     console.log(event);
//     event.target.textContent = 'New text in button';
// });