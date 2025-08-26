const textos = {
  es: {
    saludo: "Hola",
    dia: "Buenos días",
    tarde: "Buenas tardes",
    noche: "Buenas noches",
    sr: "Sr.",
    sra: "Sra.",
    joven: "Joven",
    senorita: "Señorita"
  },
  en: {
    saludo: "Hello",
    dia: "Good morning",
    tarde: "Good afternoon",
    noche: "Good evening",
    sr: "Mr.",
    sra: "Mrs.",
    joven: "Young",
    senorita: "Miss"
  }
};

function saludo(nombre, genero, edad, idioma) {
  const hora = new Date().getHours();
  const saludoIdioma = textos[idioma];
  let nombreCompleto = nombre;

  if (genero === "M" && edad > 30) {
    nombreCompleto = `${saludoIdioma.sr} ${nombre}`;
  } else if (genero === "M" && edad <= 30) {
    nombreCompleto = `${saludoIdioma.joven} ${nombre}`;
  } else if (genero === "F" && edad > 30) {
    nombreCompleto = `${saludoIdioma.sra} ${nombre}`;
  } else if (genero === "F" && edad <= 30) {
    nombreCompleto = `${saludoIdioma.senorita} ${nombre}`;
  }

  let tiempo = "";
  if (hora < 12 && hora >= 6) {
    tiempo = saludoIdioma.dia;
  } else if (hora < 20) {
    tiempo = saludoIdioma.tarde;
  } else {
    tiempo = saludoIdioma.noche;
  }

  return `${saludoIdioma.saludo} ${tiempo} ${nombreCompleto}`;
}

export default saludo;