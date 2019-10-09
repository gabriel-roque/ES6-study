/* 
    Uma variavel VAR so tem dois escopos possiveis
    1. Escopo global do documento
    2. Escopo local da function
*/

{
  {
    {
      {
        var sera = "Sera?!"; // Escopo global
        console.log(sera);
      }
    }
  }
}

console.log(sera);

function teste() {
  var local = 123; // Escopo local da function
  console.log(local);
}

teste();
