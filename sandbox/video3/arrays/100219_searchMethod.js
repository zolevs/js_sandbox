// // indexOf

/* 
let text = 'Nihil aut night neque.';
let index = text.indexOf('g'); 

console.log(index);
console.log(text[index]);

index = text.indexOf('xx');
console.log(index);
console.log(text[index]);
 */


 // // findIndex
/* 
 var array1 = [5, 10, 14, 59, 29, 18, 110];

 function isGreaterThan(number, index){
     console.log(`Iteration ${index}`);
    //  return number > 1000;
    console.log(`Element ${number}`)
 }

 console.log(array1.findIndex(isGreaterThan));
 */

 const movies = [
    { title: 'it', genre: 'Horror', year_released: 2017},
    { title: 'Shine', genre: 'drama', year_released: 2001},
    { title: 'Heat', genre: 'action', year_released: 1994},
    { title: 'indiana jones', genre: 'Adventure', year_released: 1999}
 ];
/* 
 function findIndexByTitle(title){
     return movies.findIndex( movie => movie.title === title);
 }

 console.log(findIndexByTitle('it'));
 */

 function isAction(movie){
    //  console.log(movie)
     return movie.genre === 'action';
 }

//  console.log(movies.findIndex(isAction));
 position = movies.findIndex(isAction);
 console.log(position);
 console.log(movies[position]);