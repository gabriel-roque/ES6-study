console.log(this === global); // false
console.log(this === module); // false

console.log(this === module.exports); // true
console.log(this === exports); // true

// module.exports e exports aponta para o mesmo espaço de memoria

console.log(module.exports, exports);

function logThis() {
    console.log('THIS dentro de uma function');
    console.log(this === exports); // false
    console.log(this === module.exports); // false
    console.log(this === global); // true
}

logThis()