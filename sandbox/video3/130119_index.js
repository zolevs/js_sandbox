/* 
let name = 'Oliver Nedeljkovic';
console.log(name.length);

console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log(name.includes('era')); // true or false
console.log(name.includes('de'));

let password = 'abc123password888';
console.log(password.includes('password123'));

// // Trim

let lastName = ' Ipakk ';
console.log(lastName.length);
lastName = lastName.trim();
console.log(lastName.length);

// // isValidPassword

let passwordToCheck = ' newMemeberOfGroup '
passwordToCheck = passwordToCheck.trim();
let contain = passwordToCheck.includes('password');

if (passwordToCheck.length >= 8 && contain !== true ){
     console.log('true');
} */

// // //
// // ver 1
/* function isValidPassword(toCheck){
    // console.log(toCheck);
    if(toCheck.length >= 8) {
        // console.log('proslo')
        return toCheck.includes('password');
    } else {
        return "Doesn't meat the criteria. ";
    }
}
 */


// // ver 2
 
/* let isValidPassword = function(password){
    if(password.length > 8 && !password.includes('password')){
        return true;
    }  else {
        return false;
    }
} 
 */
// // ver 3
let isValidPassword = function (password){
    return password.length > 8 && !password.includes('password');
}

 

console.log(isValidPassword('asdd'))
console.log(isValidPassword('abc123'))
console.log(isValidPassword('asdfgpassword'));
console.log(isValidPassword('asdfgpasssword'));

// // // // // // //

/* // // 
let restaurant = {
    name: 'Restauracija',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function(count){
        this.guestCount = this.guestCount + count;
    },
    removeParty: function(count){
        this.guestCount = this.guestCount - count;
    }

}
// // seatParty
restaurant.seatParty(75);

// // removeParty
// restaurant.removeParty(8)

let status = restaurant.checkAvailability(4);
console.log(status);

restaurant.removeParty(8);

console.log(restaurant.checkAvailability(4));
 */
