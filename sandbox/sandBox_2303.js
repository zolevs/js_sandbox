//// 25.05
//
//
//

var myArray = [6,4,2,5,1];
// myArray.splice(2,0,3,4,1);

console.log(myArray);

myArray.splice(0,1);
console.log(myArray);





//  var myArray = ["Sam", "Mark", "Tom", "David"];
// var myNumArray = [1, 20, 31, 4, 9, 22, 11];
// console.log(myNumArray);


// console.log(myArray);

//  myArray.sort();

//  document.write(myArray + "<br/>");


// myNumArray.sort(function(a,b){ return a - b});
// document.write(myNumArray+"<br/>");


// myNumArray.sort(function(a,b){ return a - b}).reverse();
// document.write(myNumArray);





//// 24.05
//
//
//

// // // // Verzija 2

// var myArray = [];

// for (var i = 0; i <= 5; i++){
// 	myArray.push(i * 2);
// }

// for (var i = 0; i <= 5; i++){
// 	document.write(myArray.pop() + "<br/>");

// }

// console.log(myArray.length);

// // // Verzija 1

// var myArray = [];

// for (var i = 0; i <= 5; i++){
// 	myArray[i] = i * 2;
// }

// for (var i = 0; i <= 5; i++){
// 	document.write(myArray[i] + "<br/>");
// }

// console.log(myArray.length);



//// 23.05
//
//
//

// var evenNumbersArray = [];
// for (var i = 0; i <= 5; i++){
// 	evenNumbersArray[i] = i * 2;
// }
// // document.write(evenNumbersArray);

// for (var i = 0; i <= evenNumbersArray.length -1; i++){

// }






// var myArray = [10, 20, 44, 12];

// console.log(myArray[2]);

// document.write("First element = " + myArray[0] + "<br/>");
// document.write("Last element = " + myArray[myArray.length-1] + "<br/>");
// myArray[4] = 110;
// console.log(myArray.length);
// document.write(myArray[4]);

// var newArray = new Array(20,33,245,33,242,344,52);


//// 22.05
//
//
//

// var userChoice = "";

// do {
// var targetNumber = Number(prompt("Enter target number ",""));
// var start = 0;
// 	while (start <= targetNumber){
// 		document.write(start + "<br/>");
// 		start = start + 2;
// 	}


// 	do {
// 		userChoice = prompt("Continue - Yes or No");

// 		if(userChoice != "Yes" || userChoice != "No") {
// 			alert("Invalid choice");
// 	}
// 	} while (userChoice != "Yes" && userChoice != "No");
// } while (userChoice == "Yes");



//// 21.05
//
//
//



// var start = 0;

// while (start < 10){
// 	start = start + 1;
// 	if(start % 2 == 0){
// 		continue;
// 	}
// 	document.write(start + "<br/>");
// }




// var targetNumber = Number(prompt("Enter number",''));

// var start = 0;

// while (start <= targetNumber){
// 	document.write(start + "<br/>");
// 	start = start + 2;

// 	if (start > 100){
// 		break
// ;	}
// }





//// 20.05
//
//
//

// // ternary

// var userInput = Number(prompt("Enter number 1,2,3", ""));
// var message = (userInput % 2 == 0 ? "Your number is even": "ODD");
// var monthName = userInput == 1 ? "January": userInput == 2 ? "February": userInput == 3 ? "March" : "Unknown";


// if( userInput )

// if(userInput % 2 == 0){
// 	message = "Your number is even";
// } else {
// 	message = "Your number is odd";
// }

// console.log(monthName);

// // switch ()

// switch(userInput){
// 	case 1:
// 	case 2:
// 	case 3:
// 		console.log("User input is "+userInput);
// 		break;
// 	default:
// 		console.log("Entered number is not between 1 and 3");
// }


// switch(userInput){
// 	case 1:
// 		console.log("Entered number is one");
// 		break;
// 	case 2:
// 		console.log("Entered nuber is two");
// 		break;
// 	case 3:
// 		console.log("Entered number is three");
// 		break;
// 	default:
// 		console.log("Number is not in range");

// }



// var userInput = Number(prompt("Enter a number ", ""));

// if(userInput == 1 ){
// 	alert("Your number is one");
// }
// else if(userInput == 2 ){
// 	alert("Your number is two");
// }
// else if(userInput == 3 ){
// 	alert("Your number is three");
// }
// else {
// 	// ((userInput != 1) && (userInput !=2) && (userInput != 3))
// 	alert("Your number is not between 1 and 3");
// }







// var emailAddress = "zoleeeee@gmail.com";

// var position = emailAddress.indexOf("@");
// console.log(position);

// var emailPart = emailAddress.substring(0, emailAddress.indexOf("@"));

// console.log(emailPart);

// var domainPart = emailAddress.substring(emailAddress.indexOf("@")+1);
// console.log(domainPart);

// // // // //

