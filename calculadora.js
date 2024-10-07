function calculadora(operacao, numeros){
    let resultado = 0
    switch(operacao){
        case '+':
            for (i = 0; i < numeros.length; i++){
                resultado += numeros[i]
            };
            return resultado;
            break;
        case '-':
            for (i = 0; i < numeros.length; i++){
                resultado -= numeros[i]
            };
            return resultado;
            break;
        case '*':
            resultado = 1
            for (i = 0; i < numeros.length; i++){
                resultado *= numeros[i]
            };
            return resultado;
            break;
    }
}

module.exports = calculadora;
