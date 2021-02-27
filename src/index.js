import './styles/main.scss';

const persons = {
  username: "Hironmoy Dhar",
  age: 32,
  job: "Web Developer"
}

const people = {
  ...persons,
  age: 23,
  job: "Full Stack Developer"
}

console.log(persons);
console.log(people);