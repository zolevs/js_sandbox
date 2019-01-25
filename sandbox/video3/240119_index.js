const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
},{
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
},{
    title: 'Office modification',
    body: 'Get a new seat'
}];

// console.log('A' < 'a');

const sortNotes = function(notes){
    notes.sort(function(a, b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1;
        } else if (b.title.toLowerCase() < a.title.toLowerCase()){
            return 1;
        } else {
            return 0;
        }
    });
}



const findNotes = function(notes, query){
    const filteredNotes = notes.filter(function(note, index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isBodyMatch;
    });
    return filteredNotes;
    
}

sortNotes(notes);
console.log(notes);


// console.log(findNotes(notes,'ne'));

// // // sort mehthod



/*
const  filteredNotes = notes.filter(function (note, index){
    const isTitleMatch = note.title.toLowerCase().includes('ne');
    const isBodyMatch = note.body.toLowerCase().includes('ne');
    // isTitleMatch.includes
    
    return isTitleMatch || isBodyMatch;

});
*/

// console.log(filteredNotes);

// // filter mehod
/* var words = ['spray', 'limit', 'elite', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result); */