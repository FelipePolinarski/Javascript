function Atv1(nome, idade){
    let nome = "Felipe";
    let idade = 17;
    console.log("Olá, meu nome é ",nome," e eu tenho ",idade," anos.");
}

function Atv2(nome, sobrenome, corFavorita){
    let nome = "Felipe";
    let sobrenome = "Polinarski";
    let corFavorita = "verde";
    console.log("Olá, meu nome é ",nome," ",sobrenome," e a minha cor favorita é ",corFavorita);
}

function Atv3(menorDeIdade, acompanhado){
    let menorDeIdade = true;
    let acompanhado = true;
    console.log("Você é menor de idade? ",menorDeIdade," E está acompanhado por alguém que seja maior de idade?",acompanhado);
}

function Atv4(rua, numero, bairro){
    let rua;
    let numero;
    let bairro;
    console.log("O endereço é este: ",rua," ",numero,". E o bairro é este: ",bairro);
}

function Atv5(camiseta1, camiseta2, camiseta3, camiseta4, camiseta5){
    let camiseta1 = Symbol("Layout da primeira opção de camiseta");
    let camiseta2 = Symbol("Layout da segunda opção de camiseta");
    let camiseta3 = Symbol("Layout da terceira opção de camiseta");
    let camiseta4 = Symbol("Layout da quarta opção de camiseta");
    let camiseta5 = Symbol("Layout da quinta opção de camiseta");
    console.log("Os modelos de camisetas disponíveis são: ",camiseta1," ",camiseta2," ",camiseta3," ",camiseta4," ",camiseta5);
}

function Atv6(populacaoParana, populacaoRegiaoSul, populacaoBrasil){
    let populacaoParana = bigInt(11080000);
    let populacaoRegiaoSul = bigInt(29975984);
    let populacaoBrasil = bigInt(214300000);
    console.log("As populações do Paraná, da Região Sul e do Brasil inteiro, respectivamente, são: ",populacaoParana," ",populacaoRegiaoSul," ",populacaoBrasil);
}
