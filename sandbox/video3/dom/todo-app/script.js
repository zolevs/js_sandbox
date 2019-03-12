
 const ps = document.querySelectorAll('p');
ps.forEach(function (p){
    console.log(p.textContent);
    if(p.textContent.includes('the')){
        p.remove();
    }
  });

console.log(ps);

