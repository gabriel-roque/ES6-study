// recusro do ES2015

// Expor uma variavel do array
const [valor1] = [10];
console.log(valor1);

// Expor varios elementos do array de uma unica vez
const [a, b, c, e = 0] = [10, 15, 23, 89];
console.log(a, b, c, e);

// Podemos usar o operador destruckturing para realizar uma atribuicao de exposicao direta
const valores = ([n1, n2, n3] = [1, 2, 3]);
console.log(valores);
console.log(n1, n2, n3);
