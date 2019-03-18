const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Spain'
},{
  title: 'Habbits to change',
  body: 'Exercise'
},{
  title: 'Office modification',
  body: 'Get a new seat'
}];

document.querySelector('#add-todo').addEventListener('click', function(e){
  console.log('Add new todo ...');
});

// listen for todo text change
document.querySelector('#new-todo-text').addEventListener('input', function(e){
  console.log(e.target.value);
})