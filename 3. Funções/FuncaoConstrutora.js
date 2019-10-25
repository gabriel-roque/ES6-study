function Carro (velMax = 200, delta = 5) {
  // Atributo Privado
  let velAtual = 0;

  // Método Púlico
  this.acelerar = function () {
    if (velAtual + delta <= velMax) {
      velAtual += delta;
    } else {
      velAtual = velMax;
    }
  };

  // Método Público
  this.getVelAtual = function () {
    return velAtual;
  } 

};

const fusion = new Carro;
fusion.acelerar()
fusion.acelerar()
console.log(fusion.getVelAtual());


console.log(typeof Carro); // Function
console.log(typeof fusion); // Object