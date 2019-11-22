const animals = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  }
];

let totAgeAnimals = animals
  .map(({ age }) => age)
  .reduce((sum, age) => sum + age);

// let totAgeAnimals = ages.reduce((sum, age) => {
//     return sum + age
// })

console.log(totAgeAnimals);
