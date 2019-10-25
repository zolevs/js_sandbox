
class User{
    constructor(username, email){
        // //
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(`${this.username} logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} logged out`);
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

const userOne = new User('luigi', 'mail@yahoo.com');
const userTwo = new User('baba', 'dada@google.com');
console.log(userOne, userTwo );

userOne.login().incScore().incScore().logout();
// userTwo.logout();
// console.log(userOne, userTwo);
// userOne.incScore();
// console.log(userOne, userTwo);


