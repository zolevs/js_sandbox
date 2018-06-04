function changeColorOnMouseOver() {
	var control = document.getElementById("btn");
	control.style.background = "red";
	control.style.color = "yellow";
}
function changeColorOnMouseOut(){
	var control = document.getElementById("btn");
	console.log(control);
	control.style.background = "black";
	control.style.color = "white";
}
