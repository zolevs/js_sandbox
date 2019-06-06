let numbers = new Set();
numbers.add(1);

console.log(numbers);
numbers.add(2);
console.log(numbers);


numbers.add(1);
console.log(numbers);

let fruits = new Set(['apples', 'oranges', 'pinapple', 'apples']); 
console.log(fruits); // // no duplicates allowed

let veggies = new Set(['potato', 'tomato', 'carrots']);
let veggiesArray = [...veggies];
console.log(veggiesArray);

for (let fruit of fruits){
    console.log(fruit);
}