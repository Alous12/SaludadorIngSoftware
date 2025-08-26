import saludo from "./Saludador";

describe("Saludador", () => {
  it("debería retornar 'Hola'", () => {
    expect(saludo()).toBe("Hola");
  });
});