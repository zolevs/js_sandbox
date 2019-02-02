/* let myBook = {
    title: '1984',
    author: 'George Orwel',
    pageCount: 324
}
let otherBook = {
    title: 'A Peoples history',
    author: 'Howard Zin',
    pageCount: 89
}

let getSummary = function(book){
    // console.log(`Title ${book.title} by ${book.author} and number of pages ${book.pageCount}`);
    
    return {
        summary: `Title ${book.title} by ${book.author} and number of pages ${book.pageCount}`,
        pageCountSummary: `${book.title} number of pages ${book.pageCount}`
    }
    
}

let bookSummary = getSummary(myBook);
let otherSummary = getSummary(otherBook);

console.log(myBook);
console.log(bookSummary);
console.log(bookSummary.pageCountSummary);

 */
// function return an obj
// create function - take fahrenheit in - retunr object with all three

let convertedTemperature = function (temperature) {
    return {
        fahrenheit: temperature,
        celsius: (temperature - 32) * 5/9,
        kelvin: (temperature + 459.67) * 5/9
    }
}

let convertedObj = convertedTemperature(32);
console.log(convertedObj);
console.log(convertedObj.celsius);
console.log(convertedObj.kelvin);
