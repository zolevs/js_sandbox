(function(){

    // customers
    let customers = [];
    let index = 0;

    // object constructor function

    function Customer (name, img, text){
        this.name = name;
        this.img = img;
        this.text = text;
    }

    // create customer function

    function createCustomer(name, img, text){
        // full img
        let fullImg = `img/customer-${img}.jpg`;

        // create a new customer instance

        const customer = new Customer(name, fullImg, text);
        // add to all customers
        customers.push(customer);
    }

    createCustomer('John', 1, `And beyond this, to keep the people quiet and without loss to the state, they always have the means of giving work to the community in those labours that are the life and strength of the city, and on 
    the pursuit of which the people are supported; they also hold military exercises in repute, and moreover have many ordinances to uphold them.`);
    
    createCustomer('Bob', 2, `Without loss to the state, they always have the means of giving work to the community in those labours that are the life and strength of the city, and on the pursuit of which the people are supported; they also hold military exercises in repute, and moreover have many ordinances to uphold them.`);
    
    createCustomer('Tom', 3, `This, to keep the people quiet and without loss to the state, they always have the means of giving work to the community in those labours that are the life and strength of the city, and on the pursuit of which the peopphold them.`);

    createCustomer('Kelly', 4, `Whatch this, to keep the people quiet and without loss to the state, they always have the means of giving work to the community in those labours that are the life and on the pursuit of which the peopphold them.`);
    console.log(customers);

    document.querySelectorAll('.btn').forEach(function(item){
        item.addEventListener('click', function(event){
            event.preventDefault();
            console.log(event.target);
            //
            if(event.target.parentElement.classList.contains('prevBtn')){
                if(index === 0){
                    index = customers.length;
                }
                index--;
                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;
            }


            if(event.target.parentElement.classList.contains('nextBtn')){
                if(index === (customers.length-1)){
                    index = -1;
                }
                index++;
                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;
            }


        })
    });

    
})();