{

    function normal(){
        return this;
    }

    let arrow = () => this;

    let newFunc = arrow.bind("Hello");
    console.log(newFunc());

    console.log(normal.bind("this")());
}

