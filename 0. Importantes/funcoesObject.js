const pessoa = {
  nome: "Ana",
  idade: 19,
  peso: 13
};

console.log(Object.keys(pessoa)); //[ 'nome', 'idade', 'peso' ]
console.log(Object.values(pessoa)); // [ 'Ana', 19, 13 ]
console.log(Object.entries(pessoa)); // [ [ 'nome', 'Ana' ], [ 'idade', 19 ], [ 'peso', 13 ] ]

// Diferente da notação literal, assim podemos adicionar novas consfigurações ao atributo do objeto
Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: false,
  writable: false,
  value: "12/04/1999"
});

pessoa.dataNascimento = "31/05/2019";
console.log(pessoa.dataNascimento);

const juridico = { nome: "Ramon Guedes", idade: 25 };
console.log("Juridico:", juridico);

const civil = { nome: "Lucas Roque", idade: 33 };
console.log('Pessoa Civil:', civil);

const novaPessoa = Object.assign(juridico, civil)
console.log(novaPessoa);
