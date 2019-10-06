let val1 = { name: "BMW" };
let val2 = val1;

console.log(val1, val2);
// { name: 'BMW' } { name: 'BMW' }

val2.name = "Ferrari";
console.log(val1, val2);
// { name: 'Ferrari' } { name: 'Ferrari' }

/* 
Ocorre que val2 recebe a referencia aonde o dado esta alocado, e nao o valor em si, ATRIBUICAO po REFERENCIA
logo quando altera atraves da VAL2, VAL1 tera o mesmo valor pois aponta para o mesmo local da memoria armazenado
*/


// Podemos usar o operador Spread para obter os valores de VAL1 para VAL2, sem ser sua REFERENCIA
val2 = {...val1}
val2.name = 'Aston Martin'
console.log(val1, val2);



let A = 4;
let B = A;
console.log(`Valor A: ${A}, Valor B: ${B}`); // Valor A: 4, Valor B: 4
B++;
console.log(`Valor A: ${A}, Valor B: ${B}`); // Valor A: 4, Valor B: 5

/* 
Quando se usa atribuicao com tipos primitivos e ATRIBUICAO por VALOR
*/
