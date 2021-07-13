/*********************************************************************
Por que utilizar um framework de testes?

1. Sua aplicação terá várias funções, provavelmente distribuídas por vários arquivos. Colocar todos os testes em um único arquivo torna-se impraticável rapidamente. Não é possível saber onde começam e onde terminam os testes de uma função. Mesmo em uma função mais complexa, você pode querer separar e agrupar testes relacionados;

2. Node.js só executa um arquivo por vez, com o comando node <nome_do_arquivo> . Se há vários arquivos de teste, é preciso executar um por vez ou escrever um script shell para executar todos os arquivos;

3. Você sempre precisa executar todos os testes de um arquivo. Não há como executar apenas um subgrupo dos testes presentes no arquivo;

4. Sempre que um teste falha, a execução é interrompida imediatamente. Isso dificulta saber se os testes posteriores estão corretos, necessitando garantir que todos os testes anteriores estejam corretos;

5. Vários testes podem requerer que os mesmos passos sejam executados antes ou após a execução, resultando em muita duplicação;

6. Para pular ou desabilitar um teste falhando, é preciso removê-lo ou comentá-lo;

7. Não há informações sobre a cobertura de testes. Ou seja, quais partes do código estão sendo estressadas pelos testes e quais não estão;

8. Para o mercado de trabalho, o assert é insuficiente. Normalmente os programas estão sempre evoluindo e ganhando novas features e, por conta disso, surgiu a necessidade de criar uma suíte de testes mais robusta, legível e de fácil manutenção.



Um framework de testes apresenta ferramentas para eliminar ou mitigar esses problemas. Existem várias ferramentas semelhantes, como Jest , Mocha e Jasmine . Entre eles, Jest se destaca por alguns motivos:

1. É fácil de instalar e requer zero configuração, como você verá em breve;

2. É rápido. O time de engenharia do Airbnb conseguiu diminuir o tempo de execução de sua suíte de testes de 12 para 4 minutos ao trocar Mocha por Jest ;

3. Se integra muito bem com React . De fato, Jest já vem instalado e configurado com o Create React App .



**********************************************************************/

