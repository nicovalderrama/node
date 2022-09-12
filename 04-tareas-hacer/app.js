require('colors');

const { inquirerMenu,
    pausa,
    leerInput,
    listarTareasBorrar,
    confirmar,
    mostrarListadoChecklist} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');

console.clear();


const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if( tareasDB ){
        // Establecer las tareas
        tareas.cargarTareasFromArray( tareasDB );
    }



    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                // Crear opcion
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea(desc);
                break;
            case '2':
                console.log(tareas.listadoCompleto());
                break;
            case '3':
                console.log(tareas.listarPendientesCompletadas());
                break;
            case '4':
                console.log(tareas.listarPendientesCompletadas(false));
                break;
                
            case '5': // Completado | pendiente
                const ids = await mostrarListadoChecklist( tareas.listadoArr );
                tareas.toggleCompletadas( ids );
                break;
            case '6':
                const id = await listarTareasBorrar( tareas.listadoArr );
                if( id !== '0' ){
                    const ok = await confirmar('¿Está seguro?');
                    if( ok ){
                        tareas.borrarTarea( id );
                        console.log('Tarea borrada');
                    }
                }
                break;
        }

        guardarDB(tareas.listadoArr);
        await pausa();
    } while (opt !== '0');
}



main();

