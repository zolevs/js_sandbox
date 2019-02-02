let myBook = {
    title: '1984',
    author: 'George Orwel',
    pageCount: 324
}

console.log(myBook);
console.log(myBook.title);
console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`);

myBook.reprint = true;
console.log(myBook);
//

let person = {
    name: 'Zozon',
    location: 'Vrsac',
    age: 45
}

console.log(`Developer name ${person.name} from ${person.location} and age ${person.age}`);

person.age += 1;

console.log(`Start to work as dev at ${person.age}`);


