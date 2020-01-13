{

    function User(){
        this.active = false;
    }

    User.prototype.sayHello = function(){
        return this.name + " says Hi!";
    };
    Student.prototype = new User();

    function Student(name, major){
        this.name = name;
        this.major = major;
    }

    function Teacher(name, teaching){
        this.name = name;
        this.teaching = teaching;
    }

    Teacher.prototype = new User();
    Teacher.prototype.sayHello = function(){
        return "Teacher says Hi ...";
    }


    let student = new Student("Peasant student", "English");
    let teacher = new Teacher("Zozon Ivan", ["math", "science"]);

    console.log(student);
    console.log(teacher);

    console.log(teacher instanceof Teacher);
    console.log(teacher instanceof User);

    if(teacher instanceof Student){
        console.log("Yep");
    } else {
        console.log("nope");
    }
    
    function doSomething(user){
        if(user instanceof User){
            return 5;
        }
        return -1;
    }

    console.log(doSomething(teacher));

    // let user = {
    //     active: false,
    //     sayHello: function(){
    //         return this.name + " says Hi !";
    //     }
    // };

    // let student = {
    //     name: "Peasant Student - student",
    //     major: "English"
    // };

    // let teacher = {
    //     name: "Zozon Ivano",
    //     teaching: ["math", "science"],
    //     sayHello: function(){
    //         let message = this.name + " teach ";
    //         this.teaching.forEach(function(e){
    //             message += e + " ";
    //         });
    //         return message;
    //     }
    // };

    // Object.setPrototypeOf(teacher, user);
    // Object.setPrototypeOf(student, user);

    // student.active = true;
   
    // let newMembers = [teacher, student];
    // newMembers.forEach(function(e){
    //     console.log(e.sayHello());
    // });

    // // console.log("in teacher, hasOwnProperty?", teacher.hasOwnProperty("name"));

    // // console.log("Name in techer?", teacher.name === undefined);
    // // console.log("Name in techer?", teacher.name !== undefined);


    // let properties = [];
    // for (let prop in teacher){
    //     if(teacher.hasOwnProperty(prop)){
    //         properties.push(prop);
    //     }
    // }
    
    // console.log(properties);

}



