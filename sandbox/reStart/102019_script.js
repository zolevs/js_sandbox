const userOne = {
    userName: 'ryu',
    email: 'ryu@net.net',
    login(){
        console.log('the user log in');
    },
    logout(){
        console.log('the user log out')
    }
};

console.log(userOne.email, userOne.userName);
userOne.login();

const userTwo = {
    userName: 'chung lu',
    email: 'chung@eunet.net',
    login(){
        console.log('the user log in');
    },
    logout(){
        console.log('the user log out')
    }
};

userTwo.logout();


// const userThree = new User('hsaun@beotel.net', 'zolevs');

