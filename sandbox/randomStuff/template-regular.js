/* let name = 'bob';
console.log(`hello ${name}`);

let sentence = `Lorem ipsum,
    dolor sit amet consectetur      adipisicing elit. 
Voluptatibus numquam cum doloremque aut!`;

console.log(sentence);
 */
/* 
function getReasonCount(){
    return 0;
}

let interpolation = `Give me ${ (getReasonCount() == 1 ? 'One good reason ':'a few reason') } to try this..`;

console.log(interpolation);

 */

let pattern = /xyz/;

console.log(pattern);
console.log(typeof pattern);

let value = 'Lorem ipsum,dolor sit amet consectetur adipisicing elit xyz.';

console.log(pattern.test(value));

console.log(value.replace(pattern, 'Zole'));


console.log(value.match(pattern));

var match = value.match(pattern);
console.log(match.input);