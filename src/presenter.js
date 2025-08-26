import  saludo from "./Saludador.js";

const form = document.getElementById("saludar-form");
const saludoElemento = document.getElementById("saludo");
const nombreInput = document.getElementById("nombre");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;
  saludoElemento.textContent = saludo(nombre);
});