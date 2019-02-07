const notes = ['Notes 1','Notes 2','Notes 3', 'Notes 4', 'Notes 5'];
console.log(notes.length);
/* 
notes.push('New note');
console.log(notes.length);

let removed = notes.pop();
console.log(`Removed item from array: ${removed}`);

let removeFirst = notes.shift();
console.log(removeFirst);

notes.unshift('Add at the beginning');
console.log(notes[0]);
console.log(notes);
 */
// notes.splice(notes.length, 0, 'Zole');
// console.log(notes);

// notes.splice(1, 0, 'This is the new item');
// console.log(notes);

// // // //

/* const doThis = function(){

};

notes.forEach(doThis);

// //

notes.forEach(function(){

}) */

/* notes.forEach(function(item, index){
    console.log('Test');
    console.log(item, index);
}) */

// // Counting ... 1
/* for (let count = 0; count <= 2; count++) {
    console.log(count);
} */
for (let count = 0; count < notes.length; count++){
    console.log(`${count + 1} - ${notes[count]}`)
}

// //
for (let count = notes.length - 1; count >= 0; count--){
    console.log(notes[count]);
}
// //
