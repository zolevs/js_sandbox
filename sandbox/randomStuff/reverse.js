function reverseWords(string){
    var wordsArr = string.split(' '); 
    var revesedWordsArr = [];

    wordsArr.forEach(element => {
        var reversedWord = '';
        for (var i=element.length - 1; i >= 0; i--){
            reversedWord += element[i];
        }
        revesedWordsArr.push(reversedWord);
    });
    return revesedWordsArr.join(' ');
    // console.log(wordsArr);
}

console.log(reverseWords('Zoran Ivanovic'));


