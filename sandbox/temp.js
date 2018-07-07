function fifth(){
    console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
    firstName: 'Bob',
    lastName: 'Tajlor',
    print: fifth
}

let customer2 = {
    firstName: 'Babaroga',
    lastName: 'Tabor',
    print: fifth
}

customer2.print();
