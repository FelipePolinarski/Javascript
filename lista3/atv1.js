class Pessoa {
    constructor(nome, idade, endereco) {
        this._nome = nome;
        this._idade = idade;
        this._endereco = endereco;
    }

    _metodoPrivado() {
        console.log('método privado');
    }

    mostrarEndereco() {
        console.log(this._endereco);
        this._metodoPrivado();
    }

    alterarEndereco(novoEndereco) {
        this._metodoPrivado();
        this._endereco = novoEndereco;
    }
}