// var fullDomain = "www.google.com.rs";

// var domain = fullDomain.substr(fullDomain.lastIndexOf("."));

// console.log(domain);





//// 19.05
//
//
//

// var first_name = "Ricky";
// var last_name = "Bobby";
// var age = 45;
// var first = true;
// var last = false;

// if ( age == 45) {

// } else {

// }





// var string1 = "Partone";
// var string2 = "Part two";
// var string3 = "Part three";
// var string4	= "dolordolorLorem ipsum dolor Dolor sit DOLOR amet, consectetur adipisicing elit.dolor Dolorum, ratione! dolor "

// var result = string1.concat(" ","from concat." + string3 + " "+string2);

// console.log(result);
// var toLowerCase = string4.toLowerCase();
// console.log(toLowerCase);

// var toUpperCase = string4.toUpperCase();

// console.log(toUpperCase);
// console.log(string4);

// console.log(string4.length);

// var regularExpresion = string4.replace(/dolor/gi, "promena");

// console.log(regularExpresion);
// var part = string1.substring(2,5);
// console.log(part);

// var partSubstr = string1.substr(2,3);
// console.log(partSubstr);

// var partSlice = string1.slice(2,5);
// console.log(partSlice);

// var firstChar = string4.indexOf("s");
// var firstCharNonExisting = string4.indexOf("f");
// console.log(firstChar);
// console.log(firstCharNonExisting);












//// 18.05
//
//
//

// $(function(){
// 	var helloDiv = $('div');

// 	var width = $(helloDiv).width();
// 	var height = $(helloDiv).height();

// 	$('body').mousemove(function(event){
// 		var mouseX = event.pageX;
// 		var mouseY = event.pageY;

// 		// console.log(mouseY);

// 		$(helloDiv).css({
// 			left: mouseX - (width/2),
// 			// top: mouse
// 			top: mouseY - (height/2)
// 		});
// 	});

// });




// $(function(){
// 	// $('div').css('opacity', 0.0);
// 	// isto i kada pristupamo direktno cssu

// 	$('div').delay(800).animate({
// 		opacity: 1.0
// 	});
// });






// var clickMeButton = document.getElementById=(clickMe);
// /* var clickedFunction = function (){
//   console.log('I was clicked from function');
// }
//  */
// var backgroundColors = ['blue','red','green','orange'];
// var backgroundColorIndex = 0;


// function clickedFunction (){
// 	console.log('Clicked from another function');
// 	var newBackgroundColor = backgroundColors[backgroundColorIndex];
// 	console.log(newBackgroundColor);
// 	document.body.style.backgroundColor = newBackgroundColor;
// 	backgroundColorIndex++;
// 	if(backgroundColorIndex >= backgroundColors.length){
// 		backgroundColorIndex = 0;
// 		console.log('End');
// 	}
// }

// clickMeButton.addEventListener('click', clickedFunction);



//// 17.05
//
//
//

// $('#inputText').keyup(function(){
// 	var resultText = $(this).val();
// 	// console.log(text);

// 	// if(resultText != ''){
// 	// 	resultText = "You typed: "+resultText;
// 	// }

// 	if(resultText.indexOf('@') >= 0){
// 		$('#results').text('No @ symbols allowed');
// 	} else {
// 		$('#results').text(resultText);
// 	}

// 	// $('#results').text(resultText);
// });




// var button1 = document.getElementById('button1');
// var button2 = document.getElementById('button2');

// button1.addEventListener('click', function(){
// 	console.log('Clicked button 1');
// });

// button2.addEventListener('click', function(){
// 	console.log('Clicked button 2');
// });

// $('#button2').click(function(){
// 	// console.log('Hello from jQuery');
// 	$(this).animate({
// 		opacity: 0.1
// 	}, 1000);
// });

// var clickMeButton = document.getElementById('clickMeButton');
// var backgroundColors = ['blue','yellow','red'];
// var backgroundColorIndex = 0;


// clickMeButton.addEventListener('click', function(){

// 	var newBackgroundColor = backgroundColors[backgroundColorIndex];
// 	document.body.style.backgroundColor = newBackgroundColor;

// 	backgroundColorIndex++;
// 	if(backgroundColorIndex >= backgroundColors.length){
// 		backgroundColorIndex = 0;
// 		console.log('Start from the beginning');
// 	}

// });



// var clickMeButton = document.getElementById('clickMeButton');

// console.log(clickMeButton);

// clickMeButton.addEventListener('click', function(){
// 	console.log('Hello');
// });

// clickMeButton.addEventListener('click', clickMeButtonFunction);

// function clickMeButtonFunction(){
// 	console.log("Hello from function.");
// }

//// 16.05
//
//
//

// var clickMeButton = document.getElementById('clickMeButton');

// var fontSize = 16;

// clickMeButton.addEventListener('click', function(){
// 	fontSize++;

// 	clickMeButton.style.fontSize = fontSize + 'px';
// });

