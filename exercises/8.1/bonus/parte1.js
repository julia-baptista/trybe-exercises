/**********************************************************************************
Parte I - Game Actions Simulator

Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
Para os próximos exercícios copie o código abaixo.
***********************************************************************************/


const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };


// 1. Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).


/********************************************************************************
Tentei desse jeito:

const dragonDamage = () => {
  return Math.floor(Math.random() * (dragon.strength - 15)) + 15;
}

*********************************************************************************/

// Gabarito:

const dragonAttack = (dragon) => {
  const minDmg = 15;
  const {strength}  = dragon;
  const dragonDmg = Math.floor((Math.random() * (strength - minDmg) + minDmg));
  return dragonDmg;
};

console.log(dragonAttack(dragon));

// 2. Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).


/******************************************************************
Função que eu fiz: 

const warriorDamage = () => {
  let min = warrior.strength;
  let max = warrior.strength * warrior.weaponDmg;
  return Math.floor(Math.random() * (max - min)) + min;
}
********************************************************************/

// Gabarito:

const warriorAttack = (warrior) => {
  const { weaponDmg } = warrior;
  const minDmg = warrior.strength;
  const maxDmg = minDmg * weaponDmg;
  const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);
  return warriorDamage;
};

console.log(warriorAttack(warrior));


//3. Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).


/*********************************************
{
  dano: 15,   ---> Não possui mana suficiente"
  mana: min = (mage.intelligence)  max = (mage.intelligence * 2)  --> 0
}
**********************************************/


// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

/**********************************************************************
Função que eu comecei:

const mageObj = () => {
  let min = mage.intelligence;
  let max = mage.intelligence * 2;
  return {
    dano: () => Math.floor(Math.random() * (max - min)) + min,
  }
}
*****************************************************************/

// Gabarito:

const mageAttack = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mageMana > 15) {
    const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
};

