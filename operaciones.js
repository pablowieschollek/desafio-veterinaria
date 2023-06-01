const fs = require('fs');
function registrar(nombre, edad, tipo, color, enfermedad) {
    argumentos = { 
        nombre: nombre, 
        edad: edad,
        tipo: tipo, 
        color: color, 
        enfermedad: enfermedad
    };

const data = fs.readFileSync('citas.json', 'utf8');
const citas = JSON.parse(data);
citas.push(argumentos);

fs.writeFileSync('citas.json', JSON.stringify(citas) )
};

function leer() {

const formularios = fs.readFileSync('citas.json', 'utf8')
console.log(formularios)

}; 

module.exports = { registrar, leer};
