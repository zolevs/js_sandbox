var start = "A".charCodeAt();
var array = [];

for (var i = start; i < start + 26; i++){
    array.push(String.fromCharCode(i));
}

console.log(array);
var randomArray = [];

for (var i in array){
    var pos = Math.round(Math.random()*randomArray.length);
    randomArray.splice(pos, 0, array[i]);
    // console.log(pos);
}

console.log(randomArray);