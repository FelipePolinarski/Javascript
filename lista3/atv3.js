class Carro {
    constructor(marca, ano, preco) {
        this._marca = marca;
        this._ano = ano;
        this._preco = preco;
    }

    _metodoPrivado() {
        console.log('método privado');
    }

    mostrarPreco() {
        console.log(this._preco);
        this._metodoPrivado();
    }

    mostrarDados() {
        console.log(this._marca);
        console.log(this._ano);
        this._metodoPrivado();
    }
}
