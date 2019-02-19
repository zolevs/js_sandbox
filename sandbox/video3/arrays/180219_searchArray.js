const myTodos = ['Buy bread', 'Go to gym', 'Record video'];

console.log(myTodos.indexOf('Go to gym'));
// console.log(myTodos[myTodos.indexOf('Record video')]);

const newTodos = [{
    title: 'Buy Bread',
    isDone: false,
}, {
    title: 'Go to gym',
    isDone: false,
}, {
    title: 'Record video',
    isDone: true,
}, {
    title: 'Basket',
    isDone: true,
}];

/* const index = newTodos.findIndex(function(todo, index){
    console.log(todo);
    return todo.title === 'Go to gym';
});

console.log(index); */

// // // Method 1
/* 
    const findTodo = function(myTodos, title){
    const index = myTodos.findIndex(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    });
    return myTodos[index];
}

let printMe = findTodo(newTodos, 'Go to gym');
console.log(printMe);
 */

 // // // Method 2

 const findTodo = function(myTodos, title){
    const titleReturned = myTodos.find(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase();
    });
    return titleReturned
 }

 let printMe = findTodo(newTodos, 'Basket');
 console.log(printMe);