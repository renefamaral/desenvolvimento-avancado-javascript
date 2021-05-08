/**
 * enhanced object literals = forma melhorada de escrever objetos literais
 */

// forma comum de escrever objetos

var obj = {                          // exemplo 1
    prop1: 'Digital Innovation One'
};

var prop2 = 'Digital Innovation One';

var obj2 = {                        // exemplo 2
    prop2: prop2
};

console.log(obj);
console.log(obj2);


var prop3 = 'Digital Innovation One';

var obj3 = {
    prop3                           // Nova forma, sem a necessidade de repetir o nome da propriedade conforme nos exemplos acima.
};

console.log(obj3);


function method1(){
    console.log('Digital Innovation One');
}

var obj4 = {                       // Exemplo chamando a função method1
    method1
};

obj4.method1();



var obj5 = {                   
    sum: function sum(a, b){
        return a + b;
    }
};

console.log(obj5.sum(1, 3)); // Exemplo chamando uma variável que por sua vez executa uma função de soma



var obj6 = {                   
    sum(a, b){          // omitindo a palavra function contida no exemplo acima.
        return a + b;
    }
};

console.log(obj6.sum(1, 3)); // Exemplo chamando uma variável que por sua vez executa uma função de soma



var propName = 'test'; 

var obj7 = {};

obj7[propName] = 'prop value'; // Forma antiga: criando o objeto prop7 e posteriormente a propriedade propName com o valor prop value

console.log(obj7);


var propName1 = 'test';

var obj8 = {
    [propName1]: 'prop value' // Nova forma: criando diretamente em obj8 a propriedade propName e atribuindo o valor 'prop value'
};

console.log(obj8);




