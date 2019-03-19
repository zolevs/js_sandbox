const notes = [{
  title: 'My next trip',
  body: 'I would like to travel to spain'
},{
  title: 'Office modification',
  body: 'Get a new seat'
},{
  title: 'Habbits to work on.',
  body: 'Exercise.'
}];

document.querySelector('#add-todo').addEventListener('click', function(e){
  console.log('Add new todo ...');
});

// listen for todo text change
document.querySelector('#new-todo-text').addEventListener('input', function(e){
  console.log(e.target.value);
})