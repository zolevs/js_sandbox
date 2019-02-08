// const notes = ['Note 1', 'Note 2', 'Note 3', 'Note 4', 'Note 5'];

// const find = notes.indexOf('Note 2');
// console.log(find);

const notes = [{
    title: 'My next trip',
    body: 'I would like to go to spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];

const findNote = function(notes, noteTitle){
    return notes.find(function (note, index){
       return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
}

const note = findNote(notes, 'Office modification');
console.log(note);

/* 
const findNote = function(notes, noteTitle){
    const index = notes.findIndex(function (note, index){
       return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
    return notes[index];
}
const note = findNote(notes, 'Office modification');
console.log(note);

 */