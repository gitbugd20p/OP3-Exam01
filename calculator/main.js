function numberValidate() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let operation = document.getElementById("operation").value;
  let result;

  number1 = parseFloat(number1);
  number2 = parseFloat(number2);

  if (isNaN(number1) || isNaN(number2)) {
    document.getElementById("showResult").innerHTML =
      '<div class="alert alert-danger">Please enter valid numbers.</div>';
    return;
  } else {
    // console.log(`X: ${x} and Y: ${y}`);
    if (operation == "+") {
      result = number1 + number2;
    } else if (operation == "-") {
      result = number1 - number2;
    } else if (operation == "*") {
      result = number1 * number2;
    } else if (operation == "/") {
      if (number2 == 0) {
        document.getElementById("showResult").innerHTML =
          '<div class="alert alert-danger"> Can not divide by zero.</div>';
        return;
      } else {
        result = number1 / number2;
      }
    }

    document.getElementById(
      "showResult"
    ).innerHTML = `<div class="alert alert-success" role="alert">Result: ${result}</div>`;
  }
}