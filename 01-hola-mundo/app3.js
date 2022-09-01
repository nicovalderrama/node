console.log('inicio de programa');

setTimeout(() => {
    console.log('primer timeOut');
}, 3000);

setTimeout(() => {
    console.log('Segundo timeOut');
}, 0);

setTimeout(() => {
    console.log('Tercer timeOut');
}, 0);

console.log('fin de programa');