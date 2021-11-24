const greeting = require("../src/greeting");

describe("greeting", () => {
  test("it exists", () => {
    expect(greeting).not.toBeUndefined();
  });

  test("it receives no params", () => {
    expect(greeting.length).toBe(0);
  });

  test("it greets all Ironhackers", () => {
    expect(greeting()).toBe("Hello, Ironhackers!");
  });
});
