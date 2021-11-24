class Calculator {

    add(number1, number2) {
        if (typeof number1 === "object" || typeof number2 === "object") {
            throw new Error();
        }
        return number1 + number2;
    }
}

// The following is required for automated testing:
if (typeof module !== "undefined") {
  module.exports = Calculator;
}
