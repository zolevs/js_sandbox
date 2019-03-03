// // // callbacks
// //

// // ver 1
// let logCall = function(){
//     console.log('logCall was called back');
// };

// setTimeout(logCall, 3000);


// // ver 2
// setTimeout(function(){
//     console.log('Function was called back with anonymous fn');
// }, 3000);


// let btn = document.getElementById('item1');
// btn.addEventListener('click', function(e) {
//     console.log('It was clicked');
// });
// console.log(btn);

// // example 2

let students = [{name: 'Mary', score: 80, school:'East'},
                {name: 'John', score: 73, school:'East'},
                {name: 'Dayana', score: 40, school:'East'},
                {name: 'David', score: 80, school:'East'},
                {name: 'John', score: 80, school:'West'},
                {name: 'Susy', score: 90, school:'East'},
                {name: 'Philip', score: 65, school:'East'},
                {name: 'John', score: 80, school:'West'} ];

let processStudents = function(data, callback){
    for (let i = 0; i < data.length; i++){
        if(data[i].school.toLowerCase() === 'east'){
            if(typeof callback === 'function'){
                callback(data[i]);
            }
        }
    }
};

processStudents(students, function (obj) {
    if (obj.score > 60){
        console.log(obj.name + ' passed.');
    }
});

let deterimeTotal = function(){
    let total = 0;
        count = 0;
    processStudents(students, function(obj){
        total = total + obj.score;
        count++;
    });
    console.log('Total score ' + total + ' count: ' + count );
};

deterimeTotal();


// // higher order function 
// //


// let things = ['Building', 'car', 'bicycle', 'automobile', 'Tree'];

// // things.sort();


// things.sort(function(a, b){
//     let x = a.toLocaleLowerCase();
//     let y = b.toLocaleLowerCase();

//     if(x < y){ return -1;}
//     if(y < x){ return 1;}
//     return 0;
// });

// console.log(things);




// // first class function in JS

// var num = 22;
// var funct = function(){
//     console.log('Hello');
// };

// funct();

// var arr = [123, function(){console.log('Hello from array');}]
// arr[1]()
// // var value = arr[1];
// // value();

// // console.log(value);

// // // example 3

// var obj = {
//     num: 20,
//     funct: function(){
//         console.log('Hello from an object.');
//     }
// };

// obj.funct();

// // // example 4
// // IIF 
// console.log( 10 + function(){return 15}());

// // // exampl 5

// var addTwo = function(num, fn){
//     console.log(num + fn());
// }

// addTwo(28, function(){return 28});

// // // example 6
// var returnNumber = function() { return 28; };
// var returnFun = function(){
//     return function(){console.log('Hello again.')};
// }
// var newFun = returnFun();
// newFun();


