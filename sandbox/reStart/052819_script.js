function hello(){
    console.log(`My name is ${this.name}`)
}
let person = {name: "John"};

hello.call(person);

function hello2(job='programmer'){
    console.log(`My name is ${this.name}. I am ${job}`);
}

hello2.call(person);
hello2.call(person, 'bilder');

hello2.apply(person, ['bulder']);

let obj = {

    x: 10,
    getX: function(){
        return this.x;
    }
}

let unboundGetX = obj.getX;
console.log(unboundGetX());

let boundGetX = unboundGetX.bind(obj);
console.log(boundGetX());