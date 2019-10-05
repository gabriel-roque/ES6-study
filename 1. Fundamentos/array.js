// Array ele e heterogenio

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3], valores[5]);
// valores[5] ainda nao definido
// Resultado: 7.7 9.2 undefined

valores[10] = 83
console.log(valores);
// Como os arrays em JS sao heterogenios e dinamicos, podemos adicionar em qualquer posicao
// Resultado: [ 7.7, 8.9, 6.3, 9.2, <6 empty items>, 83 ]

console.log(valores.length); // 11 posicoes


/* Heterogionidade - Posssivel ter uma tupla
valores.push({id: 3}, false, null, 'teste') 
*/

valores.push(12)
console.log(valores);
// Resultado: [ 7.7, 8.9, 6.3, 9.2, <6 empty items>, 83, 12 ]


// .pop() remove o ultimo item da array / HEAD
console.log(valores.pop()); // item removido da pilha


delete valores[0]
console.log(valores);
// Resposta: [ <1 empty item>, 8.9, 6.3, 9.2, <6 empty items>, 83 ]

console.log(typeof valores); // tipo 'object'
