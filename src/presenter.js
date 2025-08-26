import  saludo from "./Saludador.js";

const form = document.getElementById("saludar-form");
const saludoElemento = document.getElementById("saludo");
const nombreInput = document.getElementById("nombre");
const generoInputs = document.getElementById("genero");
const edadInput = document.getElementById("edad");
const idiomaInput = document.getElementById("idioma");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;
  const genero = generoInputs.value;
  const edad = edadInput.value;
  const idioma = idiomaInput.value;
  saludoElemento.textContent = saludo(nombre,genero,edad,idioma);
});

