var icons = document.getElementsByClassName('fa');

for (var i=0; i < icons.length; i++){
    console.log(icons[i]);
}

var iconsArr = Array.from(icons);
console.log(icons);
console.log(iconsArr);

iconsArr.push('Hello');
console.log(iconsArr);