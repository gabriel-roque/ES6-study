let isAtivo = false;
console.log(isAtivo);
// false

isAtivo = true;
console.log(isAtivo);
// true

isAtivo = 1;
console.log(!!isAtivo); // true
console.log(!isAtivo); // false

console.log("os verdadeiros....");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"texto qualquer");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true)); // resultado de resolver a atraibuicao

console.log("os falsos...");

console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

let nome = "";
console.log(nome || "Desconhecida");
// Desconhedido caso esteja vazio a string
