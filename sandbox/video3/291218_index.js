// // === equality operator
// // !== not equal operator

/* let temp = 180;
// let isFreezing = temp !== 32;
let isFreezing = temp <= 31;

if (isFreezing){
    console.log('freezing');
}

if (temp >= 110 ){
    console.log('It is way too hot.');
}


let age = 65;

if (age <= 7){
    console.log('Junior');
} else if (age >= 65) {
    console.log('Senior');
} else {
    console.log('Other');
} */
/* let isAccountLocked = false;
let userRole = 'admin';

if (isAccountLocked){
    console.log('Is locked');
} else if (userRole === 'admin'){
    console.log('Welcome Admin')
} else {
    console.log('Welcome');
}   

 */
// // logical operators

 let temp = 155;
 
 if (temp >= 60 && temp <= 90){
    console.log('It is pretty nice out');
 }else if ( temp <= 0 || temp >= 120){
     console.log('Do not go outside.');
 } else {
     console.log('Do what you want.')
 }

 // // //

 let isGuestOneVegan = false;
 let isGusetTwoVegan = false;

 // are both vegan?
 if (isGuestOneVegan && isGusetTwoVegan ){
    console.log('Vegan separe')
 } else if (isGuestOneVegan || isGusetTwoVegan) {
     console.log('Let them chose');
 } else {
     console.log('Non vegan separe');
 }

