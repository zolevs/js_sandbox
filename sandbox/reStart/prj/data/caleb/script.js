{

    function User(name, interests){
        console.log(this);
        this.name = name;
        this.interests = interests;
        this.outputStuff = function(){
            console.log(this.name, this.interests);
        }
    }

    User.prototype.greet = function(){
        console.log("My name is " + this.name, this.interests);

    }


    let me = new User("Zole", "Coder");
    let you = new User("Brana", ["Paparaco", "Acting", "Eating"]);
    console.log(me, you);

    me.outputStuff();
    you.outputStuff();

    me.greet();
    you.greet();


    // let me = new User("Zole", "Coder");
    // let you = new User("Brana", ["Paparaco", "Acting", "Eating"]);
    // console.log(me, you);

    // me.membership = "Gold";
    // console.log(me);


}

