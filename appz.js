let firstName = 'Adan' ;
let lastName = 'Rubio' ;

let fullName = firstName + " " + lastName ;

document.getElementById("string").innerHTML = "I, " + fullName + " created this sentence in JS." ;

let fruit = "Apple" ;
let letter = fruit.charAt(4) ;

document.getElementById("answer1").innerHTML = letter ;

document.getElementById("order").innerHTML =
    parseInt("-3") + ", " +
    parseInt("-2.46") + ", " +
    parseInt("-1.00875") + ", " +
    parseInt("0") + ", " +
    parseInt("1") + ", " +
    parseInt("2.0467") + ", " +
    parseInt("3.0") + " !" ;

const hour = new Date().getHours() ;
let greeting;

if (hour < 16) {
    greeting = "Howdy" ;
} else {
    greeting = "Evenin'" ;
}

document.getElementById("hour").innerHTML = "Oh, " + greeting + "!" ;