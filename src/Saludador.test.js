import saludo from "./Saludador";

    describe("Saludador", () => {

    /*it("debería retornar 'Hola'", () => {
        expect(saludo()).toBe("Hola");
    });*/

    /*it("deberia retornar un saludo con nombre", () => {
        const nombre = "Alejandro";
        expect(saludo(nombre)).toBe("Hola Alejandro");
    });*/

    /*it("deberia retornar un saludo dependiendo la hora", () => {
        expect(saludo("Alejandro")).toBe("Hola Buenas tardes Alejandro");
    });*/

    /*it("deberia retornar un saludo dependiendo su genero", () => {
        expect(saludo("Alejandro", "M")).toBe("Hola Buenas tardes Sr. Alejandro");
        expect(saludo("Maria", "F")).toBe("Hola Buenas tardes Sra. Maria");
    });*/

    /*it("deberia retornar un saludo dependiendo su edad", () => {
        expect(saludo("Alejandro", "M", 31)).toBe("Hola Buenas tardes Sr. Alejandro");
        expect(saludo("Luciana", "F", 40)).toBe("Hola Buenas tardes Sra. Luciana");
        expect(saludo("Alejandro", "M", 10)).toBe("Hola Buenas tardes Joven Alejandro");
        expect(saludo("Ana", "F", 8)).toBe("Hola Buenas tardes Señorita Ana");
    });*/

    it("deberia retornar un saludo en diferentes idiomas", () => {
        expect(saludo("Alejandro", "M", 31, "es")).toBe("Hola Buenas tardes Sr. Alejandro");
        expect(saludo("Luciana", "F", 40, "es")).toBe("Hola Buenas tardes Sra. Luciana");
        expect(saludo("Alejandro", "M", 10, "es")).toBe("Hola Buenas tardes Joven Alejandro");
        expect(saludo("Ana", "F", 8, "es")).toBe("Hola Buenas tardes Señorita Ana");

        expect(saludo("Alexander", "M", 31, "en")).toBe("Hello Good afternoon Mr. Alexander");
        expect(saludo("Lucy", "F", 40, "en")).toBe("Hello Good afternoon Mrs. Lucy");
        expect(saludo("Alexander", "M", 10, "en")).toBe("Hello Good afternoon Young Alexander");
        expect(saludo("Anna", "F", 8, "en")).toBe("Hello Good afternoon Miss Anna");

    });
});