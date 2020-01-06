function cadenasPrueba(){
    var nombre = 'Freilin J. Jerez';
    console.log(`Longitud: ${nombre.length}`);
    console.log(`El caracter numero 5 es: ${nombre.charAt(5)}`);
    console.log(`Longitud: ${nombre.length}`);
    console.log(`Longitud: ${nombre.substring(2.5)}`);
    console.log(`IndexOf ${nombre.indexOf('Jerez')}`);
    console.log(`Mayusculas: ${nombre.toUpperCase()}`);
    console.log(`Minusculos: ${nombre.toLowerCase()}`);
    
    if(nombre.indexOf('Jerez') != -1)
        console.log(`Esta el nombre Jerez En la cadena`);

        
}

cadenasPrueba();