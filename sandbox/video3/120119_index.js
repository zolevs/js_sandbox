// // //
// // object methods

let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 6,
    checkAvailability: function (partySize){
        // console.log(this.guestCapacity);
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function(partySize){
        this.guestCount = this.guestCount + partySize;
    },
    removeParty: function(partySize){
        this.guestCount = this.guestCount - partySize;
    }

}

// // seatParty
// // removeParty

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(15)
console.log(restaurant.checkAvailability(4));