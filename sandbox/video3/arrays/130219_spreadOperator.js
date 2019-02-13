// // spread operator

let student1 = ['James','Mary','Alfred','Zozon'];

// let student2 = ['Steven', 'Mike', student1];
let student2 = ['Steven', 'Mike', ...student1]; //// obrati paznju na ... to je spread operator

console.log(student2);

let scores = [95, 34, 33, 12, 84, 56, 39];

console.log(Math.max(...scores));

let arr1 = [1, 2, 3];
// let arr2 = arr1;
let arr2 = [...arr1];

arr1.push(23);
console.log(arr2);
console.log(arr1);


let funn1 = function (...args) {
    console.log(args);
}

funn1();
funn1(12,2,13,1);
