
// Prototype pode ser utilizado para adicionar uma nova propriedade ao tipo em questão

Number.prototype.hello = function(){
    console.log(this);
}

const valor = 15
valor.hello()