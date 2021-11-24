const Calculator = require("../src/calculator");

describe("Calculator", () => {
  describe("class", () => {
    test("exists", () => {
      expect(Calculator).not.toBeNull();
    });

    test("receives no parameters", () => {
      expect(Calculator.length).toBe(0);
    });
  });

  describe("add", () => {
    const calculator = new Calculator();

    test("exists", () => {
      expect(calculator.add).not.toBeUndefined();
    });

    test("it receives two parameters", () => {
      expect(calculator.add.length).toBe(2);
    });

    test("it returns the sum of the two numbers it receives", () => {
      expect(calculator.add(0, 0)).toBe(0);
      expect(calculator.add(1, 0)).toBe(1);
      expect(calculator.add(0, 1)).toBe(1);
      expect(calculator.add(-1, 1)).toBe(0);
      expect(calculator.add(1, -1)).toBe(0);
      expect(calculator.add(5, 5)).toBe(10);
    });

    test("it throws error if parameters are not numbers", () => {
      expect(() => {
        calculator.add([], 1);
      }).toThrow();
      expect(() => {
        calculator.add(1, []);
      }).toThrow();
    });
  });
});
