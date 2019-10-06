let valor // Declarado mas NAO foi inicializada
console.log(valor); // undefiend

/* 

!= de tentar chamar um valor que nao foi declarado 
console.log(valor2); 

ReferenceError: valor2 is not defined
 
 */


 // Nao aponta para nenhum endereco da memoria
 valor = null // Ausencia de valor
 console.log(valor);

 const produto = {}
 console.log(produto.preco); // undefined

 produto.preco = null // sem preco


