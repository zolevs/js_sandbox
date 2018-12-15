// events

// var h2 = document.querySelector('header h2');

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


/* h2.addEventListener('click', function(){
    a(5, 6);
});

function a(x, y){
    console.log(x * y);
}
 */

 // // event bubbling od unutra ka nopolju
/*  var div = document.querySelector('div.wrapper');
 var header = document.querySelector('header');
 var h2 = document.querySelector('header h2');

 div.addEventListener('click', function(){
     var delay = new Date().getTime() + 1000;
     while(new Date() < delay){}
    console.log('From DIV');
 }, false);

 header.addEventListener('click', function(){
     var delay = new Date().getTime() + 1000;
     while(new Date() < delay){}
    console.log('From header');
 }, false);

 h2.addEventListener('click', function(){
    var delay = new Date().getTime() + 1000;
    while(new Date() < delay){}
    console.log('From H2');
}, false); */

// // // even capturing od spolja ka unutra

/* var div = document.querySelector('div.wrapper');
var header = document.querySelector('header');
var h2 = document.querySelector('header h2');

div.addEventListener('click', function(){
    var delay = new Date().getTime() + 1000;
    while(new Date() < delay){}
   console.log('From DIV');
}, true);

header.addEventListener('click', function(){
    var delay = new Date().getTime() + 1000;
    while(new Date() < delay){}
   console.log('From header');
}, true);

h2.addEventListener('click', function(){
   var delay = new Date().getTime() + 1000;
   while(new Date() < delay){}
   console.log('From H2');
}, true); */


var h2 = document.querySelector('header h2');
h2.addEventListener('click', function(){
    var delay = new Date().getTime() + 1000;
    while(new Date() < delay){}
    console.log('from click event')
});

function a(){
    var delay = new Date().getTime()+3000;
    while(new Date() < delay){}
    console.log('From function a');
    
}
a();
console.log('Global code executed');

