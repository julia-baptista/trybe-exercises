/***************************************************
// Testando em pequenos passos

O TDD: Test Driven Development , em tradução livre, o desenvolvimento orientado a testes ,

O desenvolvimento orientado a testes é um processo cíclico que pode ser descrito em três etapas

Teste falha --> teste passa --> Refatorar

 ***************************************************/



/***************************************************
 
Destrinchando cada etapa, o TDD consiste em:
Escrever um teste que cubra a função que você pretende implementar antes mesmo de executá-la. Este teste irá falhar - afinal, a sua função ainda não foi declarada. Você pode começar do teste mais elementar possível para esse cenário, como verificar se a função que você irá criar existe:

 ***************************************************/

const assert = require('assert');
assert.strictEqual(typeof myFunction, 'function');


/***************************************************
 
1) Implementar apenas o necessário para que o teste passe. No caso do exemplo anterior, você só precisaria declarar a função para passar o teste.

2) Refatorar o código para que ele esteja bem escrito e fácil de se entender. O pulo do gato nessa etapa é que você tem um teste já implementado que irá falhar caso você quebre algo ao refatorar o seu código.

3) Repetir! Afinal de contas, o desenvolvimento orientado a testes é um ciclo. Volte a etapa 1 e repita esse processo até que todas as funcionalidades da sua função sejam implementadas.

Além de ser útil para testar funções puras, outro exemplo prático em que o desenvolvimento orientado a testes pode ser útil é consertar bugs. Os testes ajudam a quebrar problemas complexos em partes menores que podem ser analisadas mais facilmente. Assim, você poderá focar em uma regra de negócio específica sem medo de quebrar alguma outra funcionalidade.

 ***************************************************/





