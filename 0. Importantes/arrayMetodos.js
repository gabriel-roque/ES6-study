const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // remove ultimo elemento
console.log(pilotos);

pilotos.push('Verstappen') // inseri um elemento no final
console.log(pilotos);

pilotos.shift() // remove o 1 elemnto
console.log(pilotos);

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

// ADD
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);

// REMOVE
pilotos.splice(3, 1)
console.log(pilotos);


const algunsPilotos1 = pilotos.slice(2) // coleta tudo apartir do indice para um novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // inicio e termino do pedaço do array que sera coletado
console.log(algunsPilotos2);


