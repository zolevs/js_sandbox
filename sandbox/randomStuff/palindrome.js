function isPalindrome(string){
    string = string.toLowerCase();
    var charactersArr = string.split("");
    var validCharacters  = 'abcdefghijklmnopqrstwxyz'.split('');

    var lettersArr = [];
    charactersArr.forEach(char => {
        if(validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });
    // console.log (charactersArr);
    // console.log(validCharacters);
    // console.log(lettersArr);

    if(lettersArr.join('') === lettersArr.reverse().join('')) 
    return true;
    else return false;
}
console.log(isPalindrome("Race space car."));
