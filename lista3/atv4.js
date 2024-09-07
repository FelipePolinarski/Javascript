class Conta {
  constructor(numero, nome, saldo) {
    this._numero = numero;
    this._nome = nome;
    this._saldo = 0;
  }

  _metodoPrivado() {
    console.log('método privado');
  }

  alterarNome() {
    this._nome = novoNome;
    this._metodoPrivado();
  }

  deposito(valor) {
    this._saldo = saldo + valor;
    this._metodoPrivado();
  }

  saque(valor) {
    this.saldo = saldo - valor;
    this._metodoPrivado();
  }
}
