const todos = ['Change HDD', 'Have a walk', 'Go to dance', 'Make a snowman', 'Wash'];

removed = todos.splice(2,1);
console.log(removed);

// todos.splice(todos.length,0, 'Add new item');
todos.push('Last item');
todos.unshift('First item');

console.log(`I have ${todos.length} todos on my list.`);
console.log(todos);

// console.log(`First todo: ${todos[0]}`);
// console.log(`Last todo: ${todos[todos.length-1]}`);

todos.forEach(function(item, index) {
    console.log(`Number ${index+1} on my todo list is ${item}`);
});

for (let count = 0; count <= todos.length; count++ ){
    const num = count + 1;
    const todo = todos[count];
    console.log(`${num}. ${todo}`);
}