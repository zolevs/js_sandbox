
let grades = [15, 12, 4, 6, 13, 53, 3, 88, 93, 14, 643, 66, 9, 1, 7];


/* // // // seaarch 
grades.length = 40;
console.log(`length of array: ${grades.length}`);
grades[35] = 342;

let found = false;
let search = 53;

for (let i = 0; i < grades.length; i++){
    if(grades[i] == search){
        found = true;
        console.log(`Found at position ${i}`)
        console.log(grades[i]);
        break;
    }
}

 */

let largest = grades[0];
let position = grades[0];

for (let i = 0; i < grades.length; i++){
    if (grades[i] > largest) {
        largest = grades[i];
        position = i;
    }
}

console.log(largest + ' at position '+ position);
