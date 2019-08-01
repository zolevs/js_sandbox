let clickP = document.querySelector('p#click');
console.log(clickP);

clickP.addEventListener('click', () => console.log('Clicked'));
clickP.addEventListener('mousedown', () => console.log('mouse down'));
clickP.addEventListener('mouseup', () => console.log('mouse up'));

let doubleP = document.querySelector('p#dblClick');
console.log(doubleP);

doubleP.addEventListener('dblclick', highlight);
function highlight(e){
    e.target.classList.toggle('highlight');
}
let mouse = document.querySelector('p#mouse');
mouse.addEventListener('mouseenter', highlight);
mouse.addEventListener('mouseleave', highlight);

// key events

addEventListener('keydown', highlight);
addEventListener('keypress', (e) => console.log(`You pressed ${e.key}`));

addEventListener('keypress', function(e){
    if(e === 'Enter'){
        console.log('enter is pressed');
    }
});

let removeP = document.querySelector('p#remove');
console.log(removeP);
removeP.addEventListener('click', remove);

function remove(e){
    console.log('Removed');
    e.target.style.backgroundColor = 'yellow';
    removeP.removeEventListener('click', remove);
}

