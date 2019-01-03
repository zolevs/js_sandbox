// // // template strings

let getTip = function (total = 0, tipPercent = .1) {
    console.log(`Total bill is ${total} and tip percent is ${tipPercent*100}%`);
    return total * tipPercent;

}
// let total, tipPercent;
// console.log(total);
// console.log(tipPercent);

let tip = getTip(150, .25);
console.log(`Total tip is ${tip}`);



/* 
let number = 10;
let name = 'Zoran';
console.log(`My name is ${name} and I have ${number} bitcoins`);
 */



// // // function scope start 

// global scope (convertFahrenheitToCelsius, tempOne)
    // local sope (fahrenheit, celsius)
        // local sope (isFreezing)

/* 
    let convertFahrenheitToCelsius = function (fahrenheit){
    let celsius = (fahrenheit - 32) * 5 / 9;
    if(celsius < 0){
        let isFreezing = true;
    }
    return celsius;
}
let tempOne = convertFahrenheitToCelsius(32);

console.log(tempOne);
 */

// // // function scope end


// arguments start

/* 
let add = function(a, b, c){
    return a - b + c;
}

let result = add(10, 2, 10);
console.log(result);

// // default values (arguments)
let getScoreText = function (name = 'Anonymous', score = 0){
    // console.log(name);
    // console.log(score);
    return "Name: " + name + " Score: " + score;
}

let scoreText = getScoreText( undefined, 92);
console.log(scoreText);


// // // //
// total tipPercent = .2

let tip = function (total = 0, tipPercent = .10){
    return tipAmount = total * tipPercent;
}

let tipResult = tip(100, .3);
console.log(tipResult);
 */

// arguments end


/* let name;
console.log(name);

name = 'jane';

if (name === undefined) {
    console.log('Provider a name');
    
} else {
    console.log(name)
}


let square = function (num) {
    console.log(num)
}
let result = square(44);
console.log(result);

//

let age = 44;
age = undefined;
console.log(age);

 */

// function - input(argument) code output(return value)

/* let greetUser = function () {
    console.log('Welcome user');
}

greetUser();

let square = function (num){
    console.log(num);
    let result = num * num;
    return result;
}

// let num = 3
// square(num);
let value = square (3);
let otherValue = square(10);
console.log(value);
console.log(otherValue); */

// // //


/* let convertFahrenheitToCelsius = functin (fahrenheit){
    let convertedToCelsius = (fahrenheit - 32) * 5/9;
    return convertedToCelsius;
} */
/* 
function convertFahrenheitToCelsius(fahrenheit) {
    let convertedToCelsius = (fahrenheit - 32) * 5/9;
    return convertedToCelsius;
} */

// let converted = convertFahrenheitToCelsius(32);
// console.log(converted);
/* 
let convertFahrenheitToCelsius = function (fahrenheit){
    let converted = (fahrenheit - 32) * 5/9;
    return converted;
}

console.log(convertFahrenheitToCelsius(32));
console.log(convertFahrenheitToCelsius(68));
 */


