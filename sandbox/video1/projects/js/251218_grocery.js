
// // variables

const addItemsAction = document.querySelector('.addItems-action');
const input = document.querySelector('.addItems-input');
const submit = document.querySelector('.addItems-submit');

const list = document.querySelector('.grocery-list');
const displayItemsAction = document.querySelector('.displayItems-action');

const clear = document.querySelector('.displayItems-clear');

// // event listeners

submit.addEventListener('click', addItem);
document.addEventListener('DOMContentLoaded', displayStorage)
clear.addEventListener('click', removeItems);
list.addEventListener('click', removeItem);

// // functions
function addItem(event){
    event.preventDefault();
    let value = input.value;
    // console.log(value);

    if(value === ''){
        showAction(addItemsAction, 'Please add grocery item.', false);
    } else {
        showAction(addItemsAction, `${value} added to the list`, true);
        createItem(value)
        updateStorage(value);
    }
}

// // show action
function showAction(element, text, value){
    if (value === true){
        element.classList.add('success');
        element.innerText = text;
        input.value = '';
        setTimeout(function(){
            element.classList.remove('success');
        }, 3000);
    } else {
       element.classList.add('alert');
       element.innerText = text;
       input.value = '';
       setTimeout(function(){
           element.classList.remove('alert');
       }, 3000); 
    }
}

// // create item 
function createItem(value){
    let parent = document.createElement('div');
    parent.classList.add('grocery-item');

    // let title = document.createElement('h4');
    // title.classList.add('grocery-item_title');
    // ovo menjamo sa ovim dole da bismo imali template

    parent.innerHTML = `<h4 class="grocery-item_title">${value}</h4>
    <a href="#" class="grocery-item_link"><i class="far fa-trash-alt"></i></a>`;

    list.appendChild(parent);
}
// // update storage
function updateStorage(value){
    let groceryList;
    let exists = localStorage.getItem('groceryList');

    groceryList = localStorage.getItem('groceryList') ? JSON.parse(localStorage.getItem('groceryList')) : [];

    // // long version 
    // if(exists){
    //     groceryList = JSON.parse(localStorage.getItem('groceryList'));
    // } else {
    //     groceryList = [];
    // }

    groceryList.push(value);
    localStorage.setItem('groceryList', JSON.stringify(groceryList));

}
// // clear all from local storage
// localStorage.clear();


// display local storage

function displayStorage(){
    let exists = localStorage.getItem('groceryList');

    if(exists){
        let storageItems = JSON.parse(localStorage.getItem('groceryList'));

        storageItems.forEach(function(element){
            createItem(element)
        });
    }
}

// // remove all items
function removeItems(){
    // delete from local storage
    localStorage.removeItem('groceryList');
    let items = document.querySelectorAll('.grocery-item');
    // console.log(items);
    if(items.length > 0){
        showAction(displayItemsAction, 'All items deleted', false);
        items.forEach(function(element){
            list.removeChild(element);
        });
    } else {
        showAction(displayItemsAction, 'No more items to delete', true);
    }
    
}

// // remove single item
function removeItem(event) {
    event.preventDefault();

    // console.log(event.target);
    // console.log(event.target.parentElement);

    let link = event.target.parentElement;
    if(link.classList.contains('grocery-item_link')){
        let text = link.previousElementSibling.innerHTML;
        let groceryItem = event.target.parentElement.parentElement;
        // // remove from the list
        list.removeChild(groceryItem);
        showAction(displayItemsAction, `${text} removed from the list`, true);
        
        // // remove from the local storage

        editStorage(text)
    }

}
// // edit storage

function editStorage(item){
    let groceryItems = JSON.parse(localStorage.getItem('groceryList'));

    console.log(groceryItems);

    let index = groceryItems.indexOf(item);
    // console.log(index);

    groceryItems.splice(index, 1);
    // console.log(groceryItems);

    localStorage.removeItem('groceryList');
    localStorage.setItem('groceryList', JSON.stringify(groceryItems));
    

}