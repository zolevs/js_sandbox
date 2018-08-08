let a, b, c, d, e;

let names = ['david', 'eddie', 'alex', 'michel', 'sammy'];

[a, b, c, e, d] = names;

/* console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
 */
let others;

[a, b, ...others] = names;

console.log(a);
console.log(b);
console.log(others);


let year, model;

({year, model} = {
    make: 'bmw',
    model: '745li',
    year: 2018,
    value: 4000
});

console.log(year);
console.log(model);