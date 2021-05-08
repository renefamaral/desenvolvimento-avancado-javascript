/**
 * Tipos de console
 */
console.log('Black text');
console.warn('Yellow text with alert');
console.error('Red error texte');

console.trace(); // traz informações de onde o código foi executado

console.group('My group'); // para criar grupo de logs
console.log('Info inside group');
console.log('More info inside group');
console.groupEnd('My group'); // fim do grupo de logs

console.time('Log time'); // para acompanhar o tempo de execução de uma determinada função
setTimeout(() => {
    console.timeEnd('Log time');
}, 2000);

console.table(['Celso Henrique', 'Digital Innovation One']); // log no formato tabela.
console.log('%c styled log', 'color: blue; font-size: 40px');

console.assert(1 === 1, 'Ops'); // executa somente a segunda propriedade caso a primeira não seja verdadeira
console.assert(2 === 0, 'Ops'); 
