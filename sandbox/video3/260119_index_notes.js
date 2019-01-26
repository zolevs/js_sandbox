const notes = ['Note 1', 'Note 2', 'Note 3', 'Note 4'];

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

for (let i=0; i <=  notes.length-1; i++) {
    console.log(`${i + 1}. to do ${notes[i]}`);
}