const form = document.querySelector(".signup-form");
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(username.value);
    // validation

    const username = form.username.value;
    

    if (usernamePattern.test(username)){
        // feed back good info
        feedback.textContent = 'That user name is valid';
    } else {
        // 
        feedback.textContent = 'user name must contain ...';
    }

    console.log(form.username.value);


});

// live feedback
form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value);
    console.log(e);
    if (usernamePattern.test(e.target.value)){
        console.log('passed');
        form.username.setAttribute('class', 'success');

    } else {
        console.log('failed');
        form.username.setAttribute('class', 'error');
    }
});