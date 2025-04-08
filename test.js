calculator(5, 6, "/");

function calculator(value1, value2, op) {
  switch (op) {
    case "+":
      console.log(value1 + value2);
      break;
    case "-":
      console.log(value1 - value2);
      break;
    case "*":
      console.log(value1 * value2);
      break;
    case "/":
      console.log(value1 / value2);
      break;
    default:
      console.log("Error");
  }
}
