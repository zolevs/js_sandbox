/* 
const notes = ['Note 1', 'Note 2', 'Note 3'];

console.log(notes[1]);
console.log(notes[notes.length - 1]);
 */
/* const toDoList = ['Note 1', 'Note 2', 'Note 3', 'Note 4', 'Note 5'];

console.log(`You have ${toDoList.length} things on your todo list`);
console.log(`Las one is ${toDoList[toDoList.length - 1]}`)
 */

const notes = ['Note 1', 'Note 2', 'Note 3'];

notes.push('Note XX');
let removed = notes.pop();

console.log(removed);

console.log(notes.shift());
console.log(notes.unshift());
console.log(notes.length);
console.log(notes);


