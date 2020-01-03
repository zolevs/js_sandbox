{

    pow.calculated = {};
    function pow(x, y){
        let stringVersion = x + "^" + y;
        console.log(stringVersion);

        if(stringVersion in pow.calculated){
            console.log('found....');
            return pow.calculated[stringVersion];
        }
        console.log('calculating');
        let total = 1;
        for (let i = 0; i < y; i++){
            total *= x;
        }
        pow.calculated[stringVersion] = total;
        console.log(pow.calculated);
        return total;

    }

    console.log(pow(10,10));
    console.log(pow(10,10));
    console.log(pow(5,5));
    console.log(pow(10,10));

}
