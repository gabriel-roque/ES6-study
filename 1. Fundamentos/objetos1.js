const produto = {}
produto.nome = 'Celular'
// Objetos em JS e uma colecao de pares chave valor
console.log(produto);

/* Possivel porem nao utilizar
    
    produto['Desconto legal'] = 125
    console.log(produto['Desconto legal']);
*/

const pessoa = {
    nome: 'Gabriel',
    idade: 20
}

console.log(pessoa);

// Remover atributos
delete pessoa.idade 
console.log(pessoa);


// JS Object != JSON

'{ "nome" : "Gabriel", "idade": 20}'