// var clickMeButton = document.getElementById('clickMeButton');

// console.log(clickMeButton);

// var backgroundColors = ['blue', 'yellow', 'green', 'purple'];
// var backgroundColorIndex = 0;
// var clickMeButtonFunction = function(){
// 	// console.log('Another click...');
// 	var newBackgroundColor = backgroundColors[backgroundColorIndex];

// 	document.body.style.backgroundColor = newBackgroundColor;
// 	backgroundColorIndex++;
// 	if (backgroundColorIndex >= backgroundColors.length){
// 		backgroundColorIndex = 0;
// 	};

// };

// clickMeButton.addEventListener('click', clickMeButtonFunction);


// clickMeButton.addEventListener('click', function(){
// 	console.log('It was clicked');
// });


//// 14.05
//
//
//

// var backgroundColors = ["blue","yellow","green","purple"];

// var currentBackgroundIndex = 0;

// var changeBackgroundColor = function(){
// 	var newBackgroundColor = backgroundColors[currentBackgroundIndex];
// 	console.log(newBackgroundColor);
// 	document.body.style.backgroundColor = newBackgroundColor;

// 	currentBackgroundIndex++;

// 	if(currentBackgroundIndex >= backgroundColors.length){
// 		currentBackgroundIndex = 0;
// 	}
// }


// setInterval(changeBackgroundColor, 1000);



// var timeout = function(){
// 	console.log("I was waited for 2sec.");
// }
// setTimeout(timeout, 2000);


// var sayHi = function(name, numberOfTimes){
// 	for (var i=0; i<numberOfTimes; i++){
// 	console.log(name+' says hi');
// 	}
// };

// sayHi("Zole",3);
// sayHi("Dejan",4);





//// 13.05
//
//
//

// var timeOutFunction = function(){
// 	document.write("I finally ran.")
// }

// setTimeout(timeOutFunction, 2000);

// var doeFunction = function(name,numberOfTimes){
// 	for(let i=0; i<numberOfTimes; i++){
// 		document.write("Hello " + name+" Function." + i + "<br/>");
// 	}
// }

// doeFunction("Zole",5);


//// 08.05
//
//
//

// for (var i = 0; i < 10; i++) {
// 	if(i % 2 == 0){
// 		document.body.innerHTML += (i + '<br/>');
// 	} else {
// 		document.body.innerHTML += ('Not ' + i + '<br/>');
// 	}
// }




// var name = 'John Doe';
// if (name.toUpperCase() == 'JANE DOE') {
// 	document.body.innerHTML = 'It is Jane Doe';
// }else if (name =='John Doe'){
// 	document.body.innerHTML = 'It is John Doe'
// } else {
// 	document.body.innerHTML = 'It is not Jane Doe';
// }






//// 06.05
//
//
//

// var people = [
// 	{name: "Jane Doe", age: 44},
// 	{name: "Nada Top", age: 100},
// 	{name: "Tap Top", age: 21}
// ]
// var age = 0;
// for (var i=0; i < people.length; i++){
// 	var person = people[i];

// 	console.log("Person "+person.name+" is "+person.age+" old.");

// 	age += person.age;
// }

// console.log(age);

// var person = {name: "Jane Doe", age: 41};
// person.birth = 1974;

// console.log(person);

// person.age = 2018 - person.birth;

// console.log(person);


// function randomRange(myMin, myMax){
// 	return Math.floor(Math.random()*(myMax - myMin + 1))+myMin;
// }

// var myRandom = randomRange(5, 15);
// console.log(myRandom);



//// 03.05
//
//
//

// var names = ["Abe", "Babe", "Chuck"];
// names.push("Dave");

// var obj = {age: 44, name:"Joe", showsize:9.5};

// for (var key in names){
// 	console.log("key: "+key+" value: "+names[key]);
// }
// for (var key in obj){
// 	console.log("Key: "+key+" value: "+obj[key]);
// }


// for (var i = 0; i < names.length; i++){
// 	console.log(names[i]);
// }





//// 02.05
//
//
//


// let twoD = [
// 	[1,3,4,6,7,8,3,2],
// 	[6,3,56,3,5,3],
// 	[423,533,522,1]
// ];
// let bigHero = { characters: [
// 	{name:'Hir', voice:'R. Potter'},
// 	{name: 'Baymax', voice:'S. Adsit', prop: 123},
// 	{name: 'Spiderman', voice:'L. Nonao'},
// 	{name: 'Fred', voice:'T.J Miller'}
// ]};

// let chars = bigHero['characters'];	//bigHero.characters;
// console.log(chars);
// for (let i = 0, len=chars.length; i<len; i++){
// 	// console.log(chars[i]);
// 	// console.log(chars[i].name);
// 	// console.log(chars[i]['name']);

