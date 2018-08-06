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