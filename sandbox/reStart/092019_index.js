const prices = [10, 30, 15, 25, 50, 40, 5];
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


const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
  ];

  const saleProducts = products.map((product) => {
      if(product.price > 30){
          return {name: product.name, price: product.price / 2};
      } else {
          return product;
      }
  })