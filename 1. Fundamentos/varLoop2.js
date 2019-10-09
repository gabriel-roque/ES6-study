const funs = []

for (var i = 0; i < 10; i++) {
    funs.push(() => {
        console.log(i);
    })
}

/* Nao guarda valor do I na posicao atual, problema historico do JS */

funs[2]() // 10
funs[8]() // 10
