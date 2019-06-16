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
    console.log(key)
}
for (let value of Object.values(john)){
    console.log(value);
};

for (let [key, value] of Object.entries(john)){
    console.log(key, value);
};

// console.log(john);