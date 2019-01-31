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
    return 'Name: ' + name +' Score: '+ score;

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
   return tipCalc; 
} 

let tipAmount = tip(200, undefined);
console.log(tipAmount);
