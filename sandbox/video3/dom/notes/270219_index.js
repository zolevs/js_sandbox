const notes = [{
    title:'My next trip',
    body: 'I would like to go to Spain',
}, {
    title: 'Habbits to work on',
    body: 'Eercise.',
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];

// add new element

const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new element from JS';
document.querySelector('body').appendChild(newParagraph);


