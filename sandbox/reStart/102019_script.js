const userOne = {
    username: 'Zoran',
    email: 'zozon@mail.com',
    login(){
        console.log('User logged in');
    },
    logout(){
        console.log('User logged out');
    }
};

console.log(userOne.username, userOne.email);
userOne.login();


const userTwo = {
    username: 'Zozon',
    email: 'papadubi@gg.com',
    login(){
        console.log('User logged in');
    },
    logout(){
        console.log('User logged out');
    }
};

console.log(userTwo.username, userTwo.email);

const userThree = new user();