const peso1 = 1.0
const peso2 = Number('2.0')
const peso3 = Number('2.5')


console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // True
console.log(Number.isInteger(peso2)); // True
console.log(Number.isInteger(peso3)); // False

const ava1 = 9.871
const ava2 = 6.871

const total = ava1 * peso1 + ava2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2));
console.log(media.toString()); // Vira string
console.log(media.toString(2)); // Vira em binario

console.log(typeof media); // number
console.log(typeof media.toString()); // string
