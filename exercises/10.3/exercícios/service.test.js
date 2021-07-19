const service = require('./service');
jest.mock('./service'); // --> Questão 4

// 1. Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

test('testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1); 
});


// 2.Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

test('testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros', () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(service.randomNumber(40,2)).toBe(20);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(40, 2);
});

// 3. Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

describe('Testando implementações', () => {

  test('mockando função para receber 3 parâmetros e retornar sua multiplicação', ()=> {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.randomNumber(2, 2, 3)).toBe(12);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2, 2, 3);

  });

  test('mockando função que recebe um parâmetro e retorna seu dobro', ()=> {
    service.randomNumber.mockReset();

    // expect(service.randomNumber).toHaveBeenCalledTimes(0);  -- > Gabarito

    service.randomNumber.mockImplementation(a => a * 2);

    expect(service.randomNumber(2)).toBe(4);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2);
  });
  
})


// 4. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.


describe('Testando implementações', () => {

  test('Implementações da primeira função', () => {
    service.toUppercase.mockImplementation(str => str.toLowerCase());

    expect(service.toUppercase('UPPERCASE')).toBe('uppercase');
    expect(service.toUppercase).toHaveBeenCalled();
    expect(service.toUppercase).toHaveBeenCalledTimes(1);
    expect(service.toUppercase).toHaveBeenCalledWith('UPPERCASE');

  })

  test('Implementações da segunda função', () => {
    service.firstLetter.mockImplementation(str => {
      const length = str.length - 1;
      return str.charAt(length);
    });

    expect(service.firstLetter('Teste')).toBe('e');
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter).toHaveBeenCalledWith('Teste');
  })

  test('Implementações da terceira função', () => {
    service.concatStrings.mockImplementation((a, b, c) => a.concat(b, c));

    expect(service.concatStrings('a', 'b', 'c')).toBe('abc');
    expect(service.concatStrings).toHaveBeenCalled();
    expect(service.concatStrings).toHaveBeenCalledTimes(1);
    expect(service.concatStrings).toHaveBeenCalledWith('a', 'b', 'c');
  })

});

