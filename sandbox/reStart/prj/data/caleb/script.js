{

    function doStuff(input, input2){
        console.log(input, input2);
        console.log(this);
    }

    let newFunction = doStuff.bind("Hello", 20, 442, 12);

    newFunction();




}

