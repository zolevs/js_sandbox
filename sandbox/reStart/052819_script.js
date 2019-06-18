// // 
let john = {
    firstname: 'John',
    lastname: 'Jones',
    age: 45,
    occupation: 'programmer',
    //walk: walk(){
    walk(){
        return `I, ${this.firstname} ${this.lastname} am walknig.`;
    }
};

for (let key of Object.keys(john)){
    console.log(key);
}

for (let value of Object.values(john)){
    console.log(value);
}

for (let [key, value] of Object.entries(john)){
    console.log(`Key ${key} Value ${value}`);
}

john.lastname = "Smith";
console.log(john.lastname);

john.eyeColor = 'Blue';
john.work = function(){
    return 'I program for a living';
}

console.log(john);
john.wife = {
    firstname: 'Mary',
    age: 35
}

console.log(john.wife.firstname);

let bob = {
    program(){
        console.log('I program');
        return this;
    },
    walk(){
        console.log('I walk');
        return this;

    },
    sleep(){
        console.log('I sleep');
        return this;

    }
}

bob.program().walk().sleep();

let {x, ...remaining} = {x:1, a:2, b:3, c:4};
console.log(x);

console.log(remaining);

restParam({
    b:2,
    a:1,
    c:3,
});

function restParam({a, ...x}){
    console.log(a);
    console.log(x);
}