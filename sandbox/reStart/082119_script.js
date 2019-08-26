// const myFunc = (callbackFunc) => {
    
//     let value = 50;
//     callbackFunc(value);
// };


// myFunc( value => {
    
//     console.log(value);
// });

// let people = ['Mario', 'Dalio', 'Luigi', 'Chin-Lu', 'Donotelo'];

// // people.forEach(function(person, index){
// //     console.log(person, index);
// // });

// const logPerson = (person, index) => {
//     console.log(`${index} - Hello ${person}`)
// }

// // people.forEach( person => {
// //     console.log(person);
// // });
// people.forEach( logPerson );

const ul = document.querySelector('.people');

const people =  ['Mario', 'Dalio', 'Luigi', 'Chin-Lu', 'Donotelo'];
let html = ``;

// people.forEach(function (person){
//     // html template
//     html += `<li style = "color: #ff00ff;">${person}</li>`;
// });
people.forEach ( person => { html += `<li style = "color: #ff00ff;">${person}</li>` });
ul.innerHTML = html;

console.log(html);