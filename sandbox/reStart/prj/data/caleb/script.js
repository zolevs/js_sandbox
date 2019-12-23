
let grades = [1, 2, 3, 4, 5];

grades.push(100);

console.log(grades.length);

grades.pop();
console.log(grades);

// grades.splice(2, 0, 10, 10, 10, 10, 10);
// add afther index 2

grades.splice(2, 2, 10, 10);

grades.push(12,53,53,23,52,1,8,4,9,11);

console.log(grades.sort(function (a,b) { return a - b}));

let gradesB = [44, 66, 77, 88];
let all = grades.concat(gradesB);
console.log(all);

