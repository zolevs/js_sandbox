let array = [1, 3, 5, 6, 7, 9, 11];

console.log(array);
console.log(array.length);

/*

delete array[2];
console.log(array);
console.log(array.length);

*/

// // splice

array.splice(2,1);
console.log(array);
console.log(array.length);

const removeElement = function (a, index){
    let newArray = [...a];
    newArray.splice(index, 1);
    return newArray;
};
let newArray = removeElement(array, 2);
console.log(newArray);

