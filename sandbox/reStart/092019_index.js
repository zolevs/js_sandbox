// // // // 

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
  ];

// const filtered = products.filter(product => {
//     return product.price > 20;
// });

// const promos = filtered.map(product => {
//     return `the ${product.name} is ${product.price / 2} pounds`;
// });

// console.log(promos);


const promos = products
    .filter(product => product.price > 20)
    .map(product) => `the ${product.name} is ${product.price / 2} pounds`;











// // sort method

// const scores = [10, 5, 40, 60, 70, 90, 10, 20, 70];

// scores.sort((a,b) => a - b);
//   console.log(scores);

// const names = ['mario', 'shaun', 'chin-li', 'luigi', 'abacus'];

// const players = [
//     {name: 'mario', score: 20},
//     {name: 'luigi', score: 10},
//     {name: 'chun-li', score: 50},
//     {name: 'yoshi', score: 30},
//     {name: 'shaun', score: 70}
//   ];

//   names.sort();
//   names.reverse();
//   console.log(names);

//   scores.sort();
//   console.log(scores);

// scores.reverse();
// console.log(scores);


// // // //
// players.sort((a,b) => {
//     if(a.score > b.score) {
//         return -1;
//     } else if (b.score > a.score){
//         return 1;
//     } else {
//         return 0;
//     }
// });
// // // //

// players.sort((a,b) => {
//     return b.score - a.score;
// });

// console.log(players);








// // find method

// const scores = [10, 5, 0, 40, 60, 70, 90, 10, 20, 70];

// const firstHighScore = scores.find((score) => {
//     return score > 50;
// });

// console.log(firstHighScore);




// reduce

// const scores = [10, 20, 60, 40, 70, 90, 30];
// const result = scores.reduce((acc, curr)=>{
//     if(curr > 50){
//         console.log(acc);
//         acc++;
//     }
//     return acc;
// }, 0);

// console.log(result);



// const scores = [
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70},
//     {player: 'crystal', score: 60},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 15},
//     {player: 'crystal', score: 60}
//   ];

// const marioTotal = scores.reduce((acc, curr) => {
//     if(curr.player === 'mario'){
//         acc += curr.score;
//     }
//     return acc;
// }, 0);









// map


// const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrices = prices.map((price) => {
//     return price / 2;
// });


// const products = [
//     {name: 'gold star', price: 20},
//     {name: 'mushroom', price: 40},
//     {name: 'green shells', price: 30},
//     {name: 'banana skin', price: 10},
//     {name: 'red shells', price: 50}
//   ];

// const saleProducts = products.map((product)=>{
//     if(product.price > 30) {
//         return {name: product.name, price: product.price/2};
//     } else {
//         return product;
//     }
// });





// filter

// const scores = [10, 30, 15, 25, 50, 40, 5];

// const highScores = scores.filter((score) => {
//     return score < 15;
// });

// const users = [
//     {name: 'shaun', premium: true},
//     {name: 'yoshi', premium: false},
//     {name: 'mario', premium: false},
//     {name: 'chun-li', premium: true}
//   ];

//   const premiumUsers = users.filter((user) => {
//     return user.premium;
//   });

//   console.log(premiumUsers);