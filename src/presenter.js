import fizzBizz from "./fizzbizz.js";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const number = Number.parseInt(first.value);

  div.innerHTML = "<p>" + fizzBizz(number) + "</p>";
});