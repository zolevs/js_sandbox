const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.zole.me');
link.innerText = 'Link to - Zole.me';

const msg = document.querySelector('p');

console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success');

msg.setAttribute('style', 'color: green;');

