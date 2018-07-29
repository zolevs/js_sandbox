/* function one(){
    return 'one';
}

let value = one;
 */
// console.log(typeof(value));
// // console.log(one());
// console.log(value);

// console.log(value());

/* function two(){
    return function (){
        console.log('Two');
    };
}
let myFunction = two();
myFunction(); */

function three(){
    return function(){
        return 'three';
    }
}

console.log(three()());