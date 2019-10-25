const calcular = (a, b, operacao) => {
    if (a > 5) a+= 3 
    operacao(a, b)
}

const soma = (a, b) => console.log(a + b);

const subtracao = (a, b) => console.log(a - b);

const divisao = (a, b) => console.log(a / b);

const multiplicacao = (a, b) => console.log(a * b);

calcular(1, 3, soma)
calcular(7, 2, subtracao)
calcular(10, 2, divisao)
calcular(8, 2, multiplicacao)