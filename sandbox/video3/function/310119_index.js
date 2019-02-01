// multiple arguments
 let add = function(a, b, c){
    return a + b + c;
 };

 let result = add(10, 1, 5);
 console.log(result);

 // default arguments

 let getScoreText = function(name='NoName', score = 0){
    //  console.log(name);
    //  console.log(score);
   //  return 'Name: ' + name +' Score: '+ score;
    return `Name ${name} Score: ${score}.`;

 }

 let scoreText = getScoreText('Ana', 100);
 console.log(scoreText);

 scoreText = getScoreText(undefined, 200);
 console.log(scoreText);

 scoreText = getScoreText('Zozon', undefined);
 console.log(scoreText);

 // // //

let tip = function(total, tipPercent = 10){
   let decimalTip = tipPercent / 100;
   let tipCalc = total * decimalTip;
   // return tipCalc; 
   return `Tip is ${tipCalc}$ for ${total}$ bill, and it is ${decimalTip*100}%`;
} 

// let tipAmount = tip(200, undefined);
let tipAmount = tip(200, 40);
console.log(tipAmount);

// // template string

console.log('Zoran' + "Zozon"); // use boath

console.log(`Tipamount is ${tipAmount}$`);
