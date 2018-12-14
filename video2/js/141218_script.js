var h2 = document.querySelector('header h2');
h2.style.color = 'red';
h2.style.backgroundColor = 'green';

var lis = document.querySelectorAll('ul li');
lis[1].style.backgroundColor = "#ff6347";
var lis = document.querySelectorAll('ul li');
for(var i = 0; i < lis.length; i++){
    lis[i].style.backgroundColor = "pink"; 
}

lis[0].style.cssText = 'background-color: yellow; font-size: 25px;';

