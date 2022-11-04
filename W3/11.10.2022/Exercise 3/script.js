/* 

Odd / even reporter 2.0
Write a for loop that will iterate from 0 to 20.
For each iteration, it will check if the current number is even or odd.
Report the result to the screen (e.g. "2 is even").
 Let's try all different types of loop

 */

for (let oeNumber = 0 ; oeNumber<11 ; oeNumber++ ) {
    if (oeNumber%2==0) {
        document.write(oeNumber + " is even <br>");
    } else  {
        document.write(oeNumber + " is odd <br>");
    }
}