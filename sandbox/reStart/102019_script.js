function User(username, email) {
        // set up properties
        this.username = username;
        this.email = email;
    }

    User.prototype.login = function () {
        console.log(`${this.username} has logged in `);
        return this;
    };

    User.prototype.logout = function() {
        console.log(`${this.username} has logged out`);
        return this;
    };

    function Admin(username, email, title){    
        User.call(this, username, email);  
        this.title = title;         
    }

    const userOne = new User('mario', 'mario@email.com');
    const userTwo = new User('luigi', 'luigi@email.com');
    const userThree = new Admin('shaun', 'shaun@testmail.com', 'black-belt');
    console.log(userOne, userTwo, userThree);

    userOne.login().logout();

    Admin.prototype = Object.create(User.prototype);
    Admin.prototype.deleteUser = function(){
        
    };    
