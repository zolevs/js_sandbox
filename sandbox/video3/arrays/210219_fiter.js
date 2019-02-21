// //   filtering an array
// //   

let scores = [84, 34, 24, 99, 28, 38, 5, 8, 11, 0];
/* 
let passScores = scores.filter(function (value, index) {
    // console.log(`value: ${value} - ${index}`);
    return value > 60;
});
 */
// // arrow funcition
let passScores = scores.filter( value => value > 60)

console.log(scores);
console.log(passScores);