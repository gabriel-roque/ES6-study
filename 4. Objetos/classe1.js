class Lacamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome,
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes,
        this.ano = ano
        this.lacamentos = []
    }

    addLacamentos(...lacamentos) {
        lacamentos.forEach(l => this.lacamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lacamentos.forEach(l => {
            valorConsolidado += l.valor
        })

        return valorConsolidado
    }
}

const salario = new Lacamento('Salario', 45000)
const contaDeLuz = new Lacamento('Luz', -220)

const contas = new CicloFinanceiro(11, 2019)
contas.addLacamentos(salario, contaDeLuz)
console.log(contas.sumario());