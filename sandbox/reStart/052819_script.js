
// // call back function

function greeting(name){
    console.log(`Just ${name}`);
}

function sayHi(callback){
    callback('Zole');
}

sayHi(greeting);


// 
// 

let numbers = [1,5,3,10];
console.log(numbers.sort());
console.log(numbers.sort((a,b)=> a-b));