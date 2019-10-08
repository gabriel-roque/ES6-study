// Tradicional
function somar1(a, b) {
    console.log(a + b);
}

// Atribuicao de function (Funcao e anonima)
const somar2 = function(a, b) {
    console.log(a + b);
}

// Arrow Function
const somar3 = (a, b) => {
    console.log(a + b);
}

/* 
    Arrow function + reduzida
    Note que quando so existe a passagem de 1 parametro apenas nao se faz necessario os '( )' 
*/
const imprimir = valor => {
    console.log(valor);
}


// Fuction com rerturn implicito
const doubleValue = value => value * 2



somar1(4, 5) // Response: 9
somar2(4, 5) // Response: 9
somar3(4, 5) // Response: 9
imprimir('EcmaScript! :)') // EcmaScript! :) 
console.log(doubleValue(2)) // Response: 4


/* RESUMO: Uma das vantagens de utlizar as arrow functions e reducao da syntax do codigo, 
assim bem como deixar a implementacao mais declarativa */
