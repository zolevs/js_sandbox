
// student score
// total possible score

// 15/20 -> you got a C (75%)
// A 90 - 10, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalc = function(score, totalScore){
    let percent = (score / totalScore) * 100;
    let grade = undefined;
    console.log(percent);
    
    if (percent >= 90){
        grade = 'A';
        // return 
        // return message;
        // return grade = 'A';
        // console.log('devedeset ili vise');
    } else if (percent >= 80 && percent <= 89) {
        grade = 'B';
        // console.log('izmedju 80-89')
    } else if (percent >= 70 && percent <= 79){
        grade = 'C';
        // console.log('izmedju 70 i 79')
    } else if (percent >=60 && percent <= 69){
        grade = 'D'
        // console.log('Izmedju 60 i 69');
    } else {
        // grade = 'F';
        grade = 'F';
        // return grade = 'F';
        // console.log('F');
    }

    return `Your score is ${score} of total ${totalScore}, and your grade is ${grade} and that is ${percent}%`;

}

let calculatedScore = gradeCalc(15,20);

console.log(calculatedScore);
// console.log();


