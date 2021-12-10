var number1 = 0;
var number2 = 0;
function onFirstButtonClicked(action) {
    action == "plus" ? ++number1 : --number1;
    document.getElementById("number1").innerHTML = number1;
    sum();
}

function onSecondButtonClicked(action) {
    action == "plus" ? ++number2 : --number2;
    document.getElementById("number2").innerHTML = number2;
    sum();
}

function sum() {
    document.getElementById("sum").innerHTML = "sum: " + (number1 + number2);
}