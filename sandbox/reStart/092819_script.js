// // fetch

// fetch('data.json').then((response)=>{
//     console.log('resolve', response);
//     return response.json();
// }).then((data)=> {
//     console.log(data);
// }).catch((err)=>{
//     console.log('rejected', err);  
// });

const getTodos = async () => {
    const response = await fetch('dataa.json');
    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();

    return data;
};


getTodos()
    .then(data => console.log('resolve: ', data))
    .catch(err => console.log('rejected: ', err.message));
    
