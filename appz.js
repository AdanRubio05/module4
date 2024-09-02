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
let greeting ;

if (hour < 17) {
    greeting = "Howdy" ;
} else {
    greeting = "Evenin'" ;
}

document.getElementById("hour").innerHTML = "Oh, " + greeting + " Stranger!" ;

let day ;
const light = new Date().getHours() ;
let set ;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday" ;
        break ;
    case 1:
        day = "Monday" ;
        break ;
    case 2:
        day = "Tuesday" ;
        break ;
    case 3:
        day = "Wednesday" ;
        break ;
    case 4:
        day = "Thursday"
        break ;
    case 5:
        day = "Friday"
        break ;
    case 6:
        day = "Satuday"
        break ;
}

if (light < 17) {
    set = "day" ;
} else {
    set = "night" ;
}

document.getElementById("comp").innerHTML =
"Nice " + set + " for a " + day + " , eh?" ;