// Fuja de escopo global

var numero = 1

{
    var numero = 2
    console.log('dentro = ', numero); // Response: 2
}

console.log('fora = ', numero); // Response: 2