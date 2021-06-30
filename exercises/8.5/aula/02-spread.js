const scifiBooks = ['I, Robot', 'Caves of Steel'];
const horrorBooks = ['It', 'The Shining'];

let awesomeBooks = [];

for (let index = 0; index < awesomeBooks.length; index += 1) {
  awesomeBooks.push(scifiBooks[index]);
}

for (let index = 0; index < horrorBooks.length; index += 1) {
  awesomeBooks.push(horrorBooks[index]);
}

const books = [...scifiBooks, ...horrorBooks];