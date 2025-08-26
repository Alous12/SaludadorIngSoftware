
function saludo(nombre,genero,edad) {
    const hora = new Date().getHours();
    let texto= "";
    if(genero === "M" && edad>30)
    {
        nombre = "Sr. " + nombre;
    }
    else{ 
        if(genero === "M" && edad<=30)
        {
            nombre = "Joven " + nombre;
        }
        else{
            if(genero === "F" && edad>30)
            {
                nombre = "Sra. " + nombre;
            }
            else
            {
                if(genero === "F" && edad<=30)
                {
                    nombre = "Señorita " + nombre;
                }
            }
        }
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