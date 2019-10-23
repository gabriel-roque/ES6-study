// recusro do ES2015

const pessoa = {
    nome: 'Gabriel',
    idade: 20,
    endereco : {
        longradouro: 'Rua ABC',
        numero: 1532
    }
}

// Expor um atributo do objeto
const {nome, idade} = pessoa
console.log(nome, idade); // Gabriel 20


// Criar um alias para o atributo do objeto extraido
const {nome: n, idade: i} = pessoa
console.log(n, i); // Gabriel 20


// Acessar atributos nao existentes
const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado); // undefined true

const {endereco: {longradouro, numero}} = pessoa
console.log(longradouro, numero); // Rua ABC 1532


