let currentAge = prompt("What is your age?");
let retiredAge = prompt("At what age would you like to retire?");

currentAge=parseInt(currentAge);
retiredAge=parseInt(retiredAge);

let remainingYear = retiredAge-currentAge;
let currentYear = new Date().getFullYear();
let retiredYear = currentYear+remainingYear;

window.alert(`You have ${remainingYear} years left until you can retire. It's ${currentYear}, so you can retire in ${retiredYear}.`);

window.alert("You have " + remainingYear + " years left until you can retire. Its " + currentYear + ", so you can reitre in " + retiredYear + ".");