const getTodos = (callback) => {


const request = new XMLHttpRequest();
console.log(request);
request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200) {
        // console.log(request.readyState);
        // console.log(request, request.responseText);
        callback(undefined, request.responseText);
    } else if(request.readyState === 4) {
        // console.log('no data ...');
        callback('no data', undefined);
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/posts/');
request.send();


};

console.log(1);
console.log(2);


getTodos((err, data) => {
    console.log('Callback fired...');
    // console.log(err, data);
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});


console.log(3);
console.log(4);