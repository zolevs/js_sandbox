let myBook = {
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




