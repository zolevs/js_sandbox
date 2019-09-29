
const getTodos = (callback) => {

    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        // console.log(request, request.readyState);
        if(request.readyState === 4 && request.status === 200){
            // console.log(request, request.responseText);
            callback(undefined, request.responseText);
        } else if(request.readyState === 4){
            // console.log('no data');
            callback('no data', undefined);
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/');
    request.send();


};

getTodos((err, data) => {
    console.log('callback fired');
    // console.log(err, data);
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});



