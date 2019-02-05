const todos = ['Buy milk', 'Wash hand', 'Exercise', 'Eat healthy', 'Read JS'];
console.log(`You have ${todos.length} todos on your list.`);

console.log(todos);

// remove 3rd item
removed = todos.splice(2,1);
console.log(removed);
todos.push('Have a walk');
todos.splice(0,1);

console.log(todos);

todos.forEach( function(item, index){
    // const num = index + 1;
    console.log(`${index+1} - ${item}`)
});
