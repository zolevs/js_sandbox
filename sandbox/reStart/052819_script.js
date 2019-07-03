(function(){

    console.log('Hello from IIFE');
})();

(function(){
    let color = 'red';
    let language = 'Javascript';

    init();

    function init(){
       color = 'green';
       language = 'C#';
       console.log(`Color ${color} - Language ${language}`);
    }
})();

// init();

let result = (function(){
    return 'Return from IIFE';
})();

console.log(result);

(function(msg, times){
    for (let i = 1; i<= times; i++){
        console.log(msg);
    }
})('Hello', 4);

