// // loop over array

let colors = ['red','gren','blue','orange'];
for (let i = 0; i<colors.length; i++){
    console.log(colors[i]);
}

for (let color of colors){
    console.log(color);
}

colors.forEach(element => {
    console.log(element);
});