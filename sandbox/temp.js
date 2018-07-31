function sayHello(name){
    return function(){
        console.log('howdy ' + name);
    }
}

let zozon = sayHello('Zole');
let bob = sayHello('bob');
let miki = sayHello('miki');

zozon();
bob();
miki();