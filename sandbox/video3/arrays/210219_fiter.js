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

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let product = function(value){
    return value * value;
};

let square = nums.map(product);
console.log(square);

let quad = nums.map(product).map(product);
console.log(quad);