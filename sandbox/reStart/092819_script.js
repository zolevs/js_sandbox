// fetch api

const getTodos = async () => {

    const response = await fetch('dataa.json');
    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    }
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;
};

// const test = getTodos();
// console.log(test);

// getTodos().then(data => {
//     console.log('resolved', data);
// });

console.log(1);
console.log(2);
getTodos()
    .then(data => console.log('resolved', data))
    .catch(err => console.log('rejected', err.message))
console.log(3);
console.log(4);


// fetch('data.json').then((response)=>{
//     console.log('resolved', response);
//     return response.json();
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log('rejected', err);
// });





// const getTodos = (resources, callback) => {

//     return new Promise((resolve) => {

//         const request = new XMLHttpRequest();
//         request.addEventListener('readystatechange',()=>{
//             // console.log(request, request.readyState);
//             if(request.readyState === 4 && request.status === 200){
//                 // console.log(request, request.responseText);
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//                 // callback(undefined, data);
//             } else if(request.readyState === 4){
//                 // console.log('no data');
//                 // callback('no data', undefined);
//                 reject('error getting resource');
//             }
//         });
    
//         // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//         request.open('GET', resources);
//         request.send();


//     });
// };

// getTodos('data.json').then((data) => {
//     console.log('promise 1 resolved ', data);
//     return getTodos('data2.json');
// }).then((data)=>{
//     console.log('Promise 2 resolved ', data);
//     return getTodos('data3.json');
// }).then((data)=>{
//     console.log('Promise 3 resolved', data);
// }).catch((err) => {
//     console.log('Promise rejected ', err);
// });




// // const getSomething = () => {
// //     return new Promise((resolve, reject) => {
// //       // fetch
// //         resolve('some data');
// //         reject('some error');
// //     });
    
// // };




// // getSomething().then((data) => {
// //     console.log(data);
// // }, (err) => {
// //     console.log(err);
// // });




// // getSomething().then(data => {
// //     console.log(data);
// // }).catch(err => {
// //     console.log(err);
// // })
