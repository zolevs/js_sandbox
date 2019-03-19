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

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.querySelector('#notes').innerHTML = '';

    // console.log(filteredNotes);
    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        document.querySelector('#notes').appendChild(noteEl);
    })
}

renderNotes(notes, filters);

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
    // console.log(e.target.value);
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

// let buttons = document.querySelectorAll('button');
// console.log(buttons);
// buttons[1].addEventListener('click', function(){
//     console.log('Second button');
// })