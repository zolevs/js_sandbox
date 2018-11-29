 // // // // // //
 // PUT ALWAYS SCRIPT AT THE END
 // // // // // //


/*         const simpleQuotes = [
            {
                name: 'author number 1',
                quote: 'quote number 1'
            },
            {
                name: 'author number 1',
                quote: 'quote number 1'
            },
            {
                name: 'author number 1',
                quote: 'quote number 1'
            }
        ] 
*/

 const quotes = [
{
    quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
    name: " Life"
    },
    {
    quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
    name: "John Kenneth Galbraith"
    },
    {
    quote:
        "God save me from my friends. I can protect myself from my enemies.",
    name: "Claude Louis Hector de Villars "
    },
    {
    quote: "The price of anything is the amount of life you exchange for it.",
    name: "David Thoreau"
    },
    {
    quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
    name: "Charles Lindbergh"
    },
    {
    quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
    name: " Tyne Daly"
    }
]; 

    const quoteBtn = document.getElementById('quoteBtn');
    const quoteAuthor = document.querySelector('#quoteAuthor');
    const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);
    
function displayQuote () {
    let number = Math.floor(Math.random()*quotes.length);
    console.log(number);
    quote.innerHTML = quotes[number].quote;
    quoteAuthor.innerHTML = quotes[number].name;


}



