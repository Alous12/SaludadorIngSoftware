import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  const accion = event.submitter.id; 

  if (accion === "sumar-button") {
    div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
  } else if (accion === "multiplicar-button") {
    div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
  }
});

