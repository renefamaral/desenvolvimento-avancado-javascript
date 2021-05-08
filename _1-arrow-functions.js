/** 
Arrou function são criadas com a combinação do seguinte símbolo =>

Com o surgimento do ECMA6 novas formas de funções foram disponibilizadas
e chamadas de Arrow Functions.

Arrow Functions são funções anonimas podendo ser utilizadas somente
atribuindo a uma variável ou passando como parâmetro em outra função.

A palavra function pode ser omitida

*/

var sum = (a, b) => a + b; // o return pode ser omitido se tivermos somente uma expressão de retorno. Caso contrário precisa de {}

console.log(sum(5, 10));


// ex2

var sum1 = a => a +5 // omissão dos () quando houver somente um parâmetro.



/**------------------------------------------------------------------------------- */



// Objetos literais em JavScript são declarados da seguinte forma

var createObj = () => ({test: 123}); // os parênteses são para explicitar o retorno

console.log(createObj());


// Outra forma de construir objetos em JavaScript é por meio das funções construtoras
// ex:

function Car(){
    this.foo = 'bar'
}

console.log(new Car); // objeto gerado usando a função construtora e utilizando a palavra new.




/**------------------------------------------------------------------------------- */


//Contudo funções construtores não podem ser criadas por meio de Arrow Functions
// ex (o código abaixo gera um erro)

// var Car1 = () => {
//     this.foo = 'bar';
// }

// console.log(new Car1);


/**------------------------------------------------------------------------------- */


// Arrow Functions não funcionam com hoisting, ou seja, uma função não pode ser invocada
// antes de sua declaração conforme exemplo abaixo (o código abaixo gera um erro.)

// log('teste');

// var log = value => {
//     console.log(value);
// };



/**------------------------------------------------------------------------------- */