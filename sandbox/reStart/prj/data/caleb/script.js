{

    let user = {
        active: false,
        sayHello: function(){
            return this.name + " says Hi !";
        }
    };

    let student = {
        name: "Peasant Student - student",
        major: "English"
    };

    let teacher = {
        name: "Zozon Ivano",
        teaching: ["math", "science"],
        sayHello: function(){
            let message = this.name + " teach ";
            this.teaching.forEach(function(e){
                message += e + " ";
            });
            return message;
        }
    };

    Object.setPrototypeOf(teacher, user);
    Object.setPrototypeOf(student, user);

    student.active = true;
   
    let newMembers = [teacher, student];
    newMembers.forEach(function(e){
        console.log(e.sayHello());
    });

 }

function doSomething(){
    return 1 + 1;
}

