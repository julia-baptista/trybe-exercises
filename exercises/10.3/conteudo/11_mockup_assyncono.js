// Mock e funções assíncronas

// --> mockResolvedValue(value) 
// --> mockRejectedValue(value)
// --> mockResolvedValueOnce(value)
// --> mockRejectedValueOnce(value)

/******************************************************************************
Os testes que dependem de requisições são os mais beneficiados com o uso do mock . Excluem problemáticas como falha na API, instabilidade de internet e tamanho de retorno.

Requisições para APIs podem levar vários segundos para serem realizadas, descartando todas as problemáticas listadas acima. Imagine que você precise fazer 15 testes que dependem dessas requisições. Se torna inviável fazer 15 requisições, pois pode aumentar muito o tempo para a realização de todos os testes, além de sobrecarregar a API com chamadas cada vez que for fazer um teste!

Da mesma maneira que podemos mockar funções síncronas, podemos fazê-lo com as assícronas. A diferença se dá nas implementações.


****************************************************************************/
