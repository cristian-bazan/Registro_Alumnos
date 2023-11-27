const readlineSync = require('readline-sync');

let name = readlineSync.question('Tu nombre: ');

console.log('Hola', name + '!');