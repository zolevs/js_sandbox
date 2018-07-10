function reverseString(str){
 /*    var array = str.split("");
    array.reverse();
    var result = array.join('');
    // array = array.join();
    // console.log(typeof array);
    return result;
 */

 // // in single line
 return str.split("").reverse().join('');

}

console.log(reverseString("zole"));