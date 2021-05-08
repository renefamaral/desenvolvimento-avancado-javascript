/**
 * Nova API fetch que tem o mesmo intuito do XMLHttpRequest. 
 * Fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como
 * os pedidos e respotas. Elas também fornece o método global fetch() que fornece uma maneira
 * fácil e lógica para buscar recursos de forma assíncrona através da rede.
 * 
 * Fetch utiliza promises
 */


// fetch('/data.json').then(responseStream => { // OBS: ESSE CÓDIGO FUNCIONA SOMENTE NO CONSOLE DO BROWSER, SEM SUPORTE NO NODE.
//      responseStream.json().then(data => {
//      console.log(data);
//   });
// });


// // 2° forma de fazer o mesmo código acima
// fetch('/data.json')
//   .then(responseStream => responseStream.json()) 
//   .then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log('Erro: ', err); // tratando o erro em caso de problema de rede
// });



// // Verificando o status
// fetch('/data.json')
//   .then(responseStream => {
//    if (responseStream.status === 200) {
//      return responseStream.json();
//    } else {
//      throw new Error('Request error');
//    }
// }) 
// .then(data => {
//   console.log(data);
// })
// .catch(err => {
//   console.log('Error: ', err); // tratando o erro em caso de problema de rede
// });




// const requisicao = fetch("https://ranekapi.origamid.dev/wp-json/api/produto")
// .then(function(response) {
//   console.log(response);
// });

// console.log(requisicao);



// /**
//  * ES7 - Async / Await
//  * 
//  * Formas de criar promisses de maneira mais simples, lidando com promises dentro de promises de maneira 
//  * enxuta
//  * 
//  * async não costuma ser utilizada sozinha, geralmente vem em conjunto com o await. O await espera que outras
//  * promises sejam resolvidas. Sempre que tivermos uma promises e for desejado aguardar a sua resolução utiliza-se
//  * o await
// */

// const asyncTimner = () => new Promise((resolve, reject) => {
//   setTimeout(() => {
//   resolve (12345);
//   }, 1000);
// })

// const simpleFunc = async () => {
//   const data = await asyncTimner();
//   console.log(data);                  // log somente para entender a ordem de execução
//   const dataJSON = await fetch('/data.json').then(resStream => resStream.json());

//   return dataJson;
// }

// simpleFunc()
//   .then(data => {
//     console.log(data);    
// })
//   .catch(err => { 
//     console.log(err); // trata em caso de erro
//   });



  // EventEmitter

  const EventEmitter = require('events');

  class Users extends EventEmitter {
    userLogged(data) {
      this.emit('User logged', data);
    }
  }

  const users = new Users();

  users.on('User logged', data => { // metodo on irá logar todos os usuários.
    console.log(data);
  });

  users.userLogged({ user: 'Rene Amaral' })


  const users1 = new Users();

  users1.once('User logged', data => { // metodo once loga somente o primeiro
    console.log(data);
  });

  users1.userLogged({ user: 'Rene Amaral' })
  users1.userLogged({ user: 'Magda Liliane' })

