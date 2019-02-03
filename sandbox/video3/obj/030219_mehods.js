/* let restaurant = {
    name: 'Restaracija',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function(seats){
        this.guestCount = this.guestCount + seats;
    },
    removeParty: function(leftCount){
        this.guestCount = this.guestCount - leftCount;
    }
};

// seatParty
// removeParty

restaurant.seatParty(72);

restaurant.removeParty(5);

let status = restaurant.checkAvailability(8);
console.log(status);
 */


 /*
// // //

let name = 'Zozon Mad';
console.log(name.length);
 
// // //
console.log(name.toUpperCase());

// // //
let password = 'abcdefgh123';
console.log(password.includes('pass'));
console.log(password.includes('abc'));
console.log(password.includes('23'));

// // //

let space = '    Zozon    ';
console.log(space);
console.log(space.trim());

// isValidPassword
// length > 8 without password in it

let checkPassword = function(toCheck){
    return (toCheck.length > 8 && !toCheck.includes('pass'));
        
};

console.log(checkPassword('AAAbbb'));
console.log(checkPassword('Abcdefghijklmnopassword'));
console.log(checkPassword('Abcdefghijkl'));
*/


// // // //

let num = 4323.946;
console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

console.log(Math.random());

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

// // // //
// 1 - 5

let guest = function (guestNumber){
    let minRange = 5;
    let maxRange = 10;
    let randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
    console.log(`Random number is ${randomNumber} and your number is ${guestNumber}`)
    return randomNumber === guestNumber;
}

console.log(guest(6));

