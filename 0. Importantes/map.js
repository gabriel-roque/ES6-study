const nums = [1, 2, 3, 4, 5];

let doubleNums = nums.map((e) => {
    return e * 2
})

// Retorno implicito
doubleNums = nums.map(e => e * 2)

console.log(doubleNums);