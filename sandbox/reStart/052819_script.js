// // closures

function outer(){
    let outside = 'outside';

    function inner(){
        let inside = 'inside';

        console.log(outside);
        console.log(inside);
    }
    console.log(outside);
    inner();
}

outer();