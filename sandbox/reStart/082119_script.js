function Car (miles, company, color, price) {
    
    this.color = color;
    this.miles = miles;
    this.price = price;
    this.company = company;
}

const myCar1 = new Car("Civic", "Honda", "Green", 3400);

const myCar2 = new Car("324", "Mercedes", "Yellow", 6000);