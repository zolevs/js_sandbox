const ul = document.querySelector('ul');
// ul.remove();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    // ul.innerHTML += '<li>something new</li>';
    const li = document.createElement('li');
    li.textContent = 'Something new to do...';
    // ul.append(li);
    ul.prepend(li);
});



// const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log('Clicked');
});

const items = document.querySelectorAll('li');

items.forEach(element => {
    // console.log(element);
    element.addEventListener('click', e => {
        // console.log('Item clicked');
        console.log(e.target);
        // console.log(element);
        // e.target.style.textDecoration = "line-through";
        e.target.remove();
    });
});