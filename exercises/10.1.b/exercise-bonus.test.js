// exercise-bonus.test.js
const searchEmployee = require('./exercise-bonus');

describe('Testa a função searchEmployee', () => {

  it('Testa se a função searchEmployee é definida', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Teste os returns os first name and last name of Ana', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('8579-6', 'lastName')).toBe('Gates');
  });

  it('Teste os returns os first name and last name of George', () => {
    expect(searchEmployee('5569-4', 'firstName')).toBe('George');
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
  });

  it('Teste error message of wrong id', () => {
    expect(() => { searchEmployee('2323', 'firstName') }).toThrowError(new Error('ID não identificada'));
  });

  it('Teste error message of wrong detais', () => {
    expect(() => { searchEmployee('5569-4', 'hobbies') }).toThrowError(new Error('Informação indisponível'));
  });

  it('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
    expect(() => { searchEmployee() }).toThrow();
  });

  it('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
    const actual = searchEmployee('1256-4', 'specialities');
    expect(actual).toContain('Hooks', 'Context API', 'Tailwind CSS');
  });
  it('Testa specialities da ana', () => {
    expect(searchEmployee('8579-6', 'specialities')).toContain('UX', 'Design');
  });
});


/************************************************************************
Gabarito:

// exercise-bonus.test.js

const searchEmployee = require('./exercise-bonus');

describe('Testa a função searchEmployee', () => {
  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
    const actual = searchEmployee('1256-4', 'firstName');
    const expected = 'Linda';

    expect(actual).toBe(expected);
  });
  it('Testa se searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
    const actual = searchEmployee('1256-4', 'lastName');
    const expected = 'Bezos';

    expect(actual).toBe(expected);
  });
  it('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
    const actual = searchEmployee('1256-4', 'specialities');
    expect(actual).toContain('Hooks', 'Context API', 'Tailwind CSS');
  });
  it('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
    expect(() => { searchEmployee('1256-8', 'specialities') }).toThrow();
  });
  it('Testa a mensagem do erro para ID inexistente', () => {
    expect(() => { searchEmployee('1256-8', 'specialities') }).toThrowError(new Error("ID não identificada"));
  });
  it('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
    expect(() => { searchEmployee() }).toThrow();
  });
  it('Testa a mensagem do erro para informação inexistente', () => {
    expect(() => { searchEmployee('4678-2', 'shift') }).toThrowError(new Error("Informação indisponível"));
  });
});


**************************************************************************/
