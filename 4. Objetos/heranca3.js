const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: { value: 'Ana', writable: false, enumerable: true }
})

console.log(filha2.nome);
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);


// hasOwnProperty - verficar se a propriedade em questão e do objeto ou veio de herança
for (key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log('Por propriedade: ', key) : console.log('Por herança: ', key); 
}

