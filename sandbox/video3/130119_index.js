// // 
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


