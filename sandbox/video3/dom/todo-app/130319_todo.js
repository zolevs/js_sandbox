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
    text: 'Do some exercise',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}];

// 
const pElement = document.createElement('p');

const newArray = todos.filter(function(element){
    return element.completed == false;
});
console.log(newArray.length);
pElement.textContent = `You have ${newArray.length} todos left.`;
document.querySelector('body').appendChild(pElement);

newArray.forEach(function (todo){
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('body').appendChild(p);
});

// const done = todos.filter(function(todo){
//     return todo.completed == true;
// });




// console.log(done);


// const todosList = document.createElement('p');
// todosList.textContent = todos[0].text;
// document.querySelector('body').appendChild(todosList);


// const paragraphs = document.querySelectorAll('p');
// console.log(paragraphs);

// paragraphs.forEach(function(ps){
//     if(ps.textContent.includes('the')){
//         ps.remove();
//     }
//     console.log(ps);
// });