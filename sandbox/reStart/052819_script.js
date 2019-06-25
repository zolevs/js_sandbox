// regex

let pattern = /[a-zA-Z]+ing$/;
let pattern2 = new RegExp('[a-zA-Z]+ing');

console.log(pattern.test('fly'));
console.log(pattern2.test('flying'));

console.log(pattern.exec('fly'));
console.log(pattern2.exec('zole flying'));

pattern = /bannanas/;
console.log(pattern.test('bannas'));
console.log(pattern.test('Bannas'));
console.log(pattern.test('Banna'));

let names = 'John, Jack, Ann';

console.log(names.replace('Ann', 'Mary'));
console.log(names.replace(/ann/ig, 'Mary'));
