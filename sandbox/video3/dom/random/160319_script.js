document.querySelector('#create-note').addEventListener('click', function(event){
    event.target.textContent = 'Create note';
});

document.querySelector('#remove-all').addEventListener('click', function(event){
    event.target.textContent = 'Remove note';
    document.querySelectorAll('.note').forEach(function(note){
        note.remove();
    })
});


// document.querySelectorAll('button')[1].addEventListener('click', function(){
//     console.log('Hello')
// })


// document.querySelector('button').addEventListener('click', function(e){
//     e.target.textContent = 'New Content';
// })










