/*

Translate days of the week
For each single day of the week log the translated output
e.g. if it is Monday, log "Montag" and so on
Choose any language you like
Try different ways: is it possible with if or switch?

*/

let enteredWeekday = prompt ("Please enter a weekday to translate it to German.");
let germanTranslated = "";
switch (enteredWeekday){
    case 'monday':
    case 'Monday': germanTranslated = "Montag";
    window.alert("The Translation of " + enteredWeekday + " in German is " + germanTranslated);
        break;
    case 'tuesday':
    case 'Tuesday': germanTranslated = "Dienstag";
    window.alert("The Translation of " + enteredWeekday + " in German is " + germanTranslated);
        break;
    case 'wednesday':
    case 'Wednesday': germanTranslated = "Mittwoch";
    window.alert("The Translation of " + enteredWeekday + " in German is " + germanTranslated);
        break;
    case 'thursday':
    case 'Thursday': germanTranslated = "Donnerstag";
    window.alert("The Translation of " + enteredWeekday + " in German is " + germanTranslated);
        break;
    case 'friday':
    case 'Friday': germanTranslated = "Freitag";
    window.alert("The Translation of " + enteredWeekday + " in German is " + germanTranslated);
    break;
    default: window.alert("Please input a valid weekday or check your spelling");
}