const todos = [
    {text: 'play 1', author: 'shaun'},
    {text: 'play 2', author: 'author'},
    {text: 'play 3', author: 'writer'}
];

console.log(todos);
console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');
console.log(JSON.parse(stored));

// // store
// localStorage.setItem('name', 'mario');
// localStorage.setItem('age', 45);


// // read
// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');

// console.log(name, age);

// // update
// localStorage.setItem('name', 'Bob');
// localStorage.age = '46';


// name = localStorage.getItem('name');
// age = localStorage.getItem('age');

// console.log(name, age); 


// // delete
// localStorage.removeItem('name');

// // remove all
// localStorage.clear();