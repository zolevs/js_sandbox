// // slice
let arr = [1, 2, 3, 4, 5, 6];

let arr1 = arr.slice(0, 2);
console.log(arr1);

let arr2 = arr.slice(2, 3);
console.log(arr2);

let arr3 = arr.slice(4);
console.log(arr3);

// // splice - modifies array
// // splice(start, delete)

let arr4 = arr.splice(3,2);
console.log(arr4);
// ovi su obrisani sto se sada nalaze u arr4
// console.log(arr);

let arrOrg = [1, 2, 3, 4, 5, 6];

let arr5 = arrOrg.splice(2, 0, 'inserted 1', 'inserted 2');
console.log(arrOrg);

let arr6 = arrOrg.splice(2, 1, 'Inserted 11', 'Inserted 22');
console.log(arrOrg);

