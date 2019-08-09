localStorage.setItem('name', 'john');
console.log(localStorage.getItem('name'));

sessionStorage.setItem('lastName', 'Ivanovic');
console.log(sessionStorage.getItem('lastName'));

localStorage.removeItem('name');
console.log(localStorage.getItem('name'));