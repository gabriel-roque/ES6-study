// Objetos
const pessoa = {
    nome: 'Gabriel',
    idade: 20,
    github: 'gabriel-roque',
    falar: () => {
        console.log('I am your Father! ......noooooooo!');
    }
}

// Destruckring em objetos
const {nome, falar} = pessoa
console.log(nome);
falar()
pessoa.falar()

const {nome: primeiroNome} = pessoa // Uso de alias
console.log(primeiroNome);


// Destruckring em array
let valores = [15, 588, 126]
const [n1, n2, n3] = valores
console.log(n1, n2, n3);