// 	for(let prop in chars[i]){
// 		console.log(prop, chars[i].prop, chars[i][prop]);
// // // chars[i].prop ovo je pristup varijabli prop
// // // chars[i][prop] ovo je pristup objektu prop
// // // https://youtu.be/AqgVLYpBWG8?t=631
// 	}

// }




// // // nested for loops
// let rows = twoD.length;
// for (let i=0; i<rows; i++){
// 	let items = twoD[i].length;
// 	console.log(i, items);
// 	for(let j=0; j<items; j++){
// 		console.log(twoD[i][j]);
// 	}
// }

// var cars = [
// 	{
// 		make: "Honda",
// 		model: "civic",
// 		year: 2014,
// 		color: "blue"
// 	},
// 	{
// 		make: "Mercedes",
// 		model: "B 180",
// 		year: 2015,
// 		color: "red"
// 	},
// 	{
// 		make: "Opel",
// 		model: "corsa",
// 		year: 2006,
// 		color: "perla"
// 	}
// ]
// for (i=0; i < cars.length; i++){
// 	if (cars[i].year > 2010){
// 		console.log(cars[i].model);
// 		document.write(cars[i].make+" "+cars[i].year+"<br/>");
// 	}
// }

// var ourArray = [];
// var i=0;
// while(i<=5){
// 	ourArray.push(i);
// 	i++;
// }


// var arr = [
// 	[1,2],[3,44],[34,21]
// ];

// for (var i=0; i < arr.length; i++){
// 	// console.log(arr[i]);
// 	for (var j=0; j < arr[i].length; j++){
// 		console.log(arr[i][j]);
// 	}
// }




// var arr = [10, 229 , 48, 27, 6];
// var total = 0;

// for (var i=0; i < arr.length; i++){
// 	console.log(arr[i]);
// 	total += arr[i];
// }
// console.log(total);





// var contacts = [
// {
// 	"firstName":"Akira",
// 	"lastname":"Laine",
// 	"number":"012345",
// 	"likes":["Pizza", "Coding", "Brown"]
// },
// {
// 	"firstName":"Zoran",
// 	"lastname":"Ivanovic",
// 	"number":"222211111",
// 	"likes":["Chocolate", "Walk", "Blue"]
// },
// {
// 	"firstName":"Ljiljana",
// 	"lastname":"Ivanovic",
// 	"number":"264352111",
// 	"likes":["Parfume", "Milk", "Red"]
// },
// {
//     "firstName": "Kristian",
//     "lastName": "Vos",
//     "number": "unknown",
//     "likes": ["Javascript", "Gaming", "Foxes"]
// }

// ]
// function lookUpProfile(firstName, prop){
// 	for (var i=0; i < contacts.length; i++){
// 		if (contacts[i].firstName == firstName){
// 			console.log("Radi");
// 		} else {
// 			console.log("Ovde");
// 		}

// 	}
// }

// lookUpProfile("Kristian", "likes");






//// 01.05
//
//
//

// for (var i=0; i<10; i++){
// 	if(i % 2 == 0){
// 		document.body.innerHTML += (i + '<br/>');
// 	} else {
// 		document.body.innerHTML += ('Not ' + i + '<br/>');
// 	}
// }




// var name = 'Jane';

// if(name == 'Jane Doe'){
// 	document.body.innerHTML = 'It is Jane Doe !!!';
// } else if (name.toUpperCase() == 'JANE'){
// 	document.body.innerHTML = 'It is JANE toUpperCase.';
// }else {
// 	document.body.innerHTML = 'It is not Jane Doe ?!?!';
// }







// var people = [

// 	{name: "Yo Jo", age: 43},
// 	{name: "JoHan Han", age: 55},
// 	{name: "Mi Sao", age: 74}

// ];

// people.push({
// 	name: "Eli Batman",
// 	age: 123
// });

// var sumOfAges = 0;
// for (var i=0; i < people.length; i++){
// 	// sumOfAges += people[i].age;
// 	var person = people[i];

// 	sumOfAges += person.age;
// 	console.log('Hello '+person.name+' nice to see you. You are '+person.age + ' old.');
// }

// console.log(Math.round(sumOfAges/people.length));








// var person = {name:"Jo Yo", age: 42};

// console.log(person);

// console.log(person.name);
// console.log(person.age);

// person.birth = 1974;

// person.age = 2018 - person.birth;
// console.log(person.age);
// console.log(person);



// var ourArray = [];
// var i = 0;

// while(i<5){
// 	ourArray.push(i);
// 	i++
// }

// console.log(ourArray);



// function multiplyAll(arr){

// 	var product = 1;

// 	for (var i=0; i < arr.length; i++){
// 		for(var j = 0; j < arr[i].length; j++){
// 			product *= arr[i][j];
// 			console.log(product);
// 		}
// 	}
// 	console.log(product);
// 	return product;
// }

// multiplyAll([[1],[3],[2],[2,1],[4,3,4]]);


// var arr = [
// 	[1,2],[3,4],[5,6]
// ];

