// 

(function(){

    document.getElementById('message-form').addEventListener('submit', function(e){
        // prevent default action
        // // e parametar se moze zvati bilo kako najcesce ih nazivamo e ili event
        e.preventDefault();
        const message = document.getElementById('message');
        // // get a value
        const value = message.value;
        console.log(value);

        // // check for empty value
        if(value === ''){
            console.log('empty value');
            const feedback = document.querySelector('.feedback');
            feedback.classList.add('show');
            
            setTimeout(function(){
                feedback.classList.remove('show');
            }, 2000);
        } else {
            // // set a value
            document.querySelector('.message-content').textContent = value;
            // // set value
            message.value = '';
        }

        

    });

})();