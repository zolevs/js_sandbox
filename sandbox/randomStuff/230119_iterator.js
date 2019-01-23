// // iterator

let arr = [1,2,3,4];

let it = arr[Symbol.iterator]();
console.log(it);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

let name = "Zoran";
let nm = name[Symbol.iterator]();

console.log(nm.next());
console.log(nm.next());
console.log(nm.next());