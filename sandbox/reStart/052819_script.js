// // JSON

let person = {
    name: 'John',
    age: 45,
    occupatoin: 'programmer'
}

let personJSON = JSON.stringify(person);
console.log(personJSON);

let personObject = JSON.parse(personJSON);
console.log(personObject);