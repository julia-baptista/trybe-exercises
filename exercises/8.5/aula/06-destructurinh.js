

const bestGuyInTheWorld = {
  name: 'Rodrigo Hibert',
  birthplace: 'Orleans, Santa Catarina',
  city: 'São Paulo',
  jobs: ['Ator', 'Modelo', 'Cozinheiro']
}


const {name: fullName, birthplace, city, jobs} = bestGuyInTheWorld;

const string = `${fullName} de ${birthplace}`;

const [job1, job2, job3, ...restJobs] = bestGuyInTheWorld.jobs;
console.log(job1);
console.log(job2);
console.log(job3);
console.log(restJobs);


