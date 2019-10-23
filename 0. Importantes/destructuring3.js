// Recebe objeto e desustrutura os atributos
const random = ({min = 0, max = 1000}) => {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// Passo um objeto como parametro
console.log(random({min: 15, max: 40}));
console.log(random({min: 900}));
console.log(random({}));