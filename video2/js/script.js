// events

var h2 = document.querySelector('header h2');

// h2.onclick = function (){
//     console.log('Clicked');
// }

// h2.onmouseover = function(){
//     console.log('Mouseover');
// }

/* function a(){
    console.log('clicked');
}
function b(){
    console.log('mouse over');
}

 */

/* h2.addEventListener('click', function(){
    console.log('Click');
}); */
/* h2.addEventListener('click', a);
h2.addEventListener('click', b);

function a(){
    console.log('Clicked a...');
}
function b(){
    console.log('Clicked b...')
}
 */

// // event object

/* h2.addEventListener('click', a);

function a(e){
    console.log('Clicked a...');
    console.log(e);
    console.log(e.clientX);
    console.log(e.target);
    console.log(this);
} */


h2.addEventListener('click', function(){
    a(5, 6);
});

function a(x, y){
    console.log(x * y);
}
