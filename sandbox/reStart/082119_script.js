let age = 45;

// let age = 50;
age = 50;

if (true){
    let age = 40;
    let name = 'shaun';
    console.log('Inside first code block ', age, name);

    if(true){
        let age = 50;
        console.log('inside 2nd code block',age);
    }
}

console.log('Outside code block ', age, name);