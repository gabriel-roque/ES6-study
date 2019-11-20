// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 0; // não recomendado
const avo = { attr1: "A" };
const pai = { __proto__: avo, attr2: "B" };
const filho = { __proto__: pai, attr3: "C" };

console.log(filho.attr0); // Buscar na cadeia e acha em Object
console.log(filho.attr1); // Não encontra nele, então procura no PAI

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        console.log(`${this.velAtual} Km/h de  ${this.velMax}`);
    }
}

const ferrari = {
    modelo: "F40",
    velMax: 324
}

const volvo = {
    modelo: "V40",
    velMax: 200,
    status() {
        console.log(`${this.modelo}: ${super.status()}`);
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)


ferrari.acelerarMais(150)
ferrari.status()

volvo.acelerarMais(200)
volvo.status()