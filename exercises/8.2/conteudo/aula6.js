/***************************************************
 arr.find()

 acha o primeiro elemento
 ****************************************************/

 const users = [
  {fistName: 'Homer', lastName: 'Simpson', isDriver: true},
  {fistName: 'Marge', lastName: 'Simpson', isDriver: true},
  {fistName: 'Bart', lastName: 'Simpson', isDriver: false},
  {fistName: 'Lisa', lastName: 'Simpson', isDriver: false},
  {fistName: 'Maggie', lastName: 'Simpson', isDriver: false},
];

const findANonDriver = users.find(user => user.isDriver === false);

console.log(findANonDriver);