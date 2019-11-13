
const cart = [];


function addItem(name, price){
    for(let i = 0; i < cart.length; i++){
        if(cart[i].name === name){
            cart[i].qty += 1;
            //
            return
        }
    }
    const item = {
        name: name,
        price: price,
        qty: 1
    }
    cart.push(item);
}

function showItems(){
    let qty = 0;
    for (let i = 0; i<cart.length; i++) {
        qty += cart[i].qty;
    }
    // console.log(`You have ${cart.length} items in cart`);
    console.log(`You have ${qty} items in cart`);
    
    for (let i = 0; i < cart.length; i+=1){
        console.log(`- ${cart[i].name} $${cart[i].price} X ${cart[i].qty} = `);
    }
    
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        total += cart[i].qty * cart[i].price;
    }
    console.log(`Total in card: $${total}`);
}

addItem("pinapple",1.29);
addItem("apple",0.99);
addItem("orange",1.29);
addItem("pinapple",1.29);
addItem("opinion",0.12);
addItem("opinion",0.12);
addItem("pinapple",1.29);
showItems();