//receber valor como string
//criar array

//atribuir valor ao array
//inverter array
//devolver valor invertido como BigInt

const number = 9876543210;

//const numberAsString = number.toString();

// function inverter(number) {
//     let numberAsString = number.toString();  
//     let result = '';  
//     for (let i = numberAsString.length - 1; i >= 0; i--) {
//        result += numberAsString[i];
//     }
//     console.log(result);
// }
// inverter(number);

function inverter(number) {
    let numberAsString = number.toString().split('').reverse().join('');  
    return console.log(numberAsString);
}
inverter(number);

// const nome = 'magda'

// console.log(nome.split('').reverse().join(''));



// console.log(number);
// console.log(numberAsString);







// function logArgs(...args){
//     const stringAsNumber = [...args];
//     console.log(stringAsNumber.reverse());    
// }

// logArgs(...number);


//logArgs(...string);

// const stringAsNumber = string.parseInt(string);

// console.log(stringAsNumber);

// const rene = [];



// console.log(rene.reverse());
