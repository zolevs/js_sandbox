// function ask(question, yes, no){
//     if(confirm(question)){
//         yes();
//     } else {
//         no();
//     }
// };

// function showOk(){
//     alert('You agreed');
// }
// function showCancel(){
//     alert('You canceled the execution');
// }

// ask("Do you agree?", showOk, showCancel);

// function ask(question, yes, no){
//     if (confirm(question)) yes()
//     else no();
// }

// ask(
//     "Do you agree?",
//     function(){alert ("You agreed")},
//     function(){alert ("You canceled the execution")}
// );


let x = function(){
    console.log('I am called from inside function');
};

let y = function(callback){
    console.log('do something');
    callback();
};

y(x);

console.log(x);