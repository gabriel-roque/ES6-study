// Fuja de escopo global

var numero = 1;

{
  let numero2 = 2;
  console.log("dentro = ", numero2); // Response: 2

  /* Preferencia em buscar local da function, caso nao ache busca global */
  console.log("dentro = ", numero); // Response: 1
}

console.log("fora = ", numero); // Responde: 1
