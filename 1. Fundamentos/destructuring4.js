const random = ([min = 0, max = 999]) => {
    if (min > max) [max, min] = [min, max]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(random([188, 150]));
console.log(random([, 150]));
console.log(random([]));