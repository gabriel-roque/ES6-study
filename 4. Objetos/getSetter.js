const sequencia = {
    _valor: 1, // convenção de valores privados JS

    get valor() { return this._valor++ },
    set valor(value) {
        if (valor > this._valor) {
            this._valor = valor;
        }
    }
}



console.log(sequencia.valor, sequencia.valor);

