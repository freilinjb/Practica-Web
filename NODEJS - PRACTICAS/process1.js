var Nombre = 'Freilin Jose Jerez';

console.log(`Nombre: (${Nombre}), Longitud: (${Nombre.length}) `);
console.log(`Primer caracter ${Nombre.charAt(0)}`);
console.log(`Substraer: ${Nombre.substring(0,8)}`);

console.log("Esta el Nombre de 'jeewose' en la variable");
var pos = Nombre.toUpperCase().indexOf('JOSE');
Nombre = Nombre.toLowerCase();

if(pos != -1)
    console.log("El Nombre existe");

else    
    console.log("El Nombre no existe");
    
    



