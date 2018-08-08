/* 
(function(){
    var message = "Hello message";
    function printMessage(){
        console.log(message);
    }
    printMessage();

    var obj = {};
    obj.talk = function(){
        printMessage();
    };
    return obj;
}) ();


 */



var theObject = (function(){
    var message = "Hello message";
    // console.log('Hello from terminal...');

    function printMessage(){
        console.log(message);
    }
    // printMessage();

    var obj = {};

    obj.talk = function(){
        printMessage();
    }
    return obj;
}) ();

// theObject.talk();

var makeCounter = function (){
    var count = 0;
    return function(){
        count++;
        console.log("Counter: " + count);
    };
};

 var a = makeCounter();
a();
a();
a();
var b = makeCounter();
b(); 
