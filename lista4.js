function soma1(valor1, valor2, contador){
    let valor1;
    let valor2;
    let contador = 0;
    while(contador<=20){
        let soma = valor1 + valor2;
        contador = contador + 1;
        console.log("A soma é: ",soma);
    }
    console.log("Acabou!");
}

function soma2(valor1, valor2, contador){
    let valor1;
    let valor2;
    let contador = 0;
    do{
        let soma = valor1 + valor2;
        contador = contador + 1;
        console.log("A soma é: ",soma);
    }while(contador<=0);
    console.log("Acabou!");
}

function soma3(valor1, valor2){
    let valor1;
    let valor2;
    for(let contador = 0; contador <= 20; contador++){
        let soma = valor1 + valor2;
        console.log("A soma é: ",soma);
    }
    console.log("Acabou!");
}

function numPares(num){
    let num = 1;
    for(let contador = 0; contador <= 100; contador++){
        let resultado = num % 2;
        if(resultado == 0){
            console.log("O número ",num," é par.");
        }
        else{
            console.log("O número ",num," é ímpar.")
        }
        num = num + 1
    }
}

function numImpares(num){
    let num = 1;
    for(let contador = 0; contador <= 100; contador++){
        let resultado = num % 2;
        if(resultado == 0){
            console.log("O número ",num," é par.");
        }
        else{
            console.log("O número ",num," é ímpar.")
        }
        num = num + 1
    }
}

function numPrimos(num, contador, divisores){
    let num = 1
    let contador = 0
    let divisores = 0
    while(contador <= 100){
        contador = contador + 1
        for(let i = 1; i <= num; i++){
            let divisao = num % i
            if(divisao == 0){
                divisores = divisores + 1
            }
        }
        if(divisores <= 2){
            console.log("O número ",num," é primo!")
        }
        else{
            console.log("O número ",num," não é primo!")
        }
    }
}
