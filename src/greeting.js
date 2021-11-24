function greeting() {
  return "Hello, Ironhackers!";
}

// The following is required for automated testing:
if (typeof module !== "undefined") {
  module.exports = greeting;
}
