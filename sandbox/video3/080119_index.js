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

/* console.log("-----------------------------------");

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

otherBook.pageCount = otherBook.pageCount - 10;
console.log(otherBook.pageCount);

// // // return object from a function

 */

/* let myBook = {
    title: '1984',
    author: 'George Orwel',
    pageCount: 120
}
let otherBook = {
    title: 'Tom Sowyer',
    author: 'Mart Twain',
    pageCount: 732
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
    console.log(`${book.title} by ${book.author}`);
}

getSummary(myBook);
getSummary(otherBook);
// console.log(myBook.summary);
let bookSummary = getSummary(myBook);
console.log(bookSummary);

// // //
let temperatureConverter = function (fahrenheit){
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * (5/9),
        kelvin: (fahrenheit + 459.67) * (5/9)
    }
}

let converted = temperatureConverter(32);
console.log(converted);
 */

// // object references

let myAccount = {
    name: 'Zoran Zozon',
    expenses: 0,
    income: 0
}
// // referencing to same object
let otherAccount = myAccount;
otherAccount.income = 1000;
otherAccount = {}
console.log(otherAccount);
// //

/* let addExpense = function(account, amount){
    account.expenses = account.expenses + amount;
    console.log(account);
}
addExpense(myAccount, 2.50);
console.log(myAccount); */

console.log('------------------------');

// // addIncome
let addIncome = function(account, amount){
    account.income = account.income + amount;
}

// // resetAccount
let resetAccount = function(account){
    account.expenses = 0;
    account.income = 0;
}

// // addExpense
let addExpense = function(account, amount){
    account.expenses = account.expenses + amount;
}

// // getAccountSummary
// // 

let getAccountSummary = function(account){

}

// addIncome
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSUmmary


addIncome(myAccount, 10);
console.log(myAccount.income);
addExpense(myAccount, 10);
console.log(myAccount.expenses);    