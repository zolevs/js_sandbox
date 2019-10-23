class User {
    constructor(username, email){
        // set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log( `${this.username} just logged out`);
        return this;
    }
    incScore() {
        this.score += 1;
        console.log(`${this.username} has score ${this.score}`)
        return this;
    }
}

const userOne = new User('mario', 'wema@hotmail.com');
const userTwo = new User('zole', 'mail@email.com');



console.log(userOne, userTwo);

// userOne.login();
// userTwo.login();

// userTwo.logout();

// userOne.incScore();
// userOne.incScore();

userOne.login().incScore().incScore();
