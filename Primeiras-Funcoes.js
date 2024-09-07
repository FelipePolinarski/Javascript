function Media(num1, num2, num3){
    let media = (num1+num2+num3)/3
    if (media >= 6) {
        console.log("Parabéns!")
    }
    return media
}


function ImparPar(num){
    if (num % 2 == 0){
        console.log("Este número é par.")
    }
    else{
        console.log("Este número é ímpar.")
    }
}



function NumeroMaior(num1, num2){
    if(num1 > num2){
        console.log(num1," é maior do que ",num2)
        if(num1 == num2){
            console.log(num1," é igual a ",num2)
        }
    }
    else{
        console.log(num2," é maior do que ",num1)
    }
}



function Idade(anoNasc, anoAtual){
    let idade
    idade = anoAtual - anoNasc
    console.log("Sua idade é ",idade)
}



function Estacoes(){
    console.log("As estações do ano são: Verão, Outono, Inverno e Primavera.")
}
