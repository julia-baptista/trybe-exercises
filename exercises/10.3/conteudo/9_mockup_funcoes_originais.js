/**********************************************************
// Trabalhando com mock e funções originais

--> jest.spyOn()

Você já aprendeu que ter controle sobre uma função e usar matchers como o toHaveBeenCalled são ferramentas essenciais para quem desenvolve. Mas há casos em que é útil verificar os efeitos colaterais de uma função, como em uma alteração de página. Como fazer isso se, ao se mockar uma função, ela perde sua implementação original, mas, sem mockar , não podemos testá-la com o matcher?

O jest.spyOn() é capaz de resolver esse problema. Ele "espia" a chamada da função simulada, enquanto deixa a implementação original ativa.

*********************************************************/

const math = require('./7_math');

test("#somar", () => {
  // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
  const mockSomar = jest.spyOn(math, "somar");

  mockSomar(1, 2);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(1, 2);
  expect(mockSomar(1, 2)).resolves.toBe(3);
});

/**************************************************************************
Podemos notar no exemplo que a simulação da função é criada, mas sua implementação é mantida, e a soma realizada.

Há também como limpar, resetar ou restaurar mocks . Existem três métodos capazes de fazer isso: (vide próximo arquivo)
**************************************************************************/

