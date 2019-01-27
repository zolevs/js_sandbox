// const notes = ['Note 1', 'Note 2', 'Note 3', 'Note 4'];

/* notes.push('New Push Note');
console.log(notes.length);
console.log(notes[notes.length - 1]);

let removed = notes.pop();
console.log(notes.length);
console.log(notes[notes.length - 1]);
console.log(removed);
// // pop & push - works with the end of the array

let firstRemoved = notes.shift();
// shift remove firs item form the array
console.log(notes.length);
console.log(notes);
console.log(firstRemoved);

notes.unshift('My first note');
console.log(notes);
 */

// const removed = notes.splice(1,1, 'New inserted item');

/* notes[2] = 'New';

console.log(notes.length);
console.log(notes);
// console.log(removed);
const removed = notes.splice(1, 0, 'Add');
 */
/* console.log(notes.length);
console.log(notes);

notes.splice(1,1);

console.log(notes.length);
console.log(notes);
 */
/* const doThis = function(){
    console.log('Hello');
}
notes.forEach(doThis); */

/* notes.forEach(function (item, index){
    console.log(`${index} - ${item}`);
}) */

/* for (let i=0; i <=  notes.length-1; i++) {
    console.log(`${i + 1}. to do ${notes[i]}`);
} */
/* 
const contains = notes.indexOf('Note 3');
console.log(contains); */

const notes = [ {
        title: 'My next trip',
        body: 'I would like to go to Spain'
    }, {
        title: 'Habbits to work on',
        body: 'Exercise. Eating a bit better'
    }, {
        title: 'Office notification',
        body: 'Get a new seat'
    }
];

// console.log(notes);

const index = notes.findIndex(function(note, index){
    return note.title === 'Habbits to work on';
})

console.log(index);