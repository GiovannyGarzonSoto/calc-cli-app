const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiply/multiply');

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`Creado : `, colors.green(archivo)))
        .catch(e => console.log(e));
    break;
    default:
        console.log('Comando no reconocido');
}



