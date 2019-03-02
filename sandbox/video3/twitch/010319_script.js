// todo DOM
//
//

let textField = document.getElementById('textField');
let button = document.getElementById('button');
let taskList = document.querySelector('#taskList');

button.onclick = function(){
    let newTask = document.createElement('li');
    let taskText = textField.value;
    let taskTextNode = document.createTextNode(taskText);

    console.log(taskText);

    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    checkBox.onclick = function(){
        newTask.setAttribute('style', 'text-decoration: line-through; opacity: 0;');
        // newTask.setAttribute('style', 'opacity: 0;');

        window.setTimeout(function (){
            taskList.removeChild(newTask);
        }, 1000)
    };


    newTask.appendChild(checkBox);
    newTask.appendChild(taskTextNode);
    taskList.appendChild(newTask);

    textField.value = '';


};














/*

todo twitch

*/







// let tasks = [];
// let taskInput = '';

// /* do{
    
//     taskInput = prompt('Enter task:');
//     console.log(taskInput);

//     tasks.push(taskInput);
// /*       if (taskInput !== 'quit'){
//         tasks.push(taskInput);
//     } */

//     /*    
// } while (taskInput !== 'quit');

// tasks.forEach(function(e){
//     console.log(e);
// })
// console.log(tasks);


//  */

//  let total = 0;
// let elements =  [1, 2, 3, 7, 8, 5, 3, 2, 10];

// // for (let i = 0; i < elements.length; i++){
// //     total +=elements[i];
// // }


// //  .forEach(function(e){
// //      total += e;
// //  });

// elements.forEach(function(e, i){
//     console.log(i, e);
//     total += e;
// })


//  console.log(total);