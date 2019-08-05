let form = document.querySelector('form#person');
form.addEventListener('submit', submit);
function submit(e){
    e.preventDefault();
    let name = document.querySelector('input#name').value;
    let colors = document.querySelector('select#colors').value;
    let color = colors.value;
    
    console.log (name);
  
    // let food = '';
    // let checkboxes = document.querySelectorAll('input.food');
    
    // for (let i = 0; i < checkboxes.length; i++){
    //     if(checkboxes[i].checked){
    //         food += checkboxes[i].value + ' ';
    //     }
    // }

    let food = document.querySelectorAll('input.food:checked');
    let foodValues = Array.from(food).map(el => el.value);
    

    console.log(foodValues.toString());
    console.log (colors);

    console.log(food);
}