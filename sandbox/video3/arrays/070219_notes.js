const notes = [ { 
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise'
}, {
    title: 'Office modification',
    body: 'Get a new monitor'
}];
    
    
/* 
const position = notes.indexOf('Note 13');
console.log(position);

console.log(`At position ${position} is ${notes[position]}`); */

console.log(notes.length);
console.log(notes);

// console.log(notes.indexOf({}));

// console.log( {} === {}); // // false

// let someObject = {};
// let otherObject = someObject;

// console.log(someObject === otherObject); // // true

const index = notes.findIndex(function (note, index){
    console.log(note);
    return note.title === 'Habits to work on';
})

console.log(index);