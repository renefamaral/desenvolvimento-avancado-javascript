// Sybols são uma maneira de gerar um identificador único;
// um Symbol nunca será igual a outro;
// Symbol pode ser utilizado para gerar propriedades privadas, não significando que são inacessíveis;
// Symbol possui uma série de propriedades chamada Well know symbols


const uniqueId = Symbol(); // Symbol não pode ser invocado usando = new

const uniqueId2 = Symbol('Hello'); // A string como parâmetro serve unicamente para identificar o Symbol 
const uniqueId3 = Symbol('Hello'); 

console.log(uniqueId2 === uniqueId3); // retornará false, pois o Symbol sempre será unico


const obj = {
    [uniqueId]: 'Hello'
};

console.log(obj);

console.log(Object.getOwnPropertySymbols(obj)); // o metodo Object.getOwnPropertySymbols retorna as propriedades do objeto


// Well known symbols
// possui algumas propriedades como iterator, split, toPrimitive, que podem ser utilizadas para adicionar metapropriedades

Symbol.iterator; // função responsável por fazer a iteração
Symbol.split;
Symbol.toPrimitive;
Symbol.toStringTag;

const obj1 = {
    [Symbol.iterator] () {

    }
}

const arr = [1, 2, 3, 4]

const iterador = arr[Symbol.iterator](); // dessa forma gero uma interface responsável pela iteração do array

// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next()); // na última iteração o value será undefined visto que o array possui quatro posições



//para o laço abaixo rodar no visual é necessário comentar os cinco console.log acima
while (true){ // exemplo usando um laço de repetição para gerar as iterações // while recebe true para iniciar o laço
    let {value, done} = iterador.next() // criando uma variável local com let e usando destructuring em value e done, propriedades do .next
    
    if (done){ // recebe done como false e para na quinta iteração quando for true
        break;
    }
    console.log(value); // imprimindo valores
}

//idêntico o exemplo acima contudo usando o ES6 com laço for
console.log();
arr1 = [1, 2, 3, 4]
const str = 'Digital Innovation One'
arr2 = ['Rene', 'Magda']

for (let value of arr1){ // exemplo usando o of em array
    console.log(value); 
}

for (let value of str){ // exemplo usando o of em strings
    console.log(value);
}



// usando Symbol.iterator em objetos

console.log();
console.log(arr[Symbol.iterator]().next()); // log para saber quais propriedades irão retornar {value, done} para utilizar na função abaixo

console.log();



//exemplo de Symbol.iterator para percorrer a lista de dados [1, 2, 3, 4] contida no objeto obj2, o qual tornaremos iterável
const obj2 = {
    values: [1, 2, 3, 4], 
    [Symbol.iterator]() { // criando uma interface para fazer iterações
        let indice = 0;  // criando variável que servirá de índice iniciando em 0 já que values: [1, 2, 3, 4] é um array contido no objeto

        return{          // retornando um objeto
            next: () => {  // arrow function para acessar o this
                indice ++; // aumentando o índice a cada iteração

                return {  // para cada vez que executar o next retorna um objeto contendo value e done
                    value: this.values[indice - 1], // 
                    done: indice > this.values.length
                };
            }
        };

    }
};

const iterador2 = obj2[Symbol.iterator]();

console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());

console.log();

for (let value of obj2){ // é possível realizar a iteração já que o objeto agora é iterável conforme código acima
    console.log(value);
}

console.log();

const arr3 = [...obj2]; // usando spreadOperator para passar os valores ao arr3
console.log(arr3); // imprimindo o arr3




// Generators são utilizados quando precisamos pausar as funções para depois retomar;
// Generators utilizam as mesmas propriedades de Symbols, ou seja, {value, done};
// Generator além de ser uma função com pausa, permite utilização para construir metapropriedade e transformas um objeto iterável

console.log();

function* hello() {  // o asteristico indica que trata-se de um generator
    console.log('Hello');
    yield 1;                  // palavra reservada para pausar a ação // o argumento do yeld atribui um valor a propriedade value
    
    console.log('From');
    const value = yield 2; // é possível atribuir valores recebidos, nesse caso value recebe o valor informado no prox console.log

    console.log(value);
}

hello();

const iterador3 = hello();

console.log(iterador3.next());
console.log(iterador3.next());
console.log(iterador3.next('Value outside!')); 


// usando generators para criar ranges infinitos

console.log();

function* naturalNumbers() {
    let number = 0;
    while (true){
        yield number;
        number++;
    }
}

const iterador4 = naturalNumbers();

console.log(iterador4.next());
console.log(iterador4.next());
console.log(iterador4.next());
console.log(iterador4.next());



// juntando Symbols e Generators

console.log();


const obj3 = {
    values: [10, 20, 30, 40],  // uttilizando o generator não é necessário utilizar o método next()
    *[Symbol.iterator] (){ // é possível utilizar qualquer forma de loop
        for (var i = 0; i < this.values.length; i++){ // enquanto i for menor que o tamanho do array contido em values faça:
            yield this.values[i]; // receba os valores de values no indice[i]
        }
    }
};

for (let value of obj3){
    console.log(value);
}

// Existem bibliotecas que utilizam generators para lidar com coisas assincronas, tais como:
// co;
// react;







