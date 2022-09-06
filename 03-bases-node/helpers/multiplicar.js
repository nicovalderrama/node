const fs = require('fs');
const colors = require('colors');
const argv = require('../config/yargs');

const crearArchivo= async(base = 5,listar= false)=>{
    try {
        if(listar){
            console.log('===================='.red);
            console.log(`   Tabla del ${base}   `.red.bold);
            console.log('===================='.red);
        }

        let salida = '';
        let consola = '';

        for (let i = 1; i <= argv.h; i++) {
	        consola += `${base} ${'x'.red} ${i} ${'='.red} ${base * i}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        
        if (listar) {
            console.log(consola);
        }
	
        fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    }catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}