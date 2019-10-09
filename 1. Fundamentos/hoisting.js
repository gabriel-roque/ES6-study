/* Hoisting e um comportamento em JS de movem a variavel para o TOPO */


console.log('a =', a); // undefined
var a = 1
console.log('a =', a); // 1


// Efeito de HOISTING so ocorre com VAR

// console.log('a =', b); // ReferenceError: b is not defined
let b = 1
console.log('b =', b); // 1


