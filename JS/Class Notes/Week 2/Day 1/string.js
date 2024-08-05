///////////////////////////////////////////////Welcome To String///////////////////////////////
///////////////////////////////////////////primitive data type/////////////////////////////

//three different kinds of strings 
let firstName='Kelebet'  //single string
let lastName="Engida"      //double string 
let middleName=`Javascript` //literal string 

//concatinating 

let inroduction="My name is" + " "+ firstName+ " " + lastName+ " "+middleName+"."
//console.log(inroduction)

let faveTeam="Dallas CowBoys";
console.log(faveTeam.length)

let teamColor="Blue & grey";
let teaSymbol="star";

let carolsTeam="My favorite team is " + faveTeam + " and their color is "+ teamColor +"."

///////////////////Escape sequence characters////////////////////////

//     \n: new line
//     \t: Tab, means 8 spaces
//     \\: Back slash
//     \': Single quote (')
//     \": Double quote (")

let paragraph="\tThroughout the course, you will \'embark on a journey to understand the core principles and methodologies behind data analytics. \n By delving into statistical techniques, you will learn how to effectively analyze and interpret data, enabling you to draw meaningful insights and make informed business decisions. You will also explore financial forecasting techniques to predict future trends and gain a competitive edge in financial analysis."
// console.log(paragraph)


///////////////////////////////////String Methods ///////////////////////////////



// let js="Javascript";
// .length counts number of char
// console.log(js.length)
// console.log(js.toUpperCase())
///////accsesing the character P in my JS string 
//The way to accses characters in my string is using the index value. 
//ie:   "JavaScript"
/////////0123456789///////

// console.log(js[8])
// console.log(js.length-1)




////ascr
// let js="Javascript";
////////0123456789///
console.log(js.slice(3,7))
////ascr
let js="Javascript";
////////0123456789///



// ///////////////////////////Changing Data Type (Casting)/////////////////////////////////////
// Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.
//////////////////////////////// String to Int
// We can convert string number to a number. Any number inside a quote is a string number. An example of a string number: '10', '5', etc. We can convert string to number using the following methods:

// parseInt()
// Number()
// Plus sign(+)
// let num = '10'
// let numInt = parseInt(num)
// console.log(numInt) // 10
// let num = '10'
// let numInt = Number(num)

// console.log(numInt) // 10
// let num = '10'
// let numInt = +num

// console.log(numInt) // 10
///////////////////////String to Float
// We can convert string float number to a float number. Any float number inside a quote is a string float number. An example of a string float number: '9.81', '3.14', '1.44', etc. We can convert string float to number using the following methods:

// parseFloat()
// Number()
// Plus sign(+)
// let num = '9.81'
// let numFloat = parseFloat(num)

// console.log(numFloat) // 9.81
// let num = '9.81'
// let numFloat = Number(num)

// console.log(numFloat) // 9.81
// let num = '9.81'
// let numFloat = +num

// console.log(numFloat) // 9.81
//////////////// Float to Int
// We can convert float numbers to integers. We use the following method to convert float to int:

// parseInt()
// let num = 9.81
// let numInt = parseInt(num)

// console.log(numInt) // 9