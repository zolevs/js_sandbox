
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
// let check = ps.includes('the');
paragraphs.forEach(function(paragraph){
    // paragraph.remove();
    if(paragraph.textContent.includes('the')){
       paragraph.remove() 
    };
})