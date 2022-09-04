const empleados = [
    {
        id:1,
        nombre:'Fernando'
    },
    {
        id:2,
        nombre:'Nicolas'
    },
    {
        id:3,
        nombre:'Mariano'
    }];
    
const salarios = [
    {
        id:1,
        salario:1000
    },
    {
        id:2,
        salario:1500
    }];

const getEmpleado = (id)=>{

        return new Promise((resolve,reject)=>{

        const empleado = empleados.find(e=>e.id === id)?.nombre

        empleado
            ?resolve(empleado)
            :reject(`No existe el empleado con el id ${id}`)
    });
}

const getSalario = (id)=>{
    return new Promise((resolve,reject)=>{

        const salario = salarios.find(e=>e.id === id)?.salario

        salario
            ?resolve(salario)
            :reject(`No existe salario con el id ${id}`)
    });
}

//cuando ponemos async estamos diciendo que retorne una promesa
const getInfoUsuario = async()=>{
    
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado} es de ${salario}`;
    }
    catch (error) {
        //throw es como llamar al reject de la promesa
        throw error;
    }
}

const id=2;

getInfoUsuario(id)
    .then(msg=>{
        console.log('TODO BIEN');
        console.log(msg)
    })
    .catch(err=>{
        console.log('TODO MAL');
        console.log(err)
    })