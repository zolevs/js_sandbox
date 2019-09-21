// find

const scores = [10, 20, 0, 50, 70, 30, 40, 60, 90, 43];
const firstHighScore = scores.find((score) => {
    return score > 50;
});

console.log(firstHighScore);






// // reduce

// const scores = [
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70},
//     {player: 'crystal', score: 60}
//   ];

//   const marioTotal = scores.reduce((acc, curr) =>{
//     if(curr.player === 'mario'){
//         acc += curr.score;
//     }
//     return acc;
//   }, 0);

// console.log(marioTotal);











// const scores = [10, 20, 30, 40, 60, 90, 43];

// const result = scores.reduce((acc, curr) => {
//     if(curr > 50) {
//         acc++;
//     } 
//     return acc;
// }, 0);



// const prices = [10, 30, 15, 25, 50, 40, 5];

// const salePrices = prices.map((price) => {
//     return price / 2;
// })

// const salePrices = prices.map( price => price / 2);

// console.log(salePrices);


// const products = [
//     {name: 'gold star', price: 20},
//     {name: 'mushroom', price: 40},
//     {name: 'green shells', price: 30},
//     {name: 'banana skin', price: 10},
//     {name: 'red shells', price: 50}
//   ];

//   const saleProducts = products.map((product) =>{
//     if (product.price > 30 ){
//         return {name: product.name, price: product.price / 2};
//     } else {
//         return product;
//     }
//   });

//   console.log(saleProducts, products);



// const filteredScores = prices.filter((price) => {
//     return price > 20;
// });

// console.log(prices);
// console.log(filteredScores);

// const users = [
//     {name: 'Shaun', premium: true},
//     {name: 'Hyain', premium: true},
//     {name: 'Xi Hon', premium: false},
//     {name: 'Nagani', premium: true}
// ];

// const premiumUsers = users.filter( (user) => {
//     return user.premium;
// });

// console.log(premiumUsers);








// const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter((score) => {
//     return score > 20;
// });

// const users = [
//     {name: 'Shaun', premium: true},
//     {name: 'Hyain', premium: true},
//     {name: 'Xi Hon', premium: false},
//     {name: 'Nagani', premium: true}
// ];


// const premiumUsers = users.filter( (user) => {
//     return user.premium;
// });

// console.log(premiumUsers);

// const salePrice = prices.map( (price) => {
//     return price / 2;
// });


// const products = [
//     {name: 'gold star', price: 20},
//     {name: 'mushroom', price: 40},
//     {name: 'green shells', price: 30},
//     {name: 'banana skin', price: 10},
//     {name: 'red shells', price: 50}
//   ];

//   const saleProducts = products.map((product) => {
//       if(product.price > 30){
//           return {name: product.name, price: product.price / 2};
//       } else {
//           return product;
//       }
//   })