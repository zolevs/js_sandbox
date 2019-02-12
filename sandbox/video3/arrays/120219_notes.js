// Filter

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

// // method filter

const findNotes = function (notes, query){
    const filteredNotes = notes.filter(function (note, index){
        // const isTitleMatch = note.title.toLowerCase()
        // isTitleMatch.includes('string')
    
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    
        return isTitleMatch || isBodyMatch;
    
        // console.log(isTitleMatch);
        // return true;
    });
    return filteredNotes;
}

/* const filteredNotes = notes.filter(function (note, index){
    // const isTitleMatch = note.title.toLowerCase()
    // isTitleMatch.includes('string')

    const isTitleMatch = note.title.toLowerCase().includes('ne');
    const isBodyMatch = note.body.toLowerCase().includes('ne');

    return isTitleMatch || isBodyMatch;

    // console.log(isTitleMatch);
    // return true;
}); 
 console.log(filteredNotes);
*/

console.log(findNotes(notes, 'office'));

