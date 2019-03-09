const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(function (paragraph){
    if (paragraph.textContent.includes('the')){
        paragraph.remove();
    }
})
console.log(paragraphs);

test for git