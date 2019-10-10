// first(2, function(firstResult, err){
//     if(!err) {
//         second(firstResult, function (secondResult, err){
//             if(!err) {
//                 third(secondResult, function(thirdResult, err){
//                     if(!err){
//                         console.log(thirdResult);
//                     }
//                 });
//             }
//         });
//     }
// });

// function first(value, callback){
//     callback(value+2, false);
// };

// function second(value, callback){
//     callback(value+2, false);
// };

// function third(value, callback){
//     callback(value+2, false);
// };

var promise = new Promise(function(resolve, reject){
    resolve(2);
});

promise.then(first).then(second).then(third).then(function(response){
    console.log(response);
});


function first(value){
    return value+2;
};

function second(value){
    return value+2;
};

function third(value){
    return value+2;
};




