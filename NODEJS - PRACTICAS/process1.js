var nombre = 'Freilin Jose Jerez';

console.log(`Nombre: (${nombre}), Longitud: (${nombre.length}) `);
console.log(`Primer caracter ${nombre.charAt(0)}`);
console.log(`Substraer: ${nombre.substring(0,8)}`);

console.log("Esta el nombre de 'jeewose' en la variable");
var pos = nombre.toUpperCase().indexOf('JOSE');
nombre = nombre.toLowerCase();

if(pos != -1)
    console.log("El nombre existe");

else    
    console.log("El nombre no existe");
    
    



