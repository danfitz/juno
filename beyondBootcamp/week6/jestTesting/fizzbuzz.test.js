const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  it("should return an output", () => {
    const output = fizzbuzz(1);
    expect(output).toBe(1);
  });
  
  it("should return fizz if the number is a multiple of 3", () => {
    const output = fizzbuzz(3);
    const output2 = fizzbuzz(6);
    expect(output).toBe("fizz");
    expect(output2).toBe("fizz");
  });
  
  it("should return buzz if the number is a multiple of 5", () => {
    const output = fizzbuzz(5);
    const output2 = fizzbuzz(10);
    expect(output).toBe("buzz");
    expect(output2).toBe("buzz");
  });

  it("should return fizzbuzz if the number is a multiple of 3 AND 5", () => {
    const output = fizzbuzz(15);
    const output2 = fizzbuzz(30);
    expect(output).toBe("fizzbuzz");
    expect(output2).toBe("fizzbuzz");
  });
});