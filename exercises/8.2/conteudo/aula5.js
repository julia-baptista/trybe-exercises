/********************************************
arr.every();

todos tem que passar no teste

*********************************************/

const users = [
  {fistName: 'Homer', lastName: 'Simpson', isDriver: true},
  {fistName: 'Marge', lastName: 'Simpson', isDriver: true},
  {fistName: 'Bart', lastName: 'Simpson', isDriver: true},
  {fistName: 'Lisa', lastName: 'Simpson', isDriver: true},
  {fistName: 'Maggie', lastName: 'Simpson', isDriver: true},
];

const everyOneCanDrive = users.every(user => user.isDriver === true);
console.log(everyOneCanDrive);

// teste alterando uma das opções para false


