// //   filtering an array
// //   

// let scores = [84, 34, 24, 99, 28, 38, 5, 8, 11, 0];
// /* 
// let passScores = scores.filter(function (value, index) {
//     // console.log(`value: ${value} - ${index}`);
//     return value > 60;
// });
//  */
// // // arrow funcition
// let passScores = scores.filter( value => value > 60)

// console.log(scores);
// console.log(passScores);




// // map on array
/* 
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let product = function(value){
    return value * value;
};

let square = nums.map(product);
console.log(square);

let quad = nums.map(product).map(product);
console.log(quad); */

/* let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let obj = nums.map(function(value, index, arr){
    // console.log(value, index, arr);
    return {
        index: index,
        value: value,
        square: value * 2,
        cube: value * 3,
        originalArr: arr,
    };
});

console.log(obj);


 */

// //// chaining

let str = "   Heare is a string.";

let str1 = str.replace('Heare', 'Here');

let str2 = str1.toUpperCase();

let str3 = str2.trim();

console.log(str3);

// // with chaining
console.log(str.replace('Heare', 'Here').toUpperCase().trim().split(" ").join('-'));

// // // 

