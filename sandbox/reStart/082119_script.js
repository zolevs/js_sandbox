// primitive value
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne} and scoreTwo: ${scoreTwo}`);
scoreTwo = 100;
console.log(`scoreOne: ${scoreOne} and scoreTwo: ${scoreTwo}`);

// reference value
userOne = {name: 'ramir', age: 45};
userTwo = userOne;
console.log(userOne, userTwo);

userTwo.age = 29;
console.log(userOne, userTwo);