// for (var i = 0; i < arr.length; i++){
// 	for (var j = 0; j < arr[i].length; j++){
// 		console.log(arr[i][j]);
// 	}
// }








// var ourArray = [9, 10, 11, 12];
// var ourTotal = 0;

// for (var i=0; i<ourArray.length; i++){
// 	ourTotal += ourArray[i];
// }





//// 30.04
//
//
//

// var person = {
// 	name:'Ja Ti',
// 	age: 44
// };

// // // (person.name)
// // // (person.age)

// person.birth = 1974;

// person.age = 2018 - person.birth;



// var names = ["Zoran", "Milan", "Dejan"];
// var textToDisplay = "";

// for (var i=0; i<names.length; i++){
// 	textToDisplay += names[i];
// 	textToDisplay += "<br/>";
// }

// document.body.innerHTML = textToDisplay;





// var names = ["Zoran", "Milan", "Dejan"];

// console.log(names[2]);
// names.push("Ila");
// // names.pop();
// names.unshift("Dejan");

// console.log(names[0]);





// var cashInWallet = 10;

// cashInWallet = cashInWallet + 1;
//  //// cashInWallet + 1; (false)

// document.write(cashInWallet);

// cashInWallet = 2 * cashInWallet++;

// document.write(cashInWallet);









//// 28.04
//
//
//

// var ourArray = [];

// for (let i=0; i<10; i += 2){
// 	ourArray.push(i);
// };

// var odd = [];

// for (let i=1; i<10; i +=2){
// 	odd.push(i);
// }



// var myArray = [];

// for (let i=0; i < 5; i++){
// 	myArray.push(i);
// }

// console.log(myArray);




// var ourArray = [];
// for (var i = 0; i < 5; i++) {
// ourArray.push(i);
// }


// var ourVar = [];

// for (var i = 0; i < 5; i++){
// 	ourVar.push(i);
// }

// for (var i = 0; i < ourVar.length; i++){
// 	document.write(ourVar[i]+"<br/>");
// }






//// 27.04
//
//
//

// var myPlants = [
// {
// 	type: "flowers",
// 	list: [
// 		"rose",
// 		"tulip",
// 		"dendelion"
// 	]
// },
// {
// 	type: "trees",
// 	list: [
// 		"fir",
// 		"pine",
// 		"birch"
// 	]
// }
// ];

// var myStorage = {
// 	"car":{
// 		"inside":{
// 			"glove box": "maps",
// 			"passenger seat":"crumbs"
// 		},
// 		"outside":{
// 			"trunk":"jack"
// 		}
// 	}
// };






// var ourStorage = {
// 	"desk":{
// 		"drawer": "stapler"
// 	},
// 	"cabinet":{
// 		"top drawer":{
// 			"folder1":"a file",
// 			"folder2":"secrets"
// 		},
// 		"bottom drawe":"sode"
// 	}
// };




//// 23.04
//
//
//


// function person(name, age){
// 	this.name = name;
// 	this.age = age;
// 	this.yearOfBirth = bornYear;
// }
// function bornYear(){
// 	return 2018 - this.age;
// }
// var p = new person("Zoran", 44);
// document.write(p.yearOfBirth());


// // Setup
// function phoneticLookup(val) {
//   var result = "";

//   // Only change code below this line
//   var lookup = {
//     "alpha": "Adams",
//     "bravo": "Boston",
//     "charlie": "Chicago",
//     "delta":"Denver",
//     "echo":"Easy",
//     "foxtrot":"Frank"
//   };

//   result = lookup[val];

//   // Only change code above this line
//   return result;
// }

// // Change this value to test
// console.log(phoneticLookup("charlie"));









// var alpha = {
// 	1: "Z",
// 	2: "Y",
// 	3: "X",
// 	4: "W",
// 	5: "C",
// 	6: "B",
// 	7: "A"
// }

// console.log(alpha[2]);
// console.log(alpha[7]);

// let value = 4;
// console.log(alpha[value]);


// var testObj = {
// 	12: "Namath",
// 	16: "Montana",
// 	19: "Unitas",
// 	20: "Opera"
// }

// var playerNumber = 20;
// var playerName = testObj[20];

// console.log(playerName);

// testObj[12] = "Zoran";
// testObj.temp = "Ovo je test";

// delete testObj[19];
// console.log(testObj);



// var someProp = "propName";
// var myObj = {
// 	propName: "Some Value",
// 	name: "Oskar",
// 	age: 12
// }

// test = myObj[someProp];

// console.log(test);

// test  = myObj.name;
// console.log(test);

// let variable = "age";
// test = myObj[variable];

// console.log(test);




//// 22.04
//
//
//

// var ourDog = {
// 	"name" : "Oskar",
// 	"legs" : 4,
// 	"tails" : 1,
// 	"friends" : ["everything"]
// }

