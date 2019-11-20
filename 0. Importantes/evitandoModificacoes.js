// Object.preventExtensions
// Não será possivel adicionas novos atributos no objeto, somente excluir
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensivel:', Object.isExtensible(produto));

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // Não sera adicionado
delete produto.tag
console.log(produto);

// Object.seal 
// Não consegue adicionar e nem excluir, somente alterar valores já existentes
const pessoa = { nome: 'Camila', idade: 20 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Roque' // Não irá adicionar
delete pessoa.nome // Não irá excluir
pessoa.idade = 29
console.log(pessoa);

// Object.freeze = selado + valores constantes
// Objeto completamente constante

const carro = Object.freeze({ nome: "F50", marca: "Ferrari", ano: 2015 });

carro.descricao = 'Carro veloz' // Não adicionar
carro.nome = 'F250' // Não altera
delete carro.marca // Não deleta

console.log('Congelado:', Object.isFrozen(carro));
console.log(carro);