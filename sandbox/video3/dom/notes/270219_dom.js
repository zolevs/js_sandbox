const p = document.querySelector('p');
// console.log(p);
p.remove();

// 
const ps = document.querySelectorAll('p');
console.log(ps);

ps.forEach(function(p){
    // console.log(p);
    // p.remove();
    console.log(p.textContent);
    const text = p.textContent;
    console.log(text);
    p.textContent = 'replace with New string ...';

});