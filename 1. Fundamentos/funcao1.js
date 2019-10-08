// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(1, 3) // 4
imprimirSoma(1) // NaN
imprimirSoma(1, 5, 6, 7, 7) // ignora o restante dos parametros
imprimirSoma() // NaN


// Função com retorno
// posso definir um valor default para caso não seja passado nenhum parametro
function somar(a, b = 5) {
    return a + b
}

console.log(somar(1)) // 6
console.log(somar(1, 8)) // 9
console.log(somar()) // NaN
