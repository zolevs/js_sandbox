// // object
/* let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 223,
    price: 23
}
console.log(myBook.price);
console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal farm';
console.log(myBook.title);

// // //
let person = {
    name: 'Zoran',
    age: 44,
    location: 'Serbia'
}

console.log(`Name is ${person.name} and ${person.age} years old and next year it will be ${person.age+1}`);

person.location = 'New Zeland';
console.log(`Dream country for living is ${person.location}`);

person.limit = 3;
console.log(`And limit for doing this is ${person.limit}`);
person.limit = person.limit - 1;
console.log(person); */

// // //

console.log("-----------------------------------");

// // // pass object to a function

let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 321
}
let otherBook = {
    title: 'NLP Programming',
    author: 'Unknown Author',
    pageCount: 211
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummury: `${book.title} is ${book.pageCount} pages long`
    }
    // console.log(`${book.title} by ${book.author}`);
}

getSummary(myBook);
console.log(getSummary(myBook));
getSummary(otherBook);

let bookSummary = getSummary(otherBook);

console.log(bookSummary);
// console.log(otherBook);

// // // return object from a function





