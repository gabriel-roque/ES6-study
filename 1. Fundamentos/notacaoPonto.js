console.log(Math.ceil(6.2));

const obj1 = {};
obj1.nome = "bola";

console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome,
    this.exec = () => {
        console.log('Running....');
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2, obj3);
obj2.exec()

/* ------------------- */

class Pessoa {
  constructor(nome, idade, sexo) {
    this.nome = nome
    this.idade = idade
    this.sexo = sexo
  }

  getFullDataPessoa() {
    return console.log(this)
  }

}

const pessoa = new Pessoa('Gabriel', 20, 'M')
pessoa.getFullDataPessoa()



