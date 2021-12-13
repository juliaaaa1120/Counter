function onFirstButtonClicked(action) {
    var number1 = parseInt(document.getElementById("number1").innerHTML);
    action == "plus" ? ++number1 : --number1;
    document.getElementById("number1").innerHTML = number1.toString();
    sum();
}

function onSecondButtonClicked(action) {
    var number2 = parseInt(document.getElementById("number2").innerHTML);
    action == "plus" ? ++number2 : --number2;
    document.getElementById("number2").innerHTML = number2.toString();
    sum();
}

function sum() {
    var sum = parseInt(document.getElementById("number1").innerHTML) + parseInt(document.getElementById("number2").innerHTML);
    document.getElementById("sum").innerHTML = "sum: " + sum.toString();
}