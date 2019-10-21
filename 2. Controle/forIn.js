const pessoa = {
    nome: 'Ana',
    sobrenome: 'Miranda',
    idade: 74,
    peso: 88
}

for(i in pessoa){
    console.log(`${i}: ${pessoa[i]}`);
}