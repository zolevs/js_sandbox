// // === equality operator
// // !== not equal operator

let temp = 31;
// let isFreezing = temp !== 32;
let isFreezing = temp <= 31;
console.log(isFreezing);

// // //

let age = 45;
if(age < 7){
    console.log('Child under 7 years old');
} else if ( 65 < age){
    console.log('Senior over 65 years old');
} else {
    console.log('Other')
}
console.log('============================');

let calcAgeChild = age <= 7;
let calcAgeSenior = age >= 65;

console.log(calcAgeChild);
console.log(calcAgeSenior);
