/* let num = 103.9496;
console.log(num.toFixed(2));


console.log(Math.round(124.924));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 10;
let max = 20;

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // 0 - 0.999999999
console.log(randomNum);
 */

// // // ver 1
/* let rangeMin = 1;
let rangeMax = 5;

let guesNumber = function(myGuest){
    let randomFromRange = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;
    console.log(randomFromRange);
    if (randomFromRange === myGuest) {
        return true;
    } else {
        return false;
    }
    console.log(randomFromRange);
    return randomFromRange;
}

console.log(guesNumber(3));
 */

 // // ver 2

 let makeGuess = function (guess){
    let min = 1;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1))  + min;
    console.log(randomNum);
    return guess === randomNum;
 }

 console.log(makeGuess(1))