// let ID = Symbol();
let ID = Symbol('This is unique ID');
console.log(ID);
console.log(typeof ID);

let SOME_KEY =Symbol();
let obj = {};

obj[SOME_KEY] = 123;
console.log(obj[SOME_KEY]);

console.log(typeof 123);
console.log(typeof 1.232);

console.log(Number.isInteger(10.2));
console.log(Number.isInteger(21));

let someNumber = new Number(3);
console.log(someNumber);

let anotherNumber = 12;

