const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

// // 

const incompleteTodos = todos.filter(function(todo){
    return !(todo.completed)
});

const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left.`;
console.log(incompleteTodos);
document.querySelector('body').appendChild(summary);

todos.forEach(function(todo){
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('body').appendChild(p);
})


// const ps = document.querySelectorAll('p');

// ps.forEach(function(p){
//     p.textContent = '****';
// });

// // add new element
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'New text from JS';
// // console.log(newParagraph);
// document.querySelector('body').appendChild(newParagraph);
