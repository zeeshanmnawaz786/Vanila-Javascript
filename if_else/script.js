function Number(num1, num2, sign) {
  if (sign == "+") {
    return num1 + num2;
  } else if (sign == "-") {
    return num1 - num2;
  } else if (sign == "*") {
    return num1 * num2;
  } else if (sign == "/") {
    return num1 / num2;
  } else {
    console.log("please enter a valid operator");
  }
}
