// // filter method

let scores = [87, 65, 324, 234, 203, 22, 11, 0, 1];
/* let passScores = scores.filter( function(variable){
    // console.log(scoreIliStagod);
    return variable > 20;
});
 */
let passScores = scores.filter(variable => variable > 20);

console.log(passScores);

let names = ['Zoran', 'Milan', 'Dejan', 'Sasa'];

let friends = names.filter(name => name == 'Milan');
console.log(friends);