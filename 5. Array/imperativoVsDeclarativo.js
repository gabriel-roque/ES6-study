const alunos = [
  { nome: "João", nota: 7.9 },
  { nome: "Maria", nota: 9.2 }
];

// Paradigma Procedural
// Imperativo (Se precupa com o COMO FAZER)
let total1 = 0
for(let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length);

// Paradigma Funcional
// Declarativo (Se preocupa com O QUE FAZER)
const getNota = aluno => aluno.nota
const soma = (acum, nota) => acum + nota
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length);