// ourDog.name = "Laki";
// ourDog["name"] = "Oskar";
// ourDog.brother = "Laki";
// ourDog["brother"] = "Laki";

// console.log(ourDog);

// delete ourDog.friends;

// console.log(ourDog);





//// 17.04
//
//
//

// function printTime(){
// 	document.body.innerHTML = "";

// 	var now = new Date();
// 	var hours = now.getHours();
// 	var min = now.getMinutes();
// 	var sec = now.getSeconds();

// 	document.write(hours + ":" + min +":"+ sec+"<br/>");

// 	// document.write(now+"<br/>");
// 	// document.write(hours+"<br/>");
// 	// document.write(min + "<br/>");
// 	// document.write(sec + "<br/>");
// }

// printTime();

// setInterval("printTime()", 1000);

// function doSomething(){
// 	document.write("Tuna ");
// }

// setInterval("doSomething()", 2000);

// var n = prompt("","");
// var answer = Math.sqrt(n);
// document.write(answer);


// document.write(Math.PI);





// function isLess(a, b){
// 	return (a < b);
// }


// function isLess(a, b){
// 	if(a < b){
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// console.log(isLess(10, 15));





//// 17.04
//
//
//



// var ime = new Array();

// ime["color"] = "Blue";
// ime["food"] = "hot";

// document.write(ime["color"]);





// var stuff = new Array("apples", "pears", "bacon", "tuna", "ham");

// stuff.sort();

// for(i = 0; i < stuff.length; i++){
// 	document.write(stuff[i]+"<br/>");
// }





// var pie = prompt("Enter your name: ", "...");
// console.log (pie);
// document.write(pie);

// var crap = new Array(3)

// for (i=0; i<3; i++){
// 	crap[i] = prompt("Enter", "");
// }
//// 15.04
//
//
//

// var bp = Array("Head", "Shoulders", "Knees", "Toes");

// bp.reverse();
// // console.log(bp);

// bp.push("Tongue", "Liver");

// console.log(bp);

// bp.sort();

// console.log(bp);

// var stringJoin = bp.join();
// document.write(stringJoin);


// // //// POP

// var movies = new Array("Avatar", "Roler ball", "Fight Club", "Oz");
// document.write(movies[3] + "<br/>");

// movies.pop();


// //// JOIN - method
// var movies = new Array("Avatar", "Roler ball", "Fight Club", "Oz");

// var string1 = movies.join(" | ");

// document.write(string1);





// var ljudovi = new Array("Homer", "Bart", "Randy", "Kid");
// var chicks = new Array("Lisa", "Aron", "Hannah")

// var people = ljudovi.concat(chicks);


// document.write(ljudovi.length+"<br/>");
// document.write(people.length);


// var stuff = new Array();

// stuff[0] = "Zoran";
// stuff[1] = "Komsija";

// console.log(stuff);


// function testGreaterThan(val){
// 	if (val >= 100){
// 		return "100 or over 100";
// 	}
// 	if (val >= 10){
// 		return "10 or over 10";
// 	}
// 	return "Under 10";
// }

// // console.log(testGreaterThan(101));
// document.write(testGreaterThan('100'));

// console.log(76 <= 6);





//// 14.04
//
//
//


// var things = new Array(3);

// console.log (things);

// things[0] = "Javascript";
// things[1] = "Text";
// things[2] = "Book";
// things[3] = "Thing";
// things[4] = "Again";

// var people = new Array("Komsija", "Sused", "Milan", "Opasno", "Sunce");

// document.write(people[0]+'<br/>');
// document.write(people[4]+"<br/>");
// document.write(people[8]+'<br/>');


// console.log( 3 !== '3');
// console.log( 4 !== 3);
// console.log( 4 !== '3');
// console.log( 4 !== 4);
// console.log( 4 !== '4');




// console.log(1 != 2);
// console.log(1 != "1");
// console.log(1 != 1);
// console.log(1 != false);





// function equalityTest(myVal){
// 	if (myVal === 12){
// 		return "Equal";
// 	}
// 	return "Not Equal";
// }
// console.log(equalityTest('12'));





// var ourArray = [1,2,3,4];
// console.log(ourArray);
// var removeFromArray = ourArray.pop();
// document.write(removeFromArray);



// var ourArray = ["Simpson", "Homer", "Bart"]
// ourArray.push(["Lisa", "Marge"]);

// console.log(ourArray[1]);
// console.log(ourArray[3]);









//// 13.04
//
//
//

// var Pizza = {
// 	crust: 'thin',
// 	toppings: 3,
// 	hasBacon: true,
// 	howmanyToppings: function(){
// 		return this.toppings;
// 	}
// };

// console.log(Pizza.crust);


// var x = new Object ();
// var y = {};

// console.log(x);

// //// opsirnije o objektu
// console.dir(y)




