const todos = [{
    text: 'Buy cat food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: false
}, {
    text: 'Do work',
    completed: true
}];

const deleteTodo = function (todos, todosText){
        const index = todos.findIndex ( function(todo){
            return todo.text === todosText;
        });
        if(index > -1){
            todos.splice(index, 1);
        }
    };

// const notes = deleteTodo(todos, 'Do work');
// console.log(todos);




console.log(getThingsToDo(todos));