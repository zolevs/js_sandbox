// // checking each element of an array

/* let arr = [1, 2, 3, 4, 5, 6, 7];
// let result = arr.every(function(val){
let result = arr.some(function(val){
    // return (val > 10);
    let i = val < 4;
    console.log(i);
    return i;
});
console.log(result); */

let ans = 'Contrary to popular belief, Lorem Ipsum is not simply random text.';
let cAns = 'Contrary to popular belief, Lorem Ipsum is not simply random text.';

let checkMach = function(resp, corr){
    return corr.every(function(word, indx){
      return word.toLowerCase() === resp[indx].toLowerCase();  
    })
}
let result = checkMach(ans.split(' '), cAns.split(' '));

console.log(result);
