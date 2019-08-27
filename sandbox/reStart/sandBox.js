let x = function(){
    console.log('I am from inside function.');
}

let y = function(callback){
    console.log('do something');
    callback();
}

y(x);