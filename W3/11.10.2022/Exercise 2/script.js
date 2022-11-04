/* 

Odd / even reporter
Prompt for a number between 0 and 20.
Check if the given number is even or odd.
Report the result to the screen (e.g. "2 is even").

*/

let getNumber = prompt("Please enter a number between 0 - 20");

if (getNumber<0 || getNumber>20) {
    window.alert ("Please enter a number between 0-20")
} else if (getNumber%2==0) {
    window.alert("Your number " + getNumber + " is an even number");
} else {
    window.alert("Your number " + getNumber + " is an odd number");
}