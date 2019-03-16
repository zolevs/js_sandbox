const notes = [{
    title:'My next trip',
    body: 'I would like to go to Spain',
}, {
    title: 'Habbits to work on',
    body: 'Eercise.',
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];

const filters = {
    searchText: ''
};
const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.querySelector('#notes').innerHTML = "";

    // console.log(filteredNotes);
    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        document.querySelector('#notes').appendChild(noteEl);
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(event){
    event.target.textContent = 'Create note';
});

document.querySelector('#remove-all').addEventListener('click', function(event){
    event.target.textContent = 'Remove note';
    document.querySelectorAll('.note').forEach(function(note){
        note.remove();
    })
});
document.querySelector('#search-text').addEventListener('input', function(event){
    // console.log(event.target.value);
    filters.searchText = event.target.value;
    renderNotes(notes, filters);
})