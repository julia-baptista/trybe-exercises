/******************************************************************
// O bloco describe

A função describe cria um bloco para agrupar vários testes. Isso é útil para melhorar a organização dos seus testes. Você pode utilizar describe , por exemplo, para separar testes de funções diferentes em um mesmo arquivo, ou para agrupar testes relacionados dentro de uma função complexa que requer muitos testes. É possível aninhar blocos describe arbitrariamente. Dentro de cada bloco, qualquer declaração de variáveis ou funções é local a este bloco. Leia os exemplos na documentação do Jest para fixar.

Documentação do Jest:
https://jestjs.io/pt-BR/docs/api#describename-fn

******************************************************************/

/*************************************************************************
// describe(name, fn)

describe(name, fn) cria um bloco que agrupa vários testes relacionados. Por exemplo, se você tiver um objeto myBeverage que deve ser delicioso, mas não azedo, você pode testá-lo com:



const myBeverage = {
  delicious: true,
  sour: false,
};

describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});

Isso não é necessário - você pode escrever os blocos de teste diretamente em nível superior. Mas isso pode ser útil se preferir que os seus testes sejam organizados em grupos.

**************************************************************************/





