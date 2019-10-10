
// Instancia de um funcao nativa
console.log(typeof Object);
console.log(typeof new Object);

// Instancia de uma funcao propria
const Cliente = function() {}
console.log(typeof Cliente);
console.log(typeof new Cliente);

// Instancia de uma classe propria
class Produto {}
console.log(typeof Produto);
console.log(typeof new Produto);