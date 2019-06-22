let john = {
    firstname: 'John',
    lastname: 'Jones',
    age: 45,
    occupation: 'programmer',
    walk(){
        return `I ${this.firstname} ${this.lastname} am walking`
    }
}

// console.log(john.walk());
for(let key of Object.keys(john)){
    console.log(key);
}
for (let value of Object.values(john)){
    console.log(value);
}

for(let [key, value] of Object.entries(john)){
    console.log(key, value);
}
john.lastname = 'Smith';
console.log(john.lastname);

john.eyeColor = 'Blue';
console.log(john.eyeColor);

john.work = function(){
    return 'I program for a living';
}

let bob = {
    program(){
        console.log('I program');
        return this;
    },
    eat(){
        console.log('I eat.');
        return this;
    }
}

bob.program().eat();

let {x, ...remaining} = {x:1, a:2, c: 3, d: 4}

console.log(x);
console.log(remaining);

restParam({
    a:1,
    b:2,
    c:3,
    d:4
});

function restParam({d, ...x}){
    console.log(d);
    console.log(x)
}

