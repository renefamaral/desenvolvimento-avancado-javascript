/**
 * Rest e Spread Operator
 * 
 */

// Vamos supor que quisessêmos passar uma quantidade indefinida de valores para a função sum

function sum(a, b){
    var value = 0;    
    for (var i = 0; i < arguments.length; i++){  // método antigo de uma função soma que recebe n argumentos
        value += arguments[i];        
    }
    return value;
}

console.log(sum(5, 5, 2, 1, 3, 6));


// No ES6 podemos fazer a mesma função com rest operator conforme exemplo abaixo

function sum1(...args){ // forma resumida com rest operator (...args)
    return args.reduce((acc, value) => acc + value, 0);     
}

console.log(sum1(5, 5, 2, 1, 3, 6));



// Também é possível passar mais argumentos quando usar rest operator


const sum2 = (a, b, ...rest) => { // nesse caso o rest irá armazenar todos os valores com exceção de a e b
    console.log(a, b, rest)
    return rest.reduce((acc, value) => acc += value, 0); 
};

console.log(sum2(5, 5, 2, 3, 6)); // a soma será realizada somente no rest (2, 3 e 6) = 11




// rest operator, spread operator ...
// exemplificando uma função que contém ...rest dentro de outra função que também possui ...rest

// o rest operator pega todos os parâmetros de uma função e transforma em array
// o spread operator pega todos os parâmetros de um array e passa para o parâmetro da função


const multiply = (...args) => args.reduce((acc, value) => acc * value, 1); // o ...args pega todos os argumentos e transforma em array

const sum3 = (...rest) => { // o ...args pega todos os argumentos e transforma em array
    return multiply(...rest) // neste caso o ...rest pega todos os dados no array e transforma em argumentos
}

console.log(sum3(5, 5, 2));

// spread operator pode ser utilizado em 
// * Listas
// * Strings
// * Arrays
// * Objects
// * Objetos iteráveis


// ex com Strings

const str1 = 'Digital Innovation One';


function logArgs(...args){
    return console.log(args);
}

console.log('Aqui está');
logArgs(...str1);


// ex com Listas (Array)

const arr = [1, 2, 3, 4]; 

logArgs(...arr);


// construindo um array com spread operator

const arr2 = [...arr, 5, 6, 7] // concatenando arrys ao criar um novo usando spread operator

console.log(arr2);


// clonando array com spread operator


const arrClone = [...arr]; // clone simples do arr

console.log(arrClone);


// usando spread operator com objetos literais. Nesse caso o spread só pode ser utilizados na criação de objetos literais


const obj = {
    test: 123
};

const obj2 = {
    ...obj,         // usando o spread para copiar no obj2 a chave e valor contido no obj.
    test2: 'hello'
}

console.log(obj2);



// Destructuring Assignment

var arr3 =  ['Apple', 'Banana', 'Orange', ['Tomato']]; // exemplo de forma antes do ES6 para atribuir valor a veriáveis co m base em arrays existentes

var apple = arr3[0];
var banana = arr3[1];
var orange = arr3[2];
var tomato = arr[3][0];

console.log(apple);
console.log(banana);
console.log(orange);
console.log(tomato);



var [apple1, banana1, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']]; // forma de atribuir valores a uma variável com base num array existente ES6 // teoricamente destruímos o array
console.log(apple1);
console.log(banana1);
console.log(orange2);
console.log(tomato2);

console.log(arr3);


// usando Destructuring em objetos

var obj3 = {
    name: 'Rene'
}

var name = obj3.name; // método sem uso de Destructuring Assignment

console.log(name);

var { name } = obj3; // usando Destructuring Assignment com a implementação do ES6 // exemplo usando a mesma propriedade name
var { name: name2 } = obj3; // exemplo criando uma nova varíavel (name2) que recebe o valor contido na propriedade name

console.log(name);
console.log(name2);


// ex de Destructuring de objeto dentro de outro objeto


var obj4 = {
    name: 'Magda',
    props: {
        age: 26,
        favoriteCollors: ['black', 'red']
    }
};

var age = obj4.props.age; // forma antida de atribuir valor de um objeto contido em outro objeto

console.log(age);

var {props: { age }} = obj4; // nova forma com implementação do ES6 // realiza o destructing em props e depois em age

console.log(age); 

var {props: { age: idade }} = obj4; // 2 destructings passando o valor de age para uma nova variável idade

console.log(idade);

var {props: { favoriteCollors: [collor1, collor2] }} = obj4; // fazendo destructing de um array contido em um objeto

console.log(collor1);
console.log(collor2);


var arr4 = [{name: 'watermelon', type: 'fruit'}, {name: 'melon', type: 'fruit'}]

var fruit1 = arr4[0].name; // forma antiga de pegar um valor de um objeto dentro de um array

console.log(fruit1);

var [ { name } ] = arr4; // utilizando destructing com a implementação do ES6

console.log(name);

var [ { name: nameFruit } ] = arr4; // utilizando Destructing e criando uma nova variável ES6 (nameFruit)

console.log(nameFruit);


// Podemos usar Destructing com var, const, let e lista de argumentos de uma função

// ex com functions

function sum5(arr){
    return arr[0] + arr[1]; // modo sem Destructing
}
console.log(sum5([5, 5]));

function sum6([a, b]) {
    return a + b;
}

console.log(sum6([3, 5]));

function sum7([a, b] = [0, 0]) { // exemplo utilizando default values [0, 0]
    return a + b;
}

console.log(sum7()); // log sem passar valores irá utilizar o default values
console.log(sum7([5, 5])); // ao passar valores executará a soma, resultado 10.


// Exemplo com objetos


function sum8({a, b}) { 
    return a + b;
}

console.log(sum8({a: 5, b: 5})); // passando as propriedades do objeto





