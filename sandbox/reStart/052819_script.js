// // await

function getStringByPromise (){
    return new Promise((resolve) =>{
        resolve('Javascript is great');    
    });
}

async function printString(){
    let fetchedString = await getStringByPromise();
    console.log(fetchedString);
}

printString();

function someText(){
    return 'Some text';
}

async function getText(){
    let text = await someText();
    console.log(text);
}

getText();
console.log('Waiting for text...');