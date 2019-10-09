const funs = [];

for (let i = 0; i < 10; i++) {
  funs.push(() => {
    console.log(i);
  });
}

/* Pelo fato do let usar o LET e ser escopo local 
e possivel guarda a posicao atual no array de funcoes*/

funs[2](); // 2
funs[8](); // 8
