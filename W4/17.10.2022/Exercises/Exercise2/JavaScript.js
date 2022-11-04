function selectFunction (lang){
    let trans ="";
    if (lang=="es"){
                trans="Hola Mundo";
            } else if (lang=="de") {
                trans="Hallo Welt";
            } else if (lang=="en") {
                trans="Hello World";
            } else {
                trans="Please enter es, de or en";
            } return trans;
}

let enteredLanguage = prompt("Please select your langauge");
window.alert(selectFunction(enteredLanguage));