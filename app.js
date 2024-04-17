

/*
const{crearArchivo} = require('./helper/multiplicar')
console.clear();

const [ , ,arg3 = 'j = 5'] = process.argv; 
const[ , j ]= arg3.split( '=');
console.log(j);

crearArchivo(j)
.then(nombreArchivo => console.log(nombreArchivo,'Creado'))
.catch(err => console.log(err));
*/

// PAQUETE YARGS

// hacer la tabla del 5 en javascrip
const { option } = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();
console.log(argv);


 crearArchivo(argv.b,argv.l, argv.h)
.then( nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
.catch( err => console.log(err)); 
    