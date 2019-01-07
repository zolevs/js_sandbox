/* let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}
console.log(myBook.pageCount);

console.log(`${myBook.title} by ${myBook.author}`);
myBook.title = 'Animal farm';
console.log(`${myBook.title} by ${myBook.author}`);

// // //

let person = {
    name: 'Zole',
    age: 44,
    location: 'Serbia' 
}
console.log(person);
console.log(`My name is ${person.name} and I am ${person.age} and still live in ${person.location}`);
person.age += 1;
console.log(person.age);
person.age = person.age + 1;
console.log(person.age);
 */

// // //

// object function

let myBook = {
    title: '1984',
    author: 'George Orwel',
    pageCount: 321
}
let otherBook = {
    title: 'A peoples History',
    author: 'Howard Zinn',
    pageCount: 223
}
let getSummary = function(book){
    // console.log(`${book.title} by ${book.author}`);
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
    
}
// // pass object to a function
// getSummary(myBook);
// getSummary(otherBook);

// // return object from a function
let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary);
console.log(bookSummary.pageCountSummary);

// // //

// // version 1

/* 
    let convertedTemperature = function(fahrenheit) {
    let celsius = (fahrenheit - 32)*5/9;
    let kelvin = (fahrenheit + 459.67)*5/9;
    return{
        celsius: `${fahrenheit} fahrenheit is ${celsius} in celsius`,
        kelvin: `${fahrenheit} fahrenheit is ${kelvin} in kelvin `
    }
}

let converted = convertedTemperature(32);
console.log(converted.kelvin);
 */

// // //
// // version 2

let convertFahrenheit = function(fahrenheit){
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5/9),
        celsius: (fahrenheit - 32) * (5/9)
    }
}
let temps = convertFahrenheit(74);
console.log(temps);
console.log(`Temperature in kelvin is ${temps.kelvin}`);
