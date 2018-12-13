// var lis = document.querySelectorAll('li');
var lis = document.querySelectorAll('li, h2');

console.log(lis);
// // nodeList
// // mozemo da koristimo kao forEach ali ne i druge array metode
// // 

// lis.forEach(function(li){
//     console.log(li);
    
// })

Array.from(lis).forEach(function(li){
    console.log(li);
    li.textContent = 'Hello World';

})