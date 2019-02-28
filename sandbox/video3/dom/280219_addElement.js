/* const newParagraph = document.createElement('p');
newParagraph.textContent = 'New note';
document.querySelector('body').appendChild(newParagraph);


console.log(newParagraph);

 */

 const todos = [{
    text: 'Order cat food',
    completed: false
 },{
    text: 'Clean kitchen',
    completed: false
 },{
    text: 'Do work',
    completed: true
 },{
    text: 'Exercise',
    completed: false
 }];

 // You have xx todos left 
const incompleteTodos = todos.filter(function (todo){
    return !todo.completed;
});
const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left.`;
document.querySelector('body').appendChild(summary);

todos.forEach(function(todo){
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('body').appendChild(p);
});

/* 
const todosNr = function(notes) {
    return notes.filter(function (note){
        return !note.completed;
    })
}

console.log(todosNr(notes));
 */
// Add a p for each todo