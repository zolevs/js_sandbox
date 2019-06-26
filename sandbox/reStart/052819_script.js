// regex

let vowels = /[aeiou]/;
console.log(vowels.test('abc'));
console.log(vowels.test('ceo'));
console.log(vowels.test('ghj'));

let AtoZ = /[A-Z]/;
console.log(AtoZ.test('a'));
console.log(AtoZ.test('G'));

let alphabet = /[a-zA-Z]/;
console.log(alphabet.test('A'));
console.log(alphabet.test('g'));
console.log(alphabet.test(4));

let numbers = /[0-9]/;
console.log(numbers.test(3));
console.log(numbers.test('A'));
console.log(numbers.test('34a'));

let notAtoZ = /[^A-Z]/;
console.log(notAtoZ.test(23));
console.log(notAtoZ.test('23'));
console.log(notAtoZ.test('abc'));
console.log(notAtoZ.test('AB'));

let pattern = /[Jj][Aa][Vv]/;
console.log(pattern.test('Java'));
console.log(pattern.test('Script'));

let pattern2 = /(red|green|blue)/;
console.log(pattern2.test('red'));
console.log(pattern2.test('yellow'));
