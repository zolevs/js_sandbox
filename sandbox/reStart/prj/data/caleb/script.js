let grades = [
    [1,2,4,5,6,7,3,6,2,6,7,23,55],
    [5,1,3,6,3,3,67,53,98,111,76],
    [56,7,8,94,6,78,5,67]
];

outerLoop: for (let i = 0; i < grades.length; i++){
    for(let k = 0; k < grades[i].length; k++){
        // console.log(grades[i][k]);
        if(grades[i][k] === 3){
            console.log('Found');
            continue outerLoop;
            // break;
        };
        console.log('oooooo')

    };
    console.log(' ````````` ');
}

