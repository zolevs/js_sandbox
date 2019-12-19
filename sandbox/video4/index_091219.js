{ 

    let grades = [ 12, 34, 45, 342, 5, 11, 2, 1, 34 ];
    grades.length = 30;
    grades[34] = 40;


    let found = false;
    let search = 45;

    let largest = grades[0];
    let indexLargest = 0;
    for (let i=0; i<grades.length; i++){
        if(grades[i] !== undefined){
            console.log(grades[i]);
        }
        if(grades[i] === search){
            found = true;
            console.log(grades[i] + ' at index ' + i);
        }
        for (let i = 0; i < grades.length; i++){
            if (largest < grades[i]){
                largest = grades[i];
            }
        }
    }

    console.log("largest " + largest);
    if(found === true){
        console.log('Found')
    }
    for (let i = 0; i < grades.length; i++){
        if(largest === grades[i]){
            indexLargest = i;
            console.log("index of largest " + indexLargest);
        }
    }


}









