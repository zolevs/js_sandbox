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


document.querySelector('#search-text').addEventListener('input', function(e){
    // console.log(e.target.value);
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#name-form').addEventListener('submit', function(e){
    e.preventDefault();
    let field = e.target.elements.firstName.value;
    console.log(field);
    e.target.elements.firstName.value = '';
});
