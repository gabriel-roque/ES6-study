const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1231.45,
    desconto: 12.3
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo');
})