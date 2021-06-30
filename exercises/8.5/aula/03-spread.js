const assert = require('assert');

const point = [1.0, 2.2, -6.6];
const otherPoint = [0.1, 3.5, -99.6];


printPointCoordenates = (x, y, z) => `Ponits coordinates are x = ${x}`;

printPointCoordenates(...point);
printPointCoordenates(...otherPoint);






