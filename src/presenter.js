import  saludo from "./Saludador.js";

const form = document.getElementById("saludar-form");
const saludoElemento = document.getElementById("saludo");
const nombreInput = document.getElementById("nombre");
const generoInputs = document.getElementById("genero");
const edadInput = document.getElementById("edad");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;
  const genero = generoInputs.value;
  const edad = edadInput.value;
  saludoElemento.textContent = saludo(nombre,genero,edad);
});

