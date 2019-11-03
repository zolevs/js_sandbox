class User {
    constructor(username, email){
        // set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    // // metode ne razdvajamo , zato gore nema , 
    login(){
        console.log(`${this.username} just logged in.`);
        return this;
    }
    logout(){
        console.log(`${this.username} just logged OUT`);
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username} has score of ${this.score}`);
        return this;
    }
}

class Admin extends User{
    constructor(username, email, title){
        super(username, email);
        this.title = title;
    }
    deleteUser(user){
        users = users.filter(u => u.username !== user.username);
    }
}

const userOne = new User('Zozon', 'zozo@mail.com');
const userTwo = new User('Tama', 'test@mail.com');
const userThree = new Admin('SubAdmin', 'admin@test.com', 'black-belt');


console.log(userOne);
console.log(userTwo);
console.log(userThree);

// userTwo.login();
// userOne.logout();

userOne.login().incScore().incScore().incScore();

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);

console.log(users);