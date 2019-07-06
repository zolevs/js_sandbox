// // promises

function getRandomNumber(n){
    return Math.floor(Math.random() * n);
}

let food = ['grapes', 'bananas', 'pork', 'beef', 'meat', 'onion', 'chicken'];

let getMeat = new Promise( (resolve, reject) => {
    let n = getRandomNumber(6);
    (n>2) ? resolve(n) : reject(n);
});

getMeat.then(
    result => console.log(`I'm gona eat ${food[result]}`), 
    result => console.log(`food result ${food[result]}`))