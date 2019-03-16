document.querySelector('#create-note').addEventListener('click', function(e){
    e.target.textContent = 'Add button clicked';
})

document.querySelector('#remove-all').addEventListener('click', function(e){
    document.querySelectorAll('.note').forEach(function(note){
        note.remove();
    })
    e.target.textContent = 'Remove button clicked';
})



// document.querySelectorAll('.note').addEventListener('click', function(){
//     document.querySelectorAll('.note')
// }).forEach(function(note){
//     note.remove();
// })


// document.querySelector('button').addEventListener('click', function(event){
//     console.log('Clicked');
//     console.log(event);
//     event.target.textContent = 'New Text  !!!';
// });

// document.querySelectorAll('button')[1].addEventListener('click', function(){
//     console.log('Second button');
// })





// document.querySelector('button').addEventListener('click', function(event){
//     console.log(event);
//     event.target.textContent = 'New text in button';
// });