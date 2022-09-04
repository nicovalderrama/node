
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

    const getEmpledo = (id,callback)=>{
        const empleado = empleados.find((e)=>{
            return e.id === id;
        })

        //pasando null como primer parametro para el error es como decir que no exite o es False
        if (empleado) {
            callback(null,empleado)
        }else{
            callback(`empleado con id ${id} no existe`)
        }
        
    }

    const getSalario= (id,callback)=>{
        const salario = salarios.find((e)=>{
            return e.id === id;
        })

        if (salario) {
            callback(null,salario);
        }else{
            callback(`el empleado con id ${id} no existe`)
        }
    }

    console.log(getSalario(2,(err,salario)=>{
        if (err) {
            console.log('ERROR');
            return console.log(err);
        }

        console.log('USUARIO EXISTE');
        console.log(salario);
    }));
    

    console.log( getEmpleado(1,(err,empleado)=>{
        if (err) {
            console.log('ERROR');
            return console.log(err);
        }
        console.log('USUARIO EXISTE:');
        console.log(empleado);
    }) );


