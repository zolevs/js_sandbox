/* var blue = {
    color: 'blue'
}

var colors = [{color:'red'}, {color:'blue'}, {color: 'green'}, {color: 'black'}, {color: 'blue'}, {color: 'yellow'}];
 */
/* 
var index = colors.indexOf('blue');
var lastIndex = colors.lastIndexOf('blue');
console.log(index);
console.log(lastIndex);
 */
/* 
console.log(colors); */

/* 
function isMore(value){
    console.log(value);
    return value >=4 && value<7;
}


let arr = [1,2,3,4,5,6,7];

let result = arr.find(isMore);
console.log(result); 

*/
let grades = [12, 4, 5, 23, 52, 22, 11, 52];
grades[34] = 567;

let count = 0;
let total = 0;
for (let i = 0; i < grades.length; i++){
    if(grades[i] !== undefined) {
        count++;
        total +=grades[i];
    }
}
let avg = total / count;
console.log(avg);