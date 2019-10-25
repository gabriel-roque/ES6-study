const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Sem callback
let notasBaixais1 = [];

for (let i in notas) {
    if(notas[i] < 7) notasBaixais1.push(notas[i])
}

console.log(notasBaixais1);

// Com callback
notasBaixais2 = notas.filter(nota => nota < 7);

console.log(notasBaixais2);