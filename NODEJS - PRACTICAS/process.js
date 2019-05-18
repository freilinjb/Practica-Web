// console.log(process.argv);

function leerOpcion(opcion){
    var index = process.argv.indexOf(opcion);

    if(index === -1)
        return false;
    else
        return process.argv[index + 1];
}

var Nombre = leerOpcion("-Nombre");

console.log('El Nombre es: ' + Nombre);
 
process.stdout.write('Cual es el apellido: ');
process.stdin.on('data',function(data){
    process.stdout.write(`El Nombre completo es ${Nombre} ${data}\n`);
    process.exit();
});