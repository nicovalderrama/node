
// setTimeout(() => {
//     console.log('Hola mundo');
// }, 1000);

const getUsuarioById= (id, callback)=>{
    const usuario={
        id,
        nombre:'nicolas'
    }

    //aca pasamos como argumento los datos del usuario al callback
    setTimeout(() => {
        callback(usuario);
    }, 1000);

}

getUsuarioById(10, (e)=>{
    console.log(e.nombre.toUpperCase());
    console.log(e.id);
});







