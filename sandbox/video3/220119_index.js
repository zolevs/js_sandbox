
 const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
 }, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
 }, {
    title: 'Office modification',
    body: 'Get a new seat.'
 }];

// trip
// ne

const findNotes = function (notes, query){

   return notes.filter(function (note, index){
   
   // const isTitleMatch = note.title.toLowerCase()
      const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
      const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
      return isTitleMatch || isBodyMatch;
   });

   // return filteredNotes

}


console.log(findNotes(notes, 'work'));



/* const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title === noteTitle;
        // return note.title
    })
 }
 */

/*  const findNote = function(notes, noteTitle){
    const index = notes.findIndex( function(note, index) {
        // return note.title.toLowerCase() === noteTitle.toLowerCase();
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    });
    return notes[index];
 } */

 /* const note = findNote(notes, 'Office modification');
 console.log(note);
 */


/*  console.log(notes.length);
 console.log(notes);

const index = notes.findIndex(function (note, index){
   console.log(note); 
   return note.title === 'Habbits to work on';
});

console.log(index); */