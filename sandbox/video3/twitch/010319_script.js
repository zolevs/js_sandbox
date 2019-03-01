/*

todo twitch

*/

let tasks = [];
let taskInput = '';

do{
    
    taskInput = prompt('Enter task:');
    console.log(taskInput);

    tasks.push(taskInput);
/*       if (taskInput !== 'quit'){
        tasks.push(taskInput);
    } */
    
} while (taskInput !== 'quit');

tasks.forEach(function(e){
    console.log(e);
})
console.log(tasks);


