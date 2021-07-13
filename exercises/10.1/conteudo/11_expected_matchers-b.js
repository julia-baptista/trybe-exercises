/*****************************************************************
- Valores booleanos
- Números
- strings
- Arrays
- Objetos
****************************************************************/


/*****************************************************************
// Valores booleanos

null , undefined e false são valores falsy . Isso significa que são tratados como false sempre que se espera um valor booleano, como em condicionais. Às vezes, porém, é preciso distinguir entre eles. Jest fornece matchers específicos para cada um. Leia mais sobre eles na documentação do Jest .

https://jestjs.io/docs/using-matchers#truthiness

****************************************************************/


/*****************************************************************
// Números

Há matchers para as principais formas de comparar números. Leia aqui sobre esses matchers

https://jestjs.io/pt-BR/docs/using-matchers#n%C3%BAmeros

****************************************************************/

/*****************************************************************
// Strings

Para comparar string com expressões regulares, utilize o matcher toMatch:

****************************************************************/

/*****************************************************************
// Arrays

Você pode verificar se um array contém um item em particular utilizando toContain.

Para verificar que um item possui uma estrutura mais complexa, utilize
toContainEqual. 

toHaveLength permite facilmente verificar o tamanho de um array ou de uma string.

****************************************************************/

/*****************************************************************
// Objetos

É bastante comum testar se um objeto possui uma propriedade específica. O matcher toHaveProperty é ideal para esses casos.

****************************************************************/


