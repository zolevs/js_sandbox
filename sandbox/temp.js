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

    obj.probni = function(){
        printMessage();
    }
    return obj;
}) ();


theObject.probni();



