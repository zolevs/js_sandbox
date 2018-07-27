let a = 'first';

function scopeTest() {
    console.log(a);
    a = 'Changed';
    if (a != ''){
        console.log(a);
    }
    let b = 'Second';
}

scopeTest();
console.log(a);