let number1 = prompt("Please enter the first number");
let number2 = prompt("Please enter the second number");

number1=parseInt(number1);
number2=parseInt(number2);

if (number1>number2){
    window.alert(`The greater number of ${number1} and ${number2} is ${number1}`);
    window.alert(`The smaller number of ${number1} and ${number2} is ${number2}`);
} else {
    window.alert(`The greater number of ${number1} and ${number2} is ${number2}`);
    window.alert(`The smaller number of ${number1} and ${number2} is ${number1}`);
}