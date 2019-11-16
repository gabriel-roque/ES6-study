
// Prototype pode ser utilizado para adicionar uma nova propriedade ao tipo em questão

String.prototype.hello = function(){
    console.log('Hello Wolrd');
}

const palavra = 'Uma string'
palavra.hello();