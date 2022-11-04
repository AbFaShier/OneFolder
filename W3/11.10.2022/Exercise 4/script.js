/* 

Multiplication tables
Prompt for a number between 0 and 10.
Multiply the given number by 9.
Log the result (e.g. "2 * 9 = 18").

 */

let getNumber = prompt("Please enter a number between 0 - 10");
let number = parseInt(getNumber);

if (isNaN(number)){
    window.alert("Please do not enter text. Enter a number between 0 - 10.");
} else

if (getNumber<0 || getNumber>10) {
    window.alert ("Please enter a number between 0-10");
} else {
    window.alert (getNumber + " * 9 = " + (getNumber*9));
}