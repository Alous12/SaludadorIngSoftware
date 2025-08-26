
function saludo(nombre,genero) {
    const hora = new Date().getHours();
    let texto= "";
    if(genero === "M"){
        nombre = "Sr. " + nombre;
    }
    else if(genero === "F"){
        nombre = "Sra. " + nombre;
    }
    
    if(hora < 12 && hora >= 6){
        texto = "Hola Buenos días " + nombre;
    }
    else if(hora < 20){
        texto = "Hola Buenas tardes " + nombre;
    }
    else{
        texto = "Hola Buenas noches " + nombre;
    }
    return texto;
}

export default saludo;