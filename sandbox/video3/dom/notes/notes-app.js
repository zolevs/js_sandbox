
console.log('This is from different file.');
console.log('Test live server');

// // DOM - Document Object Model

let p = document.querySelectorAll('p');

console.log(p);
const ps = document.querySelectorAll('p');

ps.forEach(function (p){
    console.log(p.textContent);
    // p.remove();
    p.textContent = '******';
})

let text = p.textContent;
console.log(text);


let h1 = document.querySelector('h2');
h1.remove();