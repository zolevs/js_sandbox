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


class Admin extends User {
    deleteUser(user){
        users = users.filter(u=>u.username !== user.username);
    }
}

const userOne = new User('mario', 'wema@hotmail.com');
const userTwo = new User('zole', 'mail@email.com');
const userThree = new Admin ('shaun', 'shaun@mail.com');

console.log(userOne, userTwo, userThree);

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);