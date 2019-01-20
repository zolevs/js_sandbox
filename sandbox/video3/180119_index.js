
/* 
const notes = ['Note 1', 'Note 2', 'Note 3'];

console.log(notes[1]);
console.log(notes[notes.length - 1]);
 */
const toDoList = ['Note 1', 'Note 2', 'Note 3', 'Note 4', 'Note 5'];

console.log(`You have ${toDoList.length} things on your todo list`);
console.log(`Last one is ${toDoList[toDoList.length - 1]}`);
console.log(toDoList);

toDoList[2] = 'This is now the new note 3';

console.log('--------------------');
/* const exampleCall = function(value, index){
    console.log(index, value);
}
toDoList.forEach(exampleCall);
 */

toDoList.forEach(function (item, index){
    // console.log(index, item);
    console.log(`This is number ${index} and todo is ${item} `);
});





// // // //

// console.log(toDoList);

/* 
console.log('----------------');

toDoList.splice(2, 1);
console.log(toDoList);

removed = toDoList.pop();
console.log(removed);

toDoList.push('Notes Push');
console.log(toDoList);
 */

// // //

// const notes = ['Note 0', 'Note 1', 'Note 2'];
/* 
notes.push('Note XX');
let removed = notes.pop();

console.log(removed);

console.log(notes.shift());
console.log(notes.unshift());
console.log(notes.length);
console.log(notes);

 */

// notes.splice(0, 1,'Note XX');

/* notes[1] = 'New';

console.log(notes.length);
console.log(notes); */