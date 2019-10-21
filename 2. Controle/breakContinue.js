const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(x in values){
    if(x == 6) break // Para na interação específica
    console.log(`Indice: ${x} | Valor: ${values[x]}`);
}

console.log('============================');

for(y in values){
    if(y == 6) continue // Não age nessa iteração
    console.log(`Indice: ${y} | Valor: ${values[y]}`);
}
