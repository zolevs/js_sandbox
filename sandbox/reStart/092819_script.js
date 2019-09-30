
const getTodos = (resources, callback) => {

    return new Promise((resolve) => {

        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange',()=>{
            // console.log(request, request.readyState);
            if(request.readyState === 4 && request.status === 200){
                // console.log(request, request.responseText);
                const data = JSON.parse(request.responseText);
                resolve(data);
                // callback(undefined, data);
            } else if(request.readyState === 4){
                // console.log('no data');
                // callback('no data', undefined);
                reject('error getting resource');
            }
        });
    
        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.open('GET', resources);
        request.send();


    });
};

getTodos('data.json').then((data) => {
    console.log('promise resolved: ', data);
}).catch((err) => {
    console.log('Promise rejected ', err);
});




// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//       // fetch
//         resolve('some data');
//         reject('some error');
//     });
    
// };




// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });




// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })
