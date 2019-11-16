const valor = 'Global'

function minhaFuncao() {
    console.log(valor);
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // Global

// no contexto que a funcao é declarada ela carrega consigo o valor como 'Global'