const service = require('./service');


describe('Testando implementações e restaurações', () => {

  test('Implementações da primeira função', () => {
    
    const first = jest
      .spyOn(service, 'toUppercase')
      .mockImplementation(a => a.toLowerCase());

    expect(first('UPPERCASE')).toBe('uppercase');
    expect(first).toHaveBeenCalled();
    expect(fisrt).toHaveBeenCalledTimes(1);
    expect(fisrt).toHaveBeenCalledWith('UPPERCASE');

  })

  test('Restaurando a primeira função', () => {
    service.toUppercase.mockRestore();

    expect(service.toUppercase('uppercase')).toBe('UPPERCASE');
    expect(service.toUppercase).toHaveBeenCalled();
    expect(service.toUppercase).toHaveBeenCalledTimes(1);
    expect(service.toUppercase).toHaveBeenCalledWith('uppercase');

  })

});


/*************************************************
Gabarito:

const service = require("./service");

describe("testando implementações", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    const first = jest
      .spyOn(service, "firstFunction")
      .mockImplementation(a => a.toLowerCase());

    expect(first("UPPERCASE")).toBe("uppercase");
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith("UPPERCASE");

    service.firstFunction.mockRestore();

    expect(service.firstFunction("lowercase")).toBe("LOWERCASE");
  });
});

*************************************************/