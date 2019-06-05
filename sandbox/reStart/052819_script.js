// // array methods

let numbers = ['one', 'two', 'three', 'four', 'five'];

// console.log(numbers.pop());
// console.log(numbers.shift());

// console.log(numbers);

// console.log(numbers.push('add'));

// console.log(numbers);

// console.log(numbers.unshift('front'));
// console.log(numbers);

// console.log(numbers.concat(['concat 1', 'concat 2']));
// console.log(numbers); // arrary is unchanged with concat
// numbers = numbers.concat(['second 2', 'second 3']);

// console.log(numbers);

// numbers = [...numbers, ...['spread 1', 'spread 2']];
// console.log(numbers);

// console.log(numbers.join('; '));

// console.log(numbers.slice(2, 4));

console.log(numbers.splice(1,1));
console.log(numbers);

console.log(numbers.reverse());

console.log(numbers.sort());
console.log([1, 3, 10].sort()); // // !!!!!

console.log(numbers.indexOf('two'));
console.log(numbers.includes('one'));

let splitString = 'how are you ?';
console.log(splitString.split(' '));