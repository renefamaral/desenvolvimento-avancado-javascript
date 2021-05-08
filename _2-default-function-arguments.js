/**
 * Ao trabalhar com funções era comum lidar com cenário atípico da função
 * com por exemplo esquecer de informar um dos parâmetros da função. * 
 * 
 */


function multiply(a, b){
    return a * b;
}

console.log(multiply(5, 5)); // chamada correta
console.log(multiply(5)); // chamada faltando 1 parâmetro (resulta no Not a Number)




// Para previnir tais esquecimentos o ES6 permite atribuirmos valores default diretamente nas funções conforme exemplo abaixo:
console.log();

function multiply2(a, b = 1) { // passando um valor default para b
    return a * b;
}

console.log(multiply2(5)); // retorna 5 usando o default de b que é igual a 1
console.log(multiply2(5, undefined)); // retorna 5 usando o default de b que é igual a 1



// lazy evaluation - a função randomNumber() só será invocada quando um parâmetro for esquecido
console.log();

function randomNumber(){
    return Math.random().toFixed(1) * 10 ; // gera um número randomico, sem casas decimais, multiplicado por 10
}

function multiply3(a, b = randomNumber()){
    return a * b;
}

console.log(multiply3(5)); // toda vez que um segundo parâmetro não for passado o randomNumber() será invocado



