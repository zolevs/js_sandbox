//// 22.04
//
//
//

var ourDog = {
	"name" : "Oskar",
	"legs" : 4,
	"tails" : 1,
	"friends" : ["everything"]
}

ourDog.name = "Laki";
ourDog["name"] = "Oskar";
ourDog.brother = "Laki";
ourDog["brother"] = "Laki";

console.log(ourDog);

delete ourDog.friends;

console.log(ourDog);



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
