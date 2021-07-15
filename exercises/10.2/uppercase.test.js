const uppercase = require('./uppercase');


describe('Letra Maiuscula', () => {
  it('transforma as letras de uma palavra', (done) => {
    uppercase('queijo', (callback) => {
      expect(callback).toBe('QUEIJO');
      done();
;    })
  })
});