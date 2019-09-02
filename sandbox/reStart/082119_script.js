const myCar = {
    color: "red",
    topSpeed: 300,
    model: "Mustang",
    year: 2017,
    price: 5000,
    turnOn: function(){
        console.log('Started');
    },
    drive(){console.log("Drive")}
}
let a = 1;

const test = {
    a1: "test 1",
    a2: "test 2"
}

function tester(){
    console.log(test['a' + a]);
    a++;
}