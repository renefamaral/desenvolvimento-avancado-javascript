/**
 * Promisses são maneiras de lidar com programação assíncrona.
 * Uma função callback é uma função passada a outra função como argumento, que é então invocado
 * dentro da função externa para completar algum tipo de rotina ou ação;
 * Promisses podem ter três status: pending, fulfilled e rejected;
 * 
 * Pending: quando está pendente, ou seja, em execução;
 * Fulfilled: quando terminou de executar;
 * Rejected: caso ocorra algum erro.+
 * 
 * Link de explicação sobre Promise: https://www.youtube.com/watch?v=kWmiHftLiVM
 *
 */


// exemplo de promisses em ES6

const doSomethingPromise = new Promise((resolved, reject) => { // forma de criar promise. A função precisa receber 2 argumentos (resolved, reject)    
    setTimeout(function() {
        // did something
        resolved('First data');
    }, 1000);
});


const doOtherThingPromise = new Promise((resolved, reject) => {
    throw new Error('Something went wrong'); // lançando um erro com a frase algo deu errado
    setTimeout(function(){
        // did other thing
        resolved('Second data');
   }, 1000);
});


const doOtherThingPromise2 = new Promise((resolved, reject) => {
    setTimeout(function() {
        // did something
        resolved('Third data');
    }, 1000);
})






console.log(doSomethingPromise); // aparece como pending visto que a execução ocorrerá após 1 milésimo de segundo

doSomethingPromise.then(data => console.log(data.split(''))); // utilizamos o then para a função receber os dados após a conclusão bem sucedida da promise.

doSomethingPromise.then(data => doOtherThingPromise2).then(data2 => console.log(data2.split(''))); // exemplo encadeando promisses, ou seja, uma promisse invocando outra

doOtherThingPromise.then(data => console.log(data)).catch(error => console.log(error)); // para que o erro lançado em doOtherThingPromise seja tratado, acrescentamos um catch conforme exemplo desse log.


// Também é possível fazer com que as promisses ocorram em paralelo

Promise.all([doSomethingPromise, doOtherThingPromise2]).then(data => {
    console.log(data);
});

Promise.all([doSomethingPromise, doOtherThingPromise2]).then(data => { // identico ao exemplo acima contudo acrescentando .split
    console.log(data[0].split(''));
    console.log(data[1].split(''));
});

Promise.race([doSomethingPromise, doOtherThingPromise2]).then(data => { // o .race executará a promise que terminar primeiro
    console.log(data);
});