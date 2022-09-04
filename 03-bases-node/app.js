
const fs = require('fs');

console.clear();

let salida='';
const base = 122;

for (let i = 1; i <= 10; i++) {
    salida += `${base} x ${i} = ${base*i}\n`;
}

console.log(salida);

fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
    if (err) throw err;
    console.log(`tabla del ${base} con file system`);
})





