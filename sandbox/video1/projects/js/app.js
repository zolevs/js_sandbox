
const colors = ['yellow', 'green', 'blue', '#f15026', 'rgba(123,123,123,0.5)'];

const btn = document.getElementById('btn');

// add event listener
btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*colors.length);
    const body = document.body;
    body.style.backgroundColor = colors[random];
    console.log(random);
    console.log(colors[random]);
})
