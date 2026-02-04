function addition(){

    // .value was not covered in lecture, but I found that not using it doesn't properly obtain the data
    // from the input boxes, and is thus necessary to process the numbers inputted (discovered via Claude AI)
    let num1 = Number(document.getElementById("first-number").value);
    let num2 = Number(document.getElementById("second-number").value);

    // addition of the two numbers
    let result = num1 + num2;

    // then we display the result
    document.getElementById("output").innerHTML = String(result);

    // we have to apply red styling if the output is negative
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    }
    else {
        // this defaults the current color
        document.getElementById("output").style.color = ""
    }
}

function subtraction(){
    // obtain numbers
    let num1 = Number(document.getElementById("first-number").value);
    let num2 = Number(document.getElementById("second-number").value);

    // subtraction of the two numbers
    let result = num1 - num2;

    // display the result on HTML
    document.getElementById("output").innerHTML = String(result);

    // we have to apply red styling if the output is negative
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    }
    else {
        // this defaults the current color
        document.getElementById("output").style.color = ""
    }
}

function multiplication(){
    // obtain two numbers
    let num1 = Number(document.getElementById("first-number").value);
    let num2 = Number(document.getElementById("second-number").value);

    // multiplication of the two numbers
    let result = num1 * num2;

    // then we display the result
    document.getElementById("output").innerHTML = String(result);

    // we have to apply red styling if the output is negative
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    }
    else {
        // this defaults the current color
        document.getElementById("output").style.color = ""
    }
}

function division(){
    // obtain both numbers
    let num1 = Number(document.getElementById("first-number").value);
    let num2 = Number(document.getElementById("second-number").value);

    // addition of the two numbers
    let result = num1 / num2;

    // then we display the result
    document.getElementById("output").innerHTML = String(result);

    // we have to apply red styling if the output is negative
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    }
    else {
        // this defaults the current color
        document.getElementById("output").style.color = ""
    }
}

function power() {
    let base = Number(document.getElementById("first-number").value);
    let exponent = Number(document.getElementById("second-number").value);

    let result = 1;

    // for the power function, we have to use a for loop as mentioned in assignment details
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }

    // then display
    document.getElementById("output").innerHTML = String(result);

    // apply red styling if negative
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    }
    else {
        // defaults
        document.getElementById("output").style.color = "";
    }
}

function clear_boxes() {
    // clear the input boxes by setting their values to ""
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";

    // clear the output as well
    document.getElementById("output").innerHTML = "";

    // and make sure text is default for the output
    document.getElementById("output").style.color = "";
}