// Invertendo ordem dos números

const number = 9876543210;

const numberAsString = number.toString();

function inverter(number) {
    let numberAsString = number.toString();  
    let result = '';  
    for (let i = numberAsString.length - 1; i >= 0; i--) {
       result += numberAsString[i];
    }
    console.log(result);
}
inverter(number);


//Inversão de número de forma resumida

function inverter(number) {
    let numberAsString = number.toString().split('').reverse().join('');  
    return console.log(numberAsString);
}
inverter(number);


// Função para quantidade mínima de notas para um determinado valor

const valor = 503;

function numberOfNotes(valor) {
    const notes = [100, 50, 20, 10, 5, 2, 1];
    let rest = valor;    
    for (let i = 0; i < notes.length; i++) {
        if ((rest / notes[i]) > 0) { // se o valor divido pela nota for maior ou igual a zero     
            let integer = rest / notes[i];   // então integer recebe valor dividido pela nota    
            console.log(`${Math.floor(integer)} nota(s) de R$ ${notes[i].toFixed(2)} `); // imprimi a quantidade de notas para o valor
            rest %= notes[i]; // restante recebe a sobra de valor divido pela nota
        } else {
            console.log(`0 notas de ${notes[i].toFixed(2)}`);
        }
    } 
}
console.log(valor);
numberOfNotes(valor);


//Quantidade mínima de notas sem função e com mais logs

let valor = 188;
const notes = [100, 50, 20, 10, 5, 2, 1 ];
let minimumNotes = [];
let rest = valor;

for (let i = 0; i < notes.length; i++){
    minimumNotes[i] = Math.floor(rest / notes[i]);
    rest %= notes[i]; 
}

console.log(valor);
console.log(`${minimumNotes[0]} nota(s) de ${notes[0].toFixed(2)}`);
console.log(`${minimumNotes[1]} nota(s) de ${notes[1].toFixed(2)}`);
console.log(`${minimumNotes[2]} nota(s) de ${notes[2].toFixed(2)}`);
console.log(`${minimumNotes[3]} nota(s) de ${notes[3].toFixed(2)}`);
console.log(`${minimumNotes[4]} nota(s) de ${notes[4].toFixed(2)}`);
console.log(`${minimumNotes[5]} nota(s) de ${notes[5].toFixed(2)}`);
console.log(`${minimumNotes[6]} nota(s) de ${notes[6].toFixed(2)}`);


