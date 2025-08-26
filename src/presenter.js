import  saludo from "./Saludador.js";

const form = document.getElementById("saludar-form");
const saludoElemento = document.getElementById("saludo");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  saludoElemento.textContent = saludo();
});