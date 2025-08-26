import  saludo from "./Saludador.js";

const form = document.getElementById("saludar-form");
const saludoElemento = document.getElementById("saludo");
const nombreInput = document.getElementById("nombre");
const generoInputs = document.getElementById("genero");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;
  const genero = generoInputs.value;
  saludoElemento.textContent = saludo(nombre,genero);
});

