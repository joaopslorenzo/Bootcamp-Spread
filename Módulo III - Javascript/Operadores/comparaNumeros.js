var num1 = 10;
var num2 = 20;

if (num1 === num2){
    console.log(`O número ${num1} é igual ao ${num2} `)
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