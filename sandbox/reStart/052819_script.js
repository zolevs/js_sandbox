let food = {
    type: 'fruit',
    fruits: ['apple', 'carrot', 'grapes'],
    showFruits(){
        this.fruits.forEach(function(fruit){
            console.log(`${this.type} : ${fruit}`);
        });
    }
}

food.showFruits();
// console.log(this);

let food2 = {
    type: 'fruit',
    fruits: ['apple', 'carrot', 'cucumber', 'bananas'],
    showFruits(){
        let _this = this;
        this.fruits.forEach(function(fruit) {
            console.log(`${_this.type} : ${fruit}`);
        });
    }
}

food2.showFruits();

let food3 = {
    type: 'fruit',
    fruits: ['apple', 'cucumber', 'orange'],
    showFruits(){
        // let _this = this;
        this.fruits.forEach(function(fruit){
            console.log(`${this.type} : ${fruit}`);
        }.bind(this));
    }
}

food3.showFruits();

let food4 = {
    type: 'fruit',
    fruits: ['apple', 'cucumber', 'orange'],
    showFruits(){
        // let _this = this;
        this.fruits.forEach(fruit => console.log(`${this.type} : ${fruit}`));
    }
}

food4.showFruits();