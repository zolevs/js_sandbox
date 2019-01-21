/* 
const notes = ['Note 1', 'Note 2', 'Note 3', 'Note 4', 'Note 5', 'Note 6'];

let position = notes.indexOf('Note 4');

console.log(position);
position = notes.indexOf('xxx');
console.log(position);
 */

 const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Spain'
 }, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
 }, {
    title: 'Office modification',
    body: 'Get a new seat.'
 }];

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title === noteTitle;
        // return note.title
    })
 }


/*  const findNote = function(notes, noteTitle){
    const index = notes.findIndex( function(note, index) {
        // return note.title.toLowerCase() === noteTitle.toLowerCase();
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    });
    return notes[index];
 } */

 const note = findNote(notes, 'Office modification');
 console.log(note);



/*  console.log(notes.length);
 console.log(notes);

const index = notes.findIndex(function (note, index){
   console.log(note); 
   return note.title === 'Habbits to work on';
});

console.log(index); */