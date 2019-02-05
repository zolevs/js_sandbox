const todos = ['Buy milk', 'Wash hand', 'Exercise', 'Eat healthy', 'Read JS'];
console.log(`You have ${todos.length} todos on your list.`);

// console.log(`First on todo list is ${todos[0]} and last on todo list is ${todos[todos.length - 1]}`);

// console.log (`Todo: ${todos[0]}`);
// console.log (`Todo: ${todos[todos.length - 2]}`);


console.log(todos);

// remove 3rd item
removed = todos.splice(2,1);
console.log(removed);
// console.log(todos);

// add new item onto the end
todos.push('Have a walk');
// console.log(todos);

todos.splice(0,1);
// console.log(todos);

console.log(todos);

todos.forEach( function(item, index){
    // const num = index + 1;

    console.log(`${index+1} - ${item}`)
});