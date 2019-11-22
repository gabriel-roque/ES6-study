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


let dogs = animals.filter((e) => {
    return e.type === 'dog'
})

// Retorno implicito
dogs = animals.filter(e => e.type === 'dog')

console.log(dogs);