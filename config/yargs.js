const { describe } = require('yargs');

const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .check((argv, options) => {
                        if (isNaN(argv.b)) {
                            throw 'La base tiene que ser un número'
                        }
                        return true;
                    })
                    .option('l',{
                        alias:'listar',
                        type:'boolean',
                        default:false,
                        describe:'Muestra la tabla en consola'
                    })
                    .option('h',{
                        alias:'hasta',
                        type: 'number',
                        default:10,
                        describe:'marca el limite de cuantas operaciones va a mostrar la tabla'
                    })
                    .argv;

module.exports = argv;