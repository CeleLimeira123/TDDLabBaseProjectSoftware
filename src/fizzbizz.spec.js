import fizzBizz from "./fizzbizz.js";

describe("FizzBizz", () => {
  it("deberia generar el mismo si no sigue una regla de FizzBizz", () => {
    expect(fizzBizz(2)).toEqual(2);
  });

  it("deberia devolver otro numero que no siga una regla de FizzBizz", () => {
    expect(fizzBizz(1)).toEqual(1);
  });

  it("deberia devolver Fizz si el numero es 3", () => {
    expect(fizzBizz(3)).toEqual("Fizz");
  });

  it("deberia devolver fizz si el numero es multiplo de 3", () => {
    expect(fizzBizz(6)).toEqual("Fizz");
  });

  it("deberia devolver Buzz si el numero es 5", () => {
    expect(fizzBizz(5)).toEqual("Buzz");
  });

  it("deberia devolver Buzz si el numero es multiplo de 5", () => {
    expect(fizzBizz(25)).toEqual("Buzz");
  });

  it("deberia devolver FizzBuzz si el numero es 15", () => {
    expect(fizzBizz(15)).toEqual("FizzBuzz");
  });

  it("deberia devolver FizzBuzz si el numero es multiplo de 3 y 5", () => {
    expect(fizzBizz(30)).toEqual("FizzBuzz");
  });
});