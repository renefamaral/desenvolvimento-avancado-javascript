/**
 * Erros geralmente são tratados com try catch
 */

class CustomError extends Error {
    constructor({ message, data }) {
        super(message);
        this.data = data;
    }
}

try {
    console.log(name);   // esse trecho gera um erro pois a variável name não foi inicializada ainda. const não possui hoisting
    const name = 'Rene Amaral';

    const myError = new Error('Custom message'); // criando uma constante de erro

    throw myError;  // lançando o erro

} catch (err) {
    console.log('Error: ', err);
} finally {           // o finally pod ser utilizado para que um código continue rodando mesmo que haja um erro.
    console.log('Keep going...');
}



// usando a classe e erro customizada

try {
    const name1 = 'Magda Barbosa';

    const myError1 = new CustomError({ // usando a classe de erro
        message: 'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    });

    throw myError1;  // lançando o erro

} catch (err) {
    console.log(err);
    console.log(err.data); // imprimindo o data do erro
} finally {           // o finally pod ser utilizado para que um código continue rodando mesmo que haja um erro.
    console.log('Keep going...');
}


// mais condições


try {
    const name2 = 'Magda e Rene';

    const myError2 = new CustomError({ // usando a classe de erro
        message: 'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    });

    throw myError2;  // lançando o erro

} catch (err) {
    if (err.data.type === 'Server error') { // é possível programar ações específicas para determinados tipos de erro.
        // inserir código
    } else {
        // inserir código
    }

} finally {           // o finally pod ser utilizado para que um código continue rodando mesmo que haja um erro.
    console.log('Keep going...');
}