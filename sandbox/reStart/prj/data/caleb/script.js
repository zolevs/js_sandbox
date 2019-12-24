let grades = [1,2,4,5,6,7,3,6,2,6,7,23,55];
grades.length = 30;

// for (let i=0; i<grades.length; i++){
//     console.log(grades[i]);
// }

grades.forEach(function(item, i){
    console.log(item, i);
});
