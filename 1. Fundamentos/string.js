const escola = "Cod3r"

console.log(escola.charAt(4)); 
// caractere 'r' na posicao 4
// chartAt retorna o caractere dentro da string na posicao desejada

console.log(escola.charCodeAt(3)); 
// Resposta: 51 - Coleta da tabela ASCI

console.log(escola.indexOf('r')); 
// posicao 4

console.log(escola.substring(1)); 
// Resposta: 'od3r' 
// exibe tudo a partir de 1 para frente

console.log(escola.substring(0, 3)); 
// Resposta: 'Cod'
// exibe tudo de 0 ate 2

const frutas = 'Uva, Banana, Maca';

console.log(frutas.split(','));
console.log(frutas.split(/,/)); // regex

// Resultado: [ 'Uva', ' Banana', ' Maca' ]






