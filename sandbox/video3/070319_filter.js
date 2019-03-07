// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 34, 98, 9];

// let evenNumbers = numbers.filter(function(n){
//     // // even numbers
//     // return n % 2 == 0;

//     // // odd number
//     return !(n % 2 == 0);
// });

// // arrow function

// let evenNumbers = numbers.filter( n => !(n % 2 == 0));

// console.log(evenNumbers);
let numbers = [1, 2, 3, 46, 5, 66, 7, 8, 34, 98, 9];

let breakPoint = 30;
// let bigNumbers = numbers.filter(function (num){
//     return num > breakPoint;
// });

let bigNumbers = numbers.filter(checkBig);


function checkBig(num){
    return num > breakPoint;
};


let smallNumbers = numbers.filter(function(num){
    return num  < breakPoint;
});;
let oddNumbers = numbers.filter(function(num){
    // return num % 2;
    // 0, 1, 10, 11, 100, 101, 110, 111, 1000
    // 0, 1,  2,  3,   4,  5,  6, ,  7 ,   8

    // return !(num & 1);
    return num & 1;
});


console.log('Smaller than 30 ', smallNumbers);
console.log('Big numbers ', bigNumbers);
console.log('Odd numbers ', oddNumbers);


