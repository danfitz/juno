const add = require("./add");

test("Adds 1 and 2 to equal 3", () => {
  const output = add(1, 2);
  expect(output).toBe(3);
});