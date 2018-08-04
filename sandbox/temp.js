var start = "a".charCodeAt();
var array = [];

for (var i = start; i < start+26; i++){
    array.push(String.fromCharCode(i));
}
console.log(array);

var  randomArray = [];
for (var i in array){
    var position = Math.round(Math.random()*randomArray.length);
    randomArray.splice(position, 0, array[i]);
    
}

console.log(randomArray);