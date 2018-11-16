(function (){
    // images
    let imageList = [];
    let counter = 0;

    const images = document.querySelectorAll('.store-img');
    const container = document.querySelector('.lightbox-container');
    const item = document.querySelector('.lightbox-item');
    const closeIcon = document.querySelector('.lightbox-close');
    const  btnLeft = document.querySelector('.btnLeft');
    const  btnRight = document.querySelector('.btnRight');

    // // add all images to the array

    images.forEach(function(img){
        imageList.push(img.src)
    });
    // console.log(imageList);
    // console.log(btnLeft);

    // open modal
    images.forEach(function(img){
        img.addEventListener('click', function(){
            // show modal
            container.classList.add('show');

        // get source
        let src = event.target.src;
        console.log(src);

        counter = imageList.indexOf(src);
        console.log(counter);

        // // show modal with an image
        item.style.backgroundImage = `url(${src})`;
        
        });
    });

    // // close modal

    closeIcon.addEventListener('click', function(){
        container.classList.remove('show');
    });

    // // left button
    btnLeft.addEventListener('click', function(){
        counter--;
        // console.log(counter);
        if(counter < 0){
            counter = imageList.length - 1;
        }
        item.style.backgroundImage = `url(${imageList[counter]})`;
    });
    // 

    // // right button
    btnRight.addEventListener('click', function(){
        counter++;
        // console.log(counter);
        if(counter > imageList.length - 1){
            counter = 0;
        }
        item.style.backgroundImage = `url(${imageList[counter]})`;
    });
    // 

})();