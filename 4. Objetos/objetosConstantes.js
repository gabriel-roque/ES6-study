// pessoa -> 123 -> {...}
/* pessoa tem um espaço na memoria de 123 com o conteudo, 
logo a alteração do objeto, não muda o endereço de memória */
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Gabriel'
console.log(pessoa);

// pessoa -> 456 -> {...}
// Neste caso o endereço de memória está sendo alterado, logo irá gerar erro

// pessoa = {nome: 'Lucas'} // Assignment to constant variable.

Object.freeze(pessoa) // Congela e não altera mais nada
pessoa.nome = 'Camila'
console.log(pessoa);