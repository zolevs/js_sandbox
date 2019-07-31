// events

document.body.addEventListener('click', doSomething);
function doSomething() {
    console.log('Triggered');
}
document.onclick = () => console.log('Document clicked');

addEventListener('click', () => console.log('global click'));

let event = new Event('click');
window.dispatchEvent(event);