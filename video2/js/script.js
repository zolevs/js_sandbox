// // get & set attribute

// var div = document.querySelector('div.wrapper');
// // div.getAttribute('class');

// // // setAttribute('attr', 'value');

// div.setAttribute('style', 'background: coral');

// div.removeAttribute('style');
// div.hasAttribute('style');


var btn = document.getElementById('add-btn');
var input = document.getElementById('add-input');

btn.addEventListener('click', function(e){
    e.preventDefault();
    console.log('hello');
    input.setAttribute('type','submit');
    input.setAttribute('value',input.value);

});