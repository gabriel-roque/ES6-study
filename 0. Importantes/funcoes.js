// Tradicional
function soma1(a, b) {
    console.log(a+b);
}

// Arrow Function
const soma2 = (a, b) => {
    console.log(a+b);
}

// Arrow Function retorno implicito
const soma3 = (a, b) => console.log(a+b);

// Função anônima
const soma4 = function(a, b) {
    console.log(a+b);
}


soma1(2, 3)
soma2(2, 3)
soma3(2, 3)
soma4(2, 3)

