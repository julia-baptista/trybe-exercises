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


// Exercício 1:
const dragonAttack = (dragon) => {
  const minDmg = 15;
  const {strength}  = dragon;
  const dragonDmg = Math.floor((Math.random() * (strength - minDmg) + minDmg));
  return dragonDmg;
};

console.log(dragonAttack(dragon));

// Exercício 2:
const warriorAttack = (warrior) => {
  // const { weaponDmg } = warrior;
  const weaponDmg = warrior.weaponDmg;
  const minDmg = warrior.strength;
  const maxDmg = minDmg * weaponDmg;
  const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);
  return warriorDamage;
};

console.log(warriorAttack(warrior));

// Exercício 3:
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
console.log(mageAttack(mage));


// Parte II

// 1. Crie a primeira HOF que compõe o objeto gameActions .

// Ela será a função que simula o turno do personagem warrior .

// Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon .

//Além disto ela também deve atualizar o valor da chave damage do warrior .

/*****************************************
const healthPointDraggon = (dano) => {
  dragon.healthPoints -= dano;
}

const atualizaChaveWorior = (warrior, damage) => {
  warrior.damage = damage;
}

const gameActions = {
  danoWarrorior: (warriorAttack) => warriorAttack(warrior),
  dragonHealthPoint: (healthPointDraggon) => healthPointDraggon(this.danoWarrorior),
  warriorKey: (atualizaChaveWorior) => atualizaChaveWorior(warrior, this.danoWarrorior),
};

console.log(gameActions.danoWarrorior(warriorAttack));
console.log(gameActions.dragonHealthPoint(healthPointDraggon));
console.log(gameActions.warriorKey(atualizaChaveWorior));

****************************************************************************/

// 1. Gabarito:

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  megeTurn: (mageAttack) => {
    const megeDamage = mageAttack(mege);
    dragon.healthPoints = megeDamage;
    
  },
};

gameActions.warriorTurn(warriorAttack);
console.log(warrior);
console.log(dragon);


// 2. Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage.

// Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon.

// Além disto ela também deve atualizar o valor das chaves damage e mana do mage.







