const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]


const ps = document.querySelectorAll('p');

ps.forEach(function(p){
    p.textContent = '****';
});

// add new element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'New text from JS';
// console.log(newParagraph);
document.querySelector('body').appendChild(newParagraph);
