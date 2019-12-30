{

function pow(x, y){
    let total = 1;
    for (let i = 0; i < y; i++){
        total *= x;
    }
    return total;
}
let collFunctions = [pow];
console.log(collFunctions[0](3,3));


let mathFunction = {
    power: pow
}

console.log(mathFunction.power(3,3));
pow.description = "Description is here...";

console.log(pow.description);

function returnFunction(func){
    return func;
}
console.log(returnFunction(pow(3,5)));
}