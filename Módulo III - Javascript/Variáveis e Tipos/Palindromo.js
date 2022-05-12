function verificaPalindromo (dado){
    let palindromo = new String(dado);

    palindromo = palindromo.replaceAll('',' ');

    let arrayOrdenado = palindromo.split();
    let arrayInverso = palindromo.split().reverse();
    
    let resultado;
    resultado = ComparaArrays(arrayOrdenado, arrayInverso);
    console.log(resultado);
}

function ComparaArrays(array1, array2){

    if(array1.length === array2.length){   
        if (array1.every((value, index) => value === array2[index])){
            return 'Palindromo'
        }else{
            return 'Não é palindromo'
        }        
    }else{
        return 'Palindromo'
    }
}


verificaPalindromo('Roma é amor Roma me tem amor');
verificaPalindromo(11);