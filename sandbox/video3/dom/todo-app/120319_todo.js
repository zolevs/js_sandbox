const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain',    
},{
    title: 'Habbits to work on',
    body: 'Exercise',
},{
    title: 'Office modification',
    body: 'Get a new seat'
},{
    title: 'Have a walk',
    body: 'Get a bycicle'
}];


const ps = document.querySelectorAll('p');

ps.forEach(function(p){
    p.textContent = '****';
});

// add new element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'New text from JS';
// console.log(newParagraph);
document.querySelector('body').appendChild(newParagraph);
