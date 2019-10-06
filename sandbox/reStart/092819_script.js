const getTodos = (resource, callback) => {


    const request = new XMLHttpRequest();
    console.log(request);
    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        if(request.readyState === 4 && request.status === 200) {
            // console.log(request.readyState);
            // console.log(request, request.responseText);
            const data = JSON.parse(request.responseText);
            // callback(undefined, request.responseText);
            callback(undefined, data);
        } else if(request.readyState === 4) {
            // console.log('no data ...');
            callback('no data', undefined);
        }
    });

    // request.open('GET', 'https://jsonplaceholder.typicode.com/posts/');
    // request.open('GET', 'data.json');
    request.open('GET', resource);
    request.send();


};


getTodos('data.json', (err, data) => {
    console.log(data);
    getTodos('data2.json', (err, data) => {
        console.log(data);
        getTodos('data3.json', (err, data)=> {
            console.log(data);
        });
    });
    // console.log(err, data);
    // if(err){
    //     console.log(err);
    // } else {
    //     console.log(data);
    // }
});

