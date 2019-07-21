console.time('test');
let a = 1+10;
let add = 0;
console.time('test2')
for (let a = 1; a < 150; a++){
    add = add + a;
}
console.timeEnd('test2');
console.timeEnd('test')