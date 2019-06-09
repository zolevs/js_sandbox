// // function
// // arrow

let squre = x => x*x;

console.log(squre(9));

let add = (a,b) => a+b;

console.log(add(10,2));

let hello = () => 'Hello world';

console.log(hello());

let average = (...args) => {
    let total = 0;
    for (let arg of args) {
        total += arg;
    }
    return total / args.length;
}

console.log(average(1,2,3));