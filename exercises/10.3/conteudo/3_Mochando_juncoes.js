/*********************************************************
// jest.fn()

O método jest.fn() configura-se como a forma mais simples de se mockar algo: ele transforma uma função em uma simulação. Ou seja: ao mockar uma função com o jest.fn() e fazer a chamada da mesma, o comportamento definido no mock será chamado, em vez da função original.

Ele é muito útil para casos como o do projeto Adivinhe a cor , em que precisamos ter controle das cores geradas aleatoriamente para testar tudo corretamente.

Imagine que a função geradora de cor aleatória seja essa e esteja no arquivo service.js

*********************************************************/