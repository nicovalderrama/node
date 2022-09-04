//desectructuracion de objetos
const deadpool={
    nombre:'Wade',
    apellido:'Winston',
    poder:'Regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellido}`
    }
}

const {nombre,apellido,poder}=deadpool;

function imprimeHeroe({nombre,apellido,poder}){
    console.log(nombre,apellido,poder);
}

imprimeHeroe(deadpool);

//desectructuracion de arreglos
const heroes=['deadpool','superman','batman']

//no toma en cuenta h1 y h2 y guarda solo el h3
const [ , ,h3]= heroes;


