const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Do work food',
    completed: false
}, {
    text: 'Do some exercise',
    completed: false
}];

const filters = {
    searchText: ''
}

const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function (todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !(todo.completed)
    });

    document.querySelector('#todos').innerHTML = '';

    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left.`
    document.querySelector('#todos').appendChild(summary);
    
    todos.forEach(function(todo){
        const p = document.createElement('p');
        p.textContent = todo.text;
        document.querySelector('#todos').appendChild(p);
    
    })

}

renderTodos(todos, filters);


// // listen to new creation

document.querySelector('#add-todo').addEventListener('click', function(event){
    console.log('clicked');
    const newText = document.createElement('p');
    newText.textContent = 'Added new todo';
    document.querySelector('body').appendChild(newText);
})

document.querySelector('#search-text').addEventListener('input', function(event){
    filters.searchText = event.target.value;
    renderTodos(todos, filters);
})













// document.querySelector('button').addEventListener('click', function(event){
//     console.log(event);
//     event.target.textContent = 'The button was clicked.';
// });

// // // my solution
// const pElement = document.createElement('p');

// const newArray = todos.filter(function(element){
//     return element.completed == false;
// });
// console.log(newArray.length);
// pElement.textContent = `You have ${newArray.length} todos left.`;
// document.querySelector('body').appendChild(pElement);

// newArray.forEach(function (todo){
//     const p = document.createElement('p');
//     p.textContent = todo.text;
//     document.querySelector('body').appendChild(p);
// });

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