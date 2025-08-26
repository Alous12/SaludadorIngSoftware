import saludo from "./Saludador";

    describe("Saludador", () => {

    /*it("debería retornar 'Hola'", () => {
        expect(saludo()).toBe("Hola");
    });*/

    /*it("deberia retornar un saludo con nombre", () => {
        const nombre = "Alejandro";
        expect(saludo(nombre)).toBe("Hola Alejandro");
    });*/

    it("deberia retornar un saludo dependiendo la hora", () => {
        expect(saludo("Alejandro")).toBe("Hola Buenas tardes Alejandro");
    });

    
});