let lastLanguage = document.querySelector('ul#languages li:last-child');
console.log(lastLanguage);

lastLanguage.setAttribute('class', 'someFruit');
console.log(lastLanguage);

lastLanguage.className = 'anotherClass';
console.log(lastLanguage);


// ovom metodom se sve postojece klase se owervrajtuju
lastLanguage.classList.add('anotherClass');

lastLanguage.classList.remove('anotherClass');
lastLanguage.classList.toggle('anotherClass');
lastLanguage.classList.replace('anotherClass', 'someFruit');

console.log(lastLanguage);
console.log(lastLanguage.classList.contains('someFruit'));