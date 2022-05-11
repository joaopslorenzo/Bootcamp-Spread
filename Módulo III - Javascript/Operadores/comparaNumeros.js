function verificaNumeros (num1, num2){
    if(!num1 || !num2) {
        return console.log('Defina dois números');
    }
    if (num1 === num2){
        var soma = num1 + num2;
        if(soma > 10){
            if(soma > 20){
                console.log(`Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20.`);
            }else{
                console.log(`Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20.`);
            }
        }else{
            console.log(`Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20.`);
        }
    }else{
        var soma = num1 + num2;
        if(soma > 10){
            if(soma > 20){
                console.log(`Os números ${num1} e ${num2} não são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20.`);
            }else{
                console.log(`Os números ${num1} e ${num2} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20.`);
            }
        }else{
            console.log(`Os números ${num1} e ${num2} não são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20.`);
        }
    }
}

verificaNumeros(10, 10);

