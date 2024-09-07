function atv1(nome){
    let nome;
    console.log("Olá ",nome,"! Seja bem-vindo(a)!")
}

function atv2(num){
    let num;
    if (num%2==0){
        let num = true;
        console.log("O número é par.")
    }
    else{
        let num = false;
        console.log("O número é ímpar.")
    }
}

function atv3(num1, num2, num3, media){
    let num1;
    let num2;
    let num3;
    let media = (num1+num2+num3)/3;
    console.log("O valor da média entre ",num1," ",num2," ",num3," é igual a ",media)
}

function atv4(maiscula){
    let maiscula = "letra maiúscula"
    console.log(maiscula.toUpperCase())
}

function atv5(num){
    let num;
    let cont = 0;
    for (let i = 1; i <= num; i++){
        if (num % i == 0){
            cont = cont + 1
        }
    }
    if (cont == 2){
        console.log("É número primo.")
    }
    else{
        console.log("Não é número primo.")
    }
}

function atv6(lista){
    let lista = ["Elemento1","Elemento2","Elemento3"]
    console.log("A lista invertida é: ",lista.reverse())
}

function atv7(num, porcentagem){
    let num = 10;
    let porcentagem = 0.10;
    soma = num + (num*porcentagem)
    console.log("O número ",num," + a porcentagem ",porcentagem," é igual a: ",soma)
}

function atv8(palavra){
    let palavra = "natan";
    let palavraInvertida = palavra.reverse();
    if (palavra == palavraInvertida){
        console.log("A palavra é um palíndromo.")
    }
    else{
        console.log("A palavra não é um palíndromo.")
    }
}

function atv9(num){
    let num;
    let quociente;
    for (let i = 1; i <= num; i++){
        resto = num % 2;
        console.log(resto);
        quociente = num/2
    }
}

function atv10(num){
    let num;
    if (num == 0 || num == 1){
        console.log("O fatorial deste número é igual a 1.")
    }
    for (let i = num; i >= 1; i--){
        resultado = num * i;
        console.log("O fatorial deste número é: ",resultado)
    }
}
