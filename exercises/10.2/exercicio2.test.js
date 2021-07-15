const { findUserById, getUserName } = require('./exercicio2');

describe('UserName', () => {
    it('usuário é encontrado', () => {
      return getUserName(5).then(data => expect(data).toEqual('Paul'));
    });
    
    it('Testa usuário não encontrado', () => {
      expect.assertions(1);
      const id = 0;
      return getUserName(id).catch(data => expect(data).toEqual({error: `User with ${id} not found.`}));
    });
  });

describe('Testando usuários encontrados e não encontrados [async/await]', () => {
  it('usuário é encontrado [async/await]', async () => {
    expect(await getUserName(5)).toEqual('Paul');
  });
    
  it('Testa usuário não encontrado [async/await]', async () => {
    expect.assertions(1);
    const id = 0;
    try {
      await getUserName(id);
    } catch (error) {
      expect(error).toEqual({error: `User with ${id} not found.`});
    }
  })
}); 

  