//// 10.04
//
//
//

 // function person(name, age){
 // 	this.name = name;
 // 	this.age = age;

 // }

 // var zole = new person("Zoran Ivan", 43);
 // var milan = new person("Milan Anki", 43);

	// document.write(zole.name);
	// document.write(milan.name);




//// 06.04
//
//
//


// var friends = ["Milan","Sasa","Dejan","Boban","Zoran","Stevan","VV"];

// function greetFriends(){
// 	for(i = 0; i < friends.length; i++)
// 	console.log(friends[i]);
// 	// document.write(i);
// 	// console.log(i);
// }

// greetFriends();



// var friends = ["Milan","Sasa","Dejan","Boban","Zoran","Stevan","VV"];

// document.write(friends[1]);

// friends[1] = "Novo Ime";

// document.write(friends[1]);

// friends.push("Sasa");




// function randomNumber(){
// 	document.write(Math.random());
// }

// randomNumber();





// function calculate(side1, side2){
// 	console.log(side1 * side2);
// }

// calculate(10,12);







//// 02.04
//
//
//


// var sad = confirm("Would you like to be cheered up?");

// console.log(sad);

// while(sad){
// 	console.log("What do you call a boomerang that doesn't come back? ... A stick !");
// 	var yes = confirm("Would you like to continue our session?");
// 	if (yes) {
// 		var responses = prompt("Tell me about your troubles: ","Type your feelings here?");

// 		if (responses) {
// 			alert("I am sorry you are feeling down about that. I know you can't see it ...");
// 			sad = false;
// 		}
// 	} else {
// 		sad = false;
// 	}
// }







// var x = 0;

// do {
// 	console.log(x);
// 	x++;
// } while ( x <= 10);

// while (x <= 10){
// 	// console.log("while");
// 	console.log(x);
// 	x++;
// }








// for (var i = 1; i <= 100; i++) {
// 		if( i % 3 === 0){
// 			if(i % 5 ===0){
// 				console.log("FizzBuzz");
// 			} else {
// 			console.log("Fizz");
// 			}
// 		} else if (i % 5 === 0){
// 			console.log("Buzz");
// 		}
// 		else {
// 			console.log(i);
// 		}
// 	}





//// 30.03
//
//
//








//// 28.03
//
//
//


// for(i = 0; i < 11; i++){
// 	console.log(i);
// }





// var name = prompt("Your name ?").toLowerCase();

// // //// toLowerCase() - radimo dabismo dobili sve u mala slova i na taj nacin izvrsili proveru.

// switch(name){
// 	case "zoran":
// 		document.write("Hello Zole");
// 		break;
// 	case "milan":
// 		document.write("Welcome to Vrsac");
// 		break;
// 	case "dejan":
// 		document.write("Hello Klisa.");
// 		break;
// 	default:
// 		document.write("None of ....");
// 		break;
// }




//// 27.03
//
//
//


// // ///////// ver 3
// var randomNumber = Math.round(Math.random()*15);

// if(randomNumber % 3 === 0 && randomNumber != 0){
// 	if(randomNumber % 5 === 0 ){
// 		document.write("fizzbuzz");
// 	} else {
// 		document.write("fizz");
// 	}
// } else if(randomNumber % 5 === 0 && randomNumber !=0){
// 	document.write("buzz");
// } else {
// 	document.write("<br/>"+randomNumber+"<br/>");
// }




// ///////// ver 2

// var randomNumber = Math.round(Math.random()*15);

// console.log(randomNumber);

// if (randomNumber % 3 ===0 && randomNumber != 0){
// 	document.write("Fizz");
// } else if (randomNumber % 5 === 0 && randomNumber != 0){
// 	document.write("Buzz");
// } else if( randomNumber % 3 === 0 && randomNumber % 5 === 0){
// 	document.write("Fizz Buzz");
// } else {
// 	document.write(randomNumber);
// }

// ///////// ver 1

// var randomNumber = Math.round(Math.random()*5);
// // randomNumber = 0;

// console.log (randomNumber);
// if (randomNumber != 0){
// 	if(randomNumber % 3 === 0){
// 		document.write("Fizz");
// 	} else if( randomNumber % 5 === 0){
// 		document.write("Buzz");
// 	} else {
// 		document.write(randomNumber);
// 	}
// } else {
// 	console.log("Zero...");
// }





// var answer = prompt("What is the capital of Serbia");

// if(answer == "Belgrade"){
// 	console.log("You are correct !!!");
// } else {
// 	console.log("Sorry " + answer + " is not correct.");
// }

// var favoriteAnimal = prompt("What is your favorite animal.");

// if (favoriteAnimal === "cat"){
// 	document.write("Awesome");
// } else if (favoriteAnimal === "dog") {
// 	document.write("Dog's are ok");
// } else if (favoriteAnimal === "oskar"){
// 	document.write("You are my man.");
// } else {
// 	document.write("Yayks !!!!");Oskar
// }

//// 26.03
//
//
//

