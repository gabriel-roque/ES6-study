console.log(typeof Array, typeof new Array, typeof []);

data = [
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

// FILTER
const dogs = data.filter((animal) => {
    return animal.type === 'dog'
})

console.log(dogs);

// MAP
const idadesDogs = dogs.map(({age}) => {
    return age *= 7
})

console.log(idadesDogs);



/*

array.reduce( function( prevVal, elem, index, array ) {
    ...
}, initialValue );


> prevVal: Valor cumulado retornado em cada iteração
> elem: Valor do elemento
> index: Índice em cada iteração, da esquerda para a direita
> array: Array original invocando o método
> initialValue(opcional): Objeto usado como primeiro argumento na primeira iteração (mais à esquerda)

 */


// REDUCE
 const totIdadeDogs = idadesDogs.reduce((sum, age) => {
     return sum + age
 }, 0)

 console.log(totIdadeDogs);


 