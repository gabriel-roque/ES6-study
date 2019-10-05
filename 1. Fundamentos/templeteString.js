const nome = 'Receba'
const concatenacao = 'Ola ' + nome + '!' // ma pratica

const template = `Ola ${nome}!`

console.log(concatenacao);
console.log(template);

// expressoes resolvidas dentro do backtick...
console.log(`1 + 1 = ${1+1}`);

const up = texto => texto.toUpperCase()
console.log(`Ei..... ${up('cuidado')}`);
