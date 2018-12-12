var icons = document.getElementsByClassName('fa');

/* for (var i=0; i < icons.length; i++){
    console.log(icons[i]);
}

var iconsArr = Array.from(icons);
console.log(icons);
console.log(iconsArr);

iconsArr.push('Hello');
console.log(iconsArr); */

// // forEach je array metod, a mi imamo HTML collection te nemozemo da koristimo 
// // ovu formu
// // icons.forEach(function(icon, index, arr){
// // console.log(icon, index, arr);
// // })
// // vec moramo da koristimo Array.from metodu da bismo dobili array


Array.from(icons).forEach(function(icon, index, arr){
    console.log(icon, index, arr);
    // console.log(index);
});

var lis = document.getElementsByTagName('li');
console.log(lis);
