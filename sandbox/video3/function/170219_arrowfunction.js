/* const sayHello = function(name){
    return 'Hello ' + name;
}

console.log(sayHello('John')); */
/* 
const sayHello = (name) => `Hello ${name}`;

console.log(sayHello('John'));

 */
const todos = [{
    title: 'Buy bread',
    isDone: true
},{
    title: 'Go to gym',
    isDone: true
},{
    title: 'Buy ketchup',
    isDone: false
}];

/* 
    const thingsDone = todos.filter((todo) => {
    return todo.isDone === true;
});
 */

 /*
const thingsDone = todos.filter( (todo) => todo.isDone === true );

console.log(thingsDone);
*/

const todos2 = [{
    title: 'Go for a walk',
    isDone: false
},{
    title: 'Return computers',
    isDone: false
},{
    title: 'Read JS',
    isDone: true
},{
    title: 'Light fire',
    isDone: true
}]

const thingsNotDone = todos2.filter(function(todo){
    return todo.isDone === false;
});

console.log(thingsNotDone.forEach(function(notDone){
    console.log(notDone.title);
}));


// console.log(thingsNotDone);
