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

// function inverter(number) {
//     let numberAsString = number.toString().split('').reverse().join('');  
//     return console.log(numberAsString);
// }
// inverter(number);


const valor = 576;




function numberOfNotes(valor) {
    const notes = [100, 50, 20, 10, 5, 2, 1];
    let rest = valor;    
    for (let i = 0; i < notes.length; i++) {
        if ((rest / notes[i]) >= 0) {     
            let integer = rest / notes[i];            
            console.log(`${Math.floor(integer)} nota(s) de R$ ${notes[i]} `);
            rest = valor % notes[i];
        }
    }
}
console.log(valor);
numberOfNotes(valor);
//console.log(rest);