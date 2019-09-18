const correctAnswers = ['B','B','B','B'];

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e=>{
    e.preventDefault();

    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }

    });

    console.log(score);

    // show result
    window.scrollTo(0, 0);

    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

});


// console.log('hello');
// window.console.log('hello');

// setTimeout(() => {
//     console.log('Hello ninja');
// }, 3000);

