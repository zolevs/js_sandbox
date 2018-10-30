// //  js for 301018_changeColorHex
// // // //

(function (){

    const hexValue = document.getElementById('hex-value');
    const btn = document.getElementById('btn');

    btn.addEventListener('click', createHex);

    function createHex(){
        const hexValues = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

        let hexColor = '#';
        
        for (let i = 0; i < 6; i++){
            let random = Math.floor(Math.random()*hexValues.length);
            console.log(random);
            hexColor += hexValues[random];
            console.log(hexColor);
            
        }
        document.body.style.backgroundColor = hexColor;
        hexValue.textContent = hexColor;
    }

})();