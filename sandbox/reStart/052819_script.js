// // overwrite properties
// // inheritance

class Animal {
    constructor(type, language, job){
        this.type = type;
        this.language = language;
        this.job = job;
    }

    speak(){
        console.log(`I'm a ${this.type} and my language is ${this.language}`);
    }

}

class Dog extends Animal {
    
    constructor(type, language, job, name){
        super(type, language, job);
        this.name = name;
        
    }

    attack(){
        console.log(`${this.name} attacks`);
    }

}

let newDog = new Dog('pitbull', 'barking', 'bite', 'Oskar');
newDog.speak();
newDog.attack();