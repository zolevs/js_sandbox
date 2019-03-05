// // createElement ()
// // appendChild()
// //  insertBefore()
// // removeChild()
// // replaceChild()

var newElement = document.createElement('li');
newElement.textContent = 'I am a new Element';

var list = document.getElementById('my-list');
// list.appendChild(newElement);

list.insertBefore(newElement, list.firstElementChild);

// list.removeChild(newElement);
var replaceElement = document.createElement('li');
replaceElement.textContent = 'I am replacing you';

list.replaceChild(replaceElement, newElement);


console.log(newElement);