// var answer = prompt("Glavni grad:");
// if (answer == "Beograd"){
// 	document.write("Tacno tako BGD "+answer);
// } else {
// 	document.write("Zamo mi je "+"taca odgovor je Beograd");
// }








// var name = "Milisca";

// switch (name){
// 	case "Zoran":
// 		document.write("Tacno");
// 		break;
// 	case "Milica":
// 		document.write("Tacno Milica");
// 		break;
// 	default:
// 	document.write("Nothing...");
// }




//// 25.03
//
//
//

// var myFavoriteMovie = "Fargo";

// // document.write(myFavoriteMovie);

// var randomNumber = Math.random()*8;

// console.log(randomNumber);




	// var x = 200;
	// var y = 10;

	// document.write(x / y + "<br/>");
	// document.write(typeof(x / y));

	// console.log(typeof(b));


	// x = 51;

	// do {
	// 	document.write(x + "<br/>");
	// 	x++;
	// } while(x<10);




	// var x = 1;

	// while(x < 15){
	// 	document.write(x+"<br/>");
	// 	x++;
	// }


// // while
	// var x = 1;

	// while(x < 10){
	// 	document.write(x + " apples <br/>");
	// 	x++;
	// }


// // for

	// for (i = 0; i < 10; i+=2) {
	// 	document.write("Print ...<br/>");
	// }


///// SWITCH

// var name = "Zorann";

// switch (name){
// 	case "Zoran":
// 		document.write("Name is Zoran.");
// 		break;
// 	case "Milan":
// 		document.write("Name is Milan");
// 		break;
// 	case "Dejan":
// 		document.write("Name is Dejan");
// 		break;
// 	default:
// 		document.write("Nothing...");
// }








// var first = "Zoran";
// var last = "Ivanovic";

// if( (first=="Zoran") || (last=="Ivanovicc") ){
// 	console.log("Ok");
// }









// var name = "Zoran";
// var lastName = "Ivanovic";

// if(name == "Zorann"){
// 	document.write("Prvi uslov ispunjen.");
// 	if (lastName == "Ivanovicc"){
// 		document.write ("Sve se poklapa");
// 	} else {
// 		document.write("Poklapa se samo ime");

// 	}

// } else {
// 	document.write("Nista se ne poklapa...");
// }





// var blue = 43;
// var red = 29;

// if (blue != 43){
// 	console.log("I love ...");
// } else {
// 	document.write("Other...")
// }


//// 24.03
//
//
//

// let myPet = 'Oskar';
// console.log('I own pet ${myPet}.');
// let myPet = 'Oskar';
// let mySecondPet = 'Laki';
// console.log(`I own pet ${myPet}`);

// document.write("I own pet " + myPet);

// console.log(`I own pet ${myPet} and ${mySecondPet} also.`);




// var number1 = 22;
// var number2 = 22;

// if(number1 >= number2){
// 	document.write("Heloo " + number1);
// } else {
// 	document.write ("Again " + number2);
// }




// var a = 17;
// var broj = a % 3;

// document.write(broj+"<br/>");
// document.write(broj + 2 + "<br/>");
// document.write(broj / 2);

// broj++;
// console.log(broj);

// broj--;
// console.log(broj);

// var ime = "Zoran";
// var prezime = "Ivanovic";

// if ( ( ime == "Zorann") || ( prezime == "Ivanovicc" )){
// 	console.log(ime);
// 	console.log(prezime);
// 	document.write ("Hello !!!!");
// } else {
// 	document.write ("Lose");
// }

// if ((ime == "Zoran") && (prezime == "Ivanovic")){
// 	document.write ("Hello !!!");
// }



// var brojJedan = "Zorann";
// var brojDva = "Ivanovicc";

// if (brojJedan == "Zoran"){
// 	if (brojDva == "Ivanovic"){
// 		document.write ("Odlicno.")
// 	} else {
// 		document.write ("Nije bas odlicno.");
// 	}

// } else {
// 	document.write ("Nevalja, nista.");
// }

// var brojJedan = 1;
// var brojDva = 1;

// if (brojJedan == brojDva){
// 	document.write ("Ovo je TRUE.")
// } else {
// 	document.write ("Ovo je FALSE")
// }



// var brojJedan = 29;
// var brojDva = 28;

// if (brojJedan <= brojDva){
// 	//
// 	document.write ("Ovo je TRUE");
// }

// 	document.write ("Ovo je ipak FALSE.");

// var broj = 25;

// broj *= 24;
// broj /= 2;

// broj -=10;

// document.write (broj);



// var name = "Michel";

// function fun(){
// 	var name = "Lokalna"
// 	document.write(name);
// }

// fun();
// document.write("<br/>"+name);



//// 23.03
//
//
//

// function jedan(){
// 	document.write("Ja sam Zoran ");
// }
// function dva(){
// 	document.write(" i ovo je nesto.")
// }

// function start(){
// 	jedan();
// 	dva();
// }

// start();
