class Aluno {
    constructor(nome, matricula, curso) {
        this._nome = nome;
        this._matricula = matricula;
        this._curso = curso;
    }

    _metodoPrivado() {
        console.log('método privado');
    }

    mostrarCurso() {
        console.log(this._curso);
        this._metodoPrivado();
    }

    alterarCurso(novoCurso) {
        this._curso = novoCurso;
        this._metodoPrivado();
    }
}
