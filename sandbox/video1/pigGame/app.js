/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;
init();

// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;
// x.dice;
// console.log(x);


/*
 function btn(){
    console.log('addEventListener');
}
// btn();
*/

// document.querySelector('.btn-roll').addEventListener('click', btn);
document.querySelector('.btn-roll').addEventListener('click', function () {
    // console.log("Some");
    // // random number
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + ".png";
   
    if (dice !== 1){
        // add score
        roundScore += dice;
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;

    } else {
        // next player
        nextPlayer();
    }

});

    document.querySelector('.btn-hold').addEventListener('click', function (){
        // add current score to global score
        scores[activePlayer] += roundScore;
        // updatee the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        // check if the player won the game
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-'+activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        } else {
            nextPlayer(); // // // !!! proveri ishod ako promenimoo gde se nalazi kao recimo pre if-a    
        }
        


    });

    function nextPlayer(){
        // next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        // ako je 1 onda sklanjamo jedan sliku
        document.querySelector('.dice').style.display = 'none';
    }

    document.querySelector('.btn-new').addEventListener('click', init);

function init(){
        scores = [0, 0];
        activePlayer = 0;
        roundScore = 0;

        document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
// document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');
};