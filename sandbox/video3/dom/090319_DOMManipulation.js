// query and remove one element

// const p = document.querySelector('p');
// console.log(p);

// p.remove();

// query all and remove

const ps = document.querySelectorAll('p')
ps.forEach(function (p) {
    // p.remove();
    // console.log(p.textContent);
    p.textContent = 'Test'
})