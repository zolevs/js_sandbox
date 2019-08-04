let form;
form = document.forms[0];
console.log(form);

form = document.getElementsByTagName('form')[0];
console.log(form);

form = document.forms.search;
console.log(form);

form = document.querySelector('form#search');
console.log(form);

console.log(form.searchInput);
console.log(form['searchInput']);


