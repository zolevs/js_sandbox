const notes = [{
    title: 'My next trip',
    body: 'I would like to travel to spain'
},{
    title: 'Office modification',
    body: 'Get a new seat'
},{
    title: 'Habbits to work on.',
    body: 'Exercise.'
}];

document.querySelector('#create-note').addEventListener('click', function(event){
    console.log(event);
    event.target.textContent = 'Clicked !!!';
});

document.querySelector('#remove-all').addEventListener('click', function(event){
    event.target.textContent = 'Remove Clicked ...';
    console.log('All notes removed');
    let allButton = document.querySelectorAll('.note');

    let numberNotes = 1;
    allButton.forEach(function(note){
        console.log(`${numberNotes} - removed note`);
        numberNotes++;
        note.remove();
    });
});

document.querySelector('#search-text').addEventListener('input', function(e){
    console.log(e.target.value);
});

// let buttons = document.querySelectorAll('button');
// console.log(buttons);
// buttons[1].addEventListener('click', function(){
//     console.log('Second button